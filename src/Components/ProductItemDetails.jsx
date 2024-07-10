import React from "react";
import { useParams } from "react-router-dom";
import ProductData from "../ProductDetails/ProductsData";
// import ArrowBack from '../assets/arrow-up-1--arrow-up-keyboard.png';
import { Link } from "react-router-dom";
import Color from "./Molecules/Atom/Color";
import './productItemDetail.css';
import ArrowBackItem from "./Molecules/Atom/ArrowBackNav";


const ProductItemDetails = () => {
    const {id} = useParams();
    const productItem = ProductData.find(product => (product.id).toString() === id);

    if (!productItem){
        return <div>No product to display</div>;
    }

    return (
        <main>
            {/* <Link to='/' className="no-underline">
                <div className="navigation">
                    <img src={ArrowBack} alt="back arrow" />
                    <p>Sh</p>
                </div>
            </Link> */}
            <ArrowBackItem text="shop" />

            <img src={productItem.productImg} alt={productItem.productDesc} className="lg-product-img" />

            <img src={productItem.productImg} alt={productItem.productDesc} className="sm-product-img" />

            <div className="product-details">
                <div className="first-info">
                    <div className="first-info-1">
                        <div className="des">
                            <p>Brand: Elegant | Similar product from Elegant</p>
                            <h4>{productItem.productDesc}</h4>
                        </div>
                        <div className="des-2">
                            <p>
                            Description: Experience ultimate comfort and durability 
                            with the Sleek Titanium Frame, 
                            known for its lightweight construction and premium feel.
                            </p>
                        </div>
                    </div>

                    <div className="first-info-2">
                        <div className="ddess">
                            <p>Lens Width and Frame size</p>
                            <select name="select" id="select">
                                <option value="select" selected>
                                    Select Frame Size
                                </option>
                            </select>
                        </div>
                        
                        <Color productItem = {productItem} />
                        
                    </div>
                    <button className="cartBtn lg">
                        {productItem.buttonText}
                    </button>
                    <div className="recommended">
                        <p>Recommended</p>
                        
                        <Link to ='/'>
                            <button> See all</button>
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default ProductItemDetails;
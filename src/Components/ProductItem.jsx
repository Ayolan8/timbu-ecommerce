import React from "react";
import { Link } from "react-router-dom";

const ProductItem = ({productCard}) => {
    return (
        <div className="product-cards">
            <img src={productCard.productImg} alt={productCard.productDesc} />
                
            <div className="product-desc">
                <img src={productCard.favorite} alt="liked icon" className="favorite-icon"/>
                <div className="product-desc-price">
                    <div className="mobile-desc">
                        <p className="desc">{productCard.productDesc}</p>
                    </div>
                    <p className="price">{productCard.price}</p>
                </div>
            </div>
            
            <Link to={`/productCard/${productCard.id}`}>
                <button className="btnText">{productCard.buttonText}</button>
            </Link>
            
        </div>
    )
}

export default ProductItem;
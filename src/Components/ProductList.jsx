import React from "react";
import './product-list.css';
import ProductItem from "./ProductItem";

const ProductList = ({ProductData}) => {
    return (
            <main className="product-container">
                {ProductData.map(productCard => (
                    <ProductItem key={productCard.id} productCard={productCard} />
                ))}
            </main>
       
    )
}

export default ProductList;
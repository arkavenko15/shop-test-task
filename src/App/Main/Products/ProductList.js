import React from 'react'
import ProductListItem from './ProductListItem'
import './productList.css'
const ProductList = ({
    products,
    loading,
    addProduct,
    productQuantity,
    setQuantity
}) => {
    if(loading){
        return <h2 className="load-products">Loading products....</h2> 
    }
    return (
        <>
            <div className="row">
                <h1 className="col-xl-12 col-lg-12 col-md-12 big-title">Our products</h1>
            </div>
            <div className="row">
                <ProductListItem
                    products={products}
                    addProduct={addProduct}
                    productQuantity={productQuantity}
                    setQuantity={setQuantity}
                />
            </div>
        </>

    )
}

export default ProductList
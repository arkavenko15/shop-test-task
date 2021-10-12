import React from 'react'
import './productListItem.css'
import '../../../common/style.css'
const ProductListItem = (
    {
        products,
        addProduct,
        productQuantity,
        setQuantity
    }
) => {
    return (
        <>
            {
                products.map((item) => (
                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-xs-12 col-del">
                        <div className="product-list-item item-pointer" key={item.id}>
                            <div className="product-img">
                                <img src={item.image_link} alt={item.name} onError={(e) => { e.target.onerror = null; e.target.src = "/shop-test-task/images/no-image.png" }} />
                            </div>
                            <div className="product-info">
                                <div className="product-title"><span>Name:</span>  {item.name}</div>
                                <div className="product-brand"><span>Brand:</span> {item.brand}</div>
                                <div className="product-type"><span>Type:</span> {item.product_type}</div>
                                <div className="product-colors">
                                    {
                                        item.product_colors.map((x) => (
                                            <div className="product-color" key={x.id}>
                                                <div className="color-item" style={{ background: x.hex_value }} ></div>
                                            </div>
                                        ))
                                    }
                                </div>
                                <div className="tag-list">
                                    {
                                        item.tag_list.map(function (el, i) {
                                            return <a className="hashtag" key={i}>#{el}</a>
                                        })
                                    }
                                </div>
                            </div>

                            <div className="product-navigation navigation-pointer">
                                <div className="product-features">$ {item.price}</div>
                                <button className="product-btn">more details</button>
                                <button className="product-btn" onClick={() => addProduct(item)}>add to cart</button>
                            </div>
                        </div>
                    </div>
                ))
            }

        </>
    )

}



export default ProductListItem



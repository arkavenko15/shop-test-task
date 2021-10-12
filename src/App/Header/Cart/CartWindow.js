import React, {useState} from 'react'
import './cart.css'
import {Link} from 'react-router-dom'
const CartWindow = ({
    closeCartWindow,
    cartItems,
    removeProduct,
    totalPrice,
    discount
}) => {

    return (
        <>
            <div className="cart-window cart-window--close">
                <div className="cart-top">
                    <div className="cart-window-title"></div>
                    <button className="cart-close-btn" onClick={() => closeCartWindow()}>
                        <span></span>
                        <span></span>
                    </button>
                </div>
                <div className="cart-items">
                    {
                        cartItems.map((item) => (
                            <div className="cart-item">
                                <div className="cart-item-img">
                                    <img src={item.image_link} onError={(e) => { e.target.onerror = null; e.target.src = "images/no-image.png" }}/>
                                </div> 
                                <div className="cart-item-title">{item.name}</div>
                                <div className="cart-item-price">{item.price}$</div>
                                <button className="remove-btn" onClick={()=>removeProduct(item)}>Remove</button>
                            </div>
                        ))
                    }

                </div>
                <div className="cart-price"><span>Total price:</span> {totalPrice.toFixed(2)}$</div>
                <div className="cart-price"><span>Discount:</span>15%</div>
                <div className="cart-discount-price"><span>Price with discount:</span>{discount.toFixed(2)}$</div>
                <div className="cart-nav">
                    <Link to="/shop-test-task/cart-page" style={{ textDecoration: 'none' }}><button className="cart-page-btn" onClick={() => closeCartWindow()}>View Cart</button></Link>
                    <button className="checkout-btn">Checkout</button>
                </div> 
            </div>
        </>

    )
}
export default CartWindow
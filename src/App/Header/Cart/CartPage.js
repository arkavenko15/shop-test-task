import './cart.css'
import '../../../common/style.css'
const CartPage = ({
    cartItems,
    removeProduct,
    totalPrice,
    discount
}) => {
    return (
        <>
            <div className="cart-page-items">
                {
                    cartItems.map((item) => (
                        <div className="cart-page">
                            <div className="row">
                                <div className="col-xl-4">
                                    <div className="cart-page-img">
                                        <img src={item.image_link} onError={(e) => { e.target.onerror = null; e.target.src = "images/no-image.png" }} />
                                    </div>
                                </div>
                                <div className="col-xl-4">
                                    <div className="cart-page-info">
                                        <div className="cart-page-title">{item.name}</div>
                                        <div className="cart-page-brand">{item.brand}</div>
                                        <div className="cart-page-description">{item.description}</div>
                                        <div className="product-colors">
                                            {
                                                item.product_colors.map((x) => (
                                                    <div className="product-color" key={x.id}>
                                                        <div className="color-item" style={{ background: x.hex_value }} ></div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4">
                                    <div className="cart-page-navigation">
                                        <div className="cart-tag-list">
                                            {
                                                item.tag_list.map(function (el, i) {
                                                    return <a className="hashtag" key={i}>#{el}</a>
                                                })
                                            }
                                        </div>
                                        <div className="cart-page-price"><span>Price: </span>{item.price} $</div>
                                        <button className="cart-remove-btn" onClick={() => removeProduct(item)}>Remove</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
            <div className="cart-page-prices"><span>Total price: </span>{totalPrice.toFixed(2)}$</div>
            <div className="cart-page-discount"><span>Price with discount: </span>{discount.toFixed(2)}$</div>
        </>
    )
}
export default CartPage
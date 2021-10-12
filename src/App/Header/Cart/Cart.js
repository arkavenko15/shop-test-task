import image from "./cart.png"
import './cart.css'
const Cart = ({
    openCartWindow,
    cartQuantity
}) => {
    return(
        <>
            <div className="cart-wrapper" onClick={()=>openCartWindow()}>
                <div className="cart-count">{cartQuantity}</div>
                <div className="cart-img">
                    <img src={image} />
                </div>
            </div>
        </>

    )
}
export default Cart
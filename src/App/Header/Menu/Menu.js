import './menu.css'
import {Link} from 'react-router-dom'
const Menu = () => {
    return(
        <div className="menu-wrapper">
            <ul className="menu">
                  <Link to="/shop-test-task/" style={{ textDecoration: 'none' }}><li>Home</li></Link>
                  <Link to="/shop-test-task/products" style={{ textDecoration: 'none' }}><li>Products</li></Link>
                  <Link to="/shop-test-task/payment" style={{ textDecoration: 'none' }}><li>Payment</li></Link>
                  <Link to="/shop-test-task/shipping" style={{ textDecoration: 'none' }}><li className="shipping">Shipping</li></Link>
            </ul>
        </div>
    )
}
export default Menu
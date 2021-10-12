import './menu.css'
import {Link} from 'react-router-dom'
const Menu = () => {
    return(
        <div className="menu-wrapper">
            <ul className="menu">
                  <Link to="/home" style={{ textDecoration: 'none' }}><li>Home</li></Link>
                  <Link to="/products" style={{ textDecoration: 'none' }}><li>Products</li></Link>
                  <Link to="/payment" style={{ textDecoration: 'none' }}><li>Payment</li></Link>
                  <Link to="/shipping" style={{ textDecoration: 'none' }}><li className="shipping">Shipping</li></Link>
            </ul>
        </div>
    )
}
export default Menu
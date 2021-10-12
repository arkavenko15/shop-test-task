import './menu.css'
import {Link} from 'react-router-dom'
const MobileMenu = (
    {
        mobileMenuClose
    }
) => {
    return (
        <div className="mobile-menu-wrapper">
            <ul className="mobile-menu-extended">
            <div className="mobile-menu-close" onClick={()=>mobileMenuClose()}>
                <span></span>
                <span></span>
            </div>
                  <Link to="/shop-test-task/" style={{ textDecoration: 'none' }}><li>Home</li></Link>
                  <Link to="/shop-test-task/products" style={{ textDecoration: 'none' }}><li>Products</li></Link>
                  <Link to="/shop-test-task/payment" style={{ textDecoration: 'none' }}><li>Payment</li></Link>
                  <Link to="/shop-test-task/shipping" style={{ textDecoration: 'none' }}><li>Shipping</li></Link>
            </ul>
        </div>
    )
}
export default MobileMenu
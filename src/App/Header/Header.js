import Logo from './Logo/Logo'
import Menu from './Menu/Menu'
import Cart from './Cart/Cart'
import MobileMenu from './Menu/MobileMenu'
import './header.css'
const Header = ({
    openCartWindow,
    cartQuantity,
    showMobileMenu,
    mobileMenuClose,
    totalPriceCount
    
}) =>{
    return(
        <div className="header-wrapper">
            <div className="container">
                <div className="row header-row">
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-5 col-xs-7">
                        <div className="logo">
                            <Logo/>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-5 col-md-5 col-sm-4 col-xs-3">
                        <div className="main-menu">
                            <Menu/>
                        </div>
                        <div className="mobile-menu" onClick={()=>showMobileMenu()}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <MobileMenu
                           mobileMenuClose={mobileMenuClose}                          
                        />
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-2">
                        <div className="cart">
                            <Cart
                                openCartWindow={openCartWindow}
                                cartQuantity={cartQuantity}
                                totalPriceCount={totalPriceCount}
                            />
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}
export default Header
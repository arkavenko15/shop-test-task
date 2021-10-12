import React from 'react'
import ProductList from './Products/ProductList'
import Filter from './Filter/Filter'
import CartWindow from '../Header/Cart/CartWindow'
import CartPage from '../Header/Cart/CartPage'
import {Route} from 'react-router-dom'
import ShopSlider from './ShopSlider/ShopSlider'
const Main = ({
    closeCartWindow,
    products,
    loading,
    addProduct,
    removeProduct,
    cartItems,
    productQuantity,
    setQuantity,
    changeView,
    sortProducts,
    groupProducts,
    searchTerm,
    searchKeyword,
    selectTerm,
    selectKeyword,
    changePerPageQuantity,
    totalPrice,
    discount,
    setProducts
}) => {
    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12">
                        {
                            <Filter
                                changeView={changeView}
                                sortProducts={sortProducts}
                                groupProducts={groupProducts}
                                searchTerm={searchTerm}
                                searchKeyword={searchKeyword}
                                changePerPageQuantity={changePerPageQuantity}
                                products={products}
                                setProducts={setProducts}
                                selectTerm={selectTerm}
                                selectKeyword={selectKeyword}
                            />
                        }
                    </div>
                    <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-xs-12">
                        {
                            <>
                            <Route path="/shop-test-task/" exact>
                                <div className="slider">
                                    <ShopSlider/>
                                </div>
                            </Route>
                            <Route path="/shop-test-task/products" exact>
                            <ProductList
                                products={products}
                                loading={loading}
                                addProduct={addProduct}
                                productQuantity={productQuantity}
                                setQuantity={setQuantity}
                            />
                            </Route>
                            <Route path="/shop-test-task/cart-page">
                              <CartPage
                                    cartItems={cartItems}
                                    removeProduct={removeProduct}
                                    totalPrice={totalPrice}
                                    discount={discount}
                              />
                            </Route>
                            </>
                        }
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <CartWindow
                      closeCartWindow={closeCartWindow}
                      cartItems={cartItems}
                      removeProduct={removeProduct}
                      totalPrice={totalPrice}
                      discount={discount}
                    />
                </div>
            </div>

        </>

    )
}
export default Main
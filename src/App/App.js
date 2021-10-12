import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'
import Pagination from './Main/Products/Pagination'
import '../common/style.css'


const App = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage, setProductsPerPage] = useState(15);
    const [color, setColor] = useState();
    const [productQuantity, setProductQuantity] = useState(1)
    const [cartQuantity, setCartQuantity] = useState(0);
    const [cartItems, setCartItems] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectTerm, setSelectTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [selectResults, setSelectResults] = useState([])
    const [reserve, setReserve] = useState([])
    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            const res = await axios.get('https://makeup-api.herokuapp.com/api/v1/products.json');
            setProducts(res.data);
            setReserve(res.data)
            setLoading(false)
        }
        fetchProducts();
    }, [])
    const closeCartWindow = () => {
        let cartWindow = document.querySelector(".cart-window")
        cartWindow.classList.add("cart-window--close")
    }
    const openCartWindow = () => {
        let cartWindow = document.querySelector(".cart-window")
        cartWindow.classList.remove("cart-window--close")
    }
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct)

    const paginate = pageNumber => {
        setCurrentPage(pageNumber)
        const viewSelect = document.querySelector(".view-select");
        viewSelect.value = "tile";
        changeView()
        setSearchTerm("")
        setSelectTerm("ALL PRODUCTS")
    };

    const addProduct = (item) => {
        setCartQuantity(cartQuantity + 1);
        setCartItems([...cartItems, item])
    }
    const removeProduct = (item) => {
        let hardCopy = [...cartItems];
        hardCopy = hardCopy.filter((el) => el.id !== item.id);
        setCartItems(hardCopy);
        setCartQuantity(cartQuantity - 1);
    };

    const changeView = () => {
        const viewSelect = document.querySelector(".view-select");
        const itemList = document.getElementsByClassName("col-del");
        const itemPointer = document.getElementsByClassName("item-pointer");
        if (viewSelect.value === "list") {
            for (let i = 0; i < itemList.length; i++) {
                itemList[i].classList.remove('col-xl-4', 'col-lg-4', 'col-lg-6', 'col-md-6', 'col-sm-6', 'col-xs-12');
                itemPointer[i].classList.remove('product-list-item');
                itemPointer[i].classList.add('list-item-view');
            }
        } else if (viewSelect.value === "tile") {
            for (let i = 0; i < itemList.length; i++) {
                itemList[i].classList.add('col-xl-4', 'col-lg-4', 'col-lg-6', 'col-md-6', 'col-sm-6', 'col-xs-12');
                itemPointer[i].classList.add('product-list-item');
                itemPointer[i].classList.remove('list-item-view');
            }
        }
    }
    const changePerPageQuantity = () => {
        const quantitySelect = document.querySelector(".quantity-select");
        setProductsPerPage(quantitySelect.value)
        changeView()
    }
    const sortProducts = () => {
        const sortSelect = document.querySelector(".sort-select");
        let sortedProducts;
        if (sortSelect.value == "cheapToExpensive") {
            sortedProducts = products.sort((a, b) => {
                return a.price - b.price
            })
        }
        else if (sortSelect.value == "expensiveToCheap") {
            sortedProducts = products.sort((a, b) => {
                return b.price - a.price
            })
        }
        else if (sortSelect.value == "byAlphabet") {
            sortedProducts = products.sort((a, b) => {
                if (a.name < b.name) { return -1; }
                if (a.name > b.name) { return 1; }
            })
        }
        else if (sortSelect.value == "byRevertAlphabet") {
            sortedProducts = products.sort((a, b) => {
                if (a.name < b.name) { return 1; }
                if (a.name > b.name) { return -1; }
            })
        }
        setProductsPerPage(20)
        setProducts(sortedProducts)
    }
    const groupProducts = () => {
        const groupSelect = document.querySelector(".group-select");
        let groupedProducts = products.map((item) => {       
                if(item.brand != groupSelect.value.toLowerCase()){
                    item.classList.add('hide');
            }
        })
        setProducts(groupedProducts)
    }
    const selectHandler = (selectTerm) =>{
        setSelectTerm(selectTerm)
        if (selectTerm !== "ALL") {
            const newProductsList = products.filter((product) => {
                return product.brand==selectTerm
            });
            setSearchTerm(" ")
            setSearchResults(newProductsList)

        } else {
            setSearchResults(products)
        }
    }
    const searchHandler = (searchTerm) => {
        setSearchTerm(searchTerm)
        if (searchTerm !== "") {
            const newProductsList = products.filter((product) => {
                return (Object.values(product.name)
                    .join("")
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase()))
            });
            setSearchResults(newProductsList)
        } else {
            setSearchResults(products)
        }
    }
    const showMobileMenu = () => {
        const mobileMenu = document.querySelector(".mobile-menu-extended")
        mobileMenu.classList.add("mobile-menu-hidden")
    }
    const mobileMenuClose = () => {
        const mobileMenu = document.querySelector(".mobile-menu-extended")
        mobileMenu.classList.remove("mobile-menu-hidden")
    }
    let totalPrice = 0;
    let discount = 0;
    const totalPriceCount = () => {
        cartItems.map((item) => {
            return totalPrice += parseFloat(item.price)
        })
    }
    const discountPrice = () => {
        return discount = totalPrice * 0.85
    }
    totalPriceCount()
    discountPrice()
    return (
        <>
            <Header
                openCartWindow={openCartWindow}
                cartQuantity={cartQuantity}
                showMobileMenu={showMobileMenu}
                mobileMenuClose={mobileMenuClose}

            />
            <Main
                closeCartWindow={closeCartWindow}
                products={searchTerm.length < 1 ? currentProducts : searchResults}
                loading={loading}
                addProduct={addProduct}
                removeProduct={removeProduct}
                cartItems={cartItems}
                productQuantity={productQuantity}
                changeView={changeView}
                sortProducts={sortProducts}
                groupProducts={groupProducts}
                searchTerm={searchTerm}
                selectTerm={selectTerm}
                searchKeyword={searchHandler}
                selectKeyword={selectHandler}
                changePerPageQuantity={changePerPageQuantity}
                totalPrice={totalPrice}
                discount={discount}
                setProducts={setProducts}
            />
            <Pagination
                productsPerPage={productsPerPage}
                totalProducts={products.length}
                paginate={paginate}
                color={color}
            />
            <Footer />
        </>
    )

}

export default App;

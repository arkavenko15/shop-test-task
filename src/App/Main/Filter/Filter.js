import React, { useState, useRef } from 'react'
import searchImg from './search-icon.png'
import './filter.css'

const Filter = ({
    changeView,
    sortProducts,
    searchTerm,
    searchKeyword,
    selectKeyword,
    changePerPageQuantity,
    selectTerm
}) => {
    const inputData = useRef("");
    const getSearchTerm = () => {
        searchKeyword(inputData.current.value)
    }  
    const getSelectTerm = ()=>{
        const groupSelect = document.querySelector('.group-select')
        selectKeyword(groupSelect.value)
    }  
    return (
        <>
            <div className="filter">
                <div className="filter-type">
                    <div className="filter-search">
                        <input className="filter-search-input" placeholder="Search" value={searchTerm} onChange={getSearchTerm} ref={inputData} />
                        <img className="search-img" src={searchImg} />
                    </div>
                    <h3 className="sort-title">Group products</h3>
                    <div className="filter-sort">
                        <select className="sort sort-select" onChange={()=>sortProducts()}>
                            <option className="sort-option" value="cheapToExpensive" >from cheap to expensive</option>
                            <option className="sort-option" value="expensiveToCheap">from expensive to cheap</option>
                            <option className="sort-option" value="byAlphabet">A - Z</option>
                            <option className="sort-option" value="byRevertAlphabet">Z - A</option>
                        </select>
                        <button className="sort-btn" onClick={() => changePerPageQuantity()}>change order</button>
                    </div>
                    <h3 className="sort-title">Sort products</h3>
                    <div className="filter-sort">
                        <select className="sort group-select" onChange={getSelectTerm} value={selectTerm}>
                            <option className="sort-option" value="ALL" >ALL PRODUCTS</option>
                            <option className="sort-option" value="dior" >DIOR</option>
                            <option className="sort-option" value="colourpop">COLOURPOP</option>
                            <option className="sort-option" value="MISTURA">MISTURA</option>
                            <option className="sort-option" value="SMASHBOX">SMASHBOX</option>
                            <option className="sort-option" value="STILA">STILA</option>
                            <option className="sort-option" value="DR. HAUSCHKA">DR. HAUSCHKA</option>
                        </select>
                    </div>
                    <h3 className="sort-title">Change view</h3>
                    <select className="sort view-select" onChange={() => changeView()}>
                        <option className="view-option" value="tile">TILE</option>
                        <option className="view-option" value="list">LIST</option>
                    </select>
                    <h3 className="sort-title">Products per page</h3>
                    <select className="sort quantity-select" onChange={() => changePerPageQuantity()}>
                        <option className="quantity-option" value="10">10</option>
                        <option className="quantity-option" value="15">15</option>
                        <option className="quantity-option" value="20">20</option>
                        <option className="quantity-option" value="25">25</option>
                    </select>
                </div>
            </div>
        </>
    )
}
export default Filter
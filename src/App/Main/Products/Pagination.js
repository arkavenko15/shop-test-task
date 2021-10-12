import React from 'react'
const Pagination = ({ productsPerPage, totalProducts, paginate, color, setColor}) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-xl-3 col-lg-3 col-md-3"></div>
                <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-xs-12">
                    <nav>
                        <ul className="pagination">
                            {
                                pageNumbers.map(number => (
                                    <li key={number} className="page-item" style={{background:color}}>
                                        <a onClick={()=>{
                                            paginate(number)
                                        }} 
                                             className="page-link" >
                                            {number}
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>
                </div>
            </div>
        </div>

    )
}
export default Pagination
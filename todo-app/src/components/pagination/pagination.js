'use strict'
import React from "react";

const Pagination = ({ itemsPerPages, totalItems, paginate, currentPage }) => {
    const pageNumber = [];
    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPages); i++) {
        pageNumber.push(i);
    }
    return (
        <nav  style={{ marginLeft:"500px" }}>
            <ul className='pagination'>
                <li onClick={() => currentPage > 1 ? paginate(currentPage - 1) : null} class="page-item"><a class="page-link" href="#">Previous</a></li>
                {pageNumber.map(number => (
                    <li key={number} className='page-item'>
                        <a onClick={() => paginate(number)} href='!#' className='page-link'>
                            {number}
                        </a>
                    </li>
                ))}
                <li onClick={() => currentPage < (Math.ceil(totalItems / itemsPerPages)) ? paginate(currentPage + 1) : null} class="page-item"><a class="page-link" href="#">Next</a></li>
            </ul>
        </nav>
    )
}
export default Pagination;

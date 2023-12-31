import React from "react";
import "../css/WarbandsBrowser/WarbandsDisplay.css"


export const ClearFilters = () => {
    return (
        <nav>
            <ul className='pagination'>
                <li className='page-item'>
                    <button onClick={() => {    window.location.reload(); // This will reload the page
                    }} className='page-link'>Clear Filters</button>
                </li>
            </ul>
        </nav>
    );
};

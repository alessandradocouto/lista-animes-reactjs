import React from 'react'
import './Pagination.css'

export default function Pagination({ limit, total, offset, setOffset }) {
    // 15 350 0
    // console.log( limit, total, offset, onPageChange );
    // maximo de buttons da pagiancao
    const maxButton = 5;
    // numeros de button na esquerda
    const maxButtonLeft = (maxButton - 1) / 2;
    // atualizando o valor de offset = 0  1  2
    const currentPage =  offset === 0 ? 1 : (offset / limit) +  1;
    // numero de buttons total = 24
    const totalButton = Math.ceil(total / limit);
    // maximo de button no First = 18
    const maxFirst = Math.max(totalButton - (maxButton - 1), 1);
    const first = Math.min( Math.max(currentPage - maxButtonLeft, 1), maxFirst);
    // Math.max(currentPage - maxButtonLeft, 1) = 1  
    // Math.min(1, maxFirst = 18) = 1
        
    // para criar array de buttons
    // Array.from({length: maxButton});
    // const pageNumbers = [];

    function onPageChange(p) {
        if(p === 0) return 1;
        return setOffset((p - 1) * limit);
    }

    return (
        <nav>
            <ul className="pagination">
                <li>
                    <button className="pagination__item"
                        onClick={() => onPageChange(currentPage - 1)}
                        disabled={currentPage === 1}>
                        prev
                    </button>
                </li>
                {Array.from({ length: Math.min(maxButton, totalButton) })
                    .map( (_, index) => index + first )
                    .map( (pageNumber) => (
                        <li key={pageNumber}>
                            <button
                            onClick={() => onPageChange(pageNumber)}
                            className={
                                pageNumber === currentPage
                                  ? 'pagination__item--active'
                                  : 'pagination__item'
                              }
                            >
                            {pageNumber}
                            </button>
                            
                        </li>
                    ))
                }
                <li>
                    <button className="pagination__item" 
                        onClick={() => onPageChange(currentPage + 1)}
                        disabled={currentPage === totalButton}>
                        next
                    </button>
                </li>
            </ul>
        </nav>
    );
}

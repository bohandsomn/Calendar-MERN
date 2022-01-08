import React from 'react'

export default function SwitchMonth({month, setDate}) {
    return (
        <div className="d-flex align-items-center">
            <span className="glyphicon glyphicon-chevron-left cursor-pointer" onClick={() => setDate(month - 1)}>
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="32" 
                    height="32" 
                    fill="currentColor" 
                    className="bi bi-arrow-left" 
                    viewBox="0 0 16 16"
                >
                    <path 
                        fillRule="evenodd" 
                        d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                    />
                </svg>
            </span>
            <div
                onClick={() => setDate( (new Date()).getMonth(), (new Date()).getFullYear() )}
                className="bg-dark h-15 w-15 rounded-circle cursor-pointer"
            />
            <span className="glyphicon glyphicon-chevron-right cursor-pointer" onClick={() => setDate(month + 1)}>
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="32" 
                    height="32" 
                    fill="currentColor" 
                    className="bi bi-arrow-right" 
                    viewBox="0 0 16 16"
                >
                    <path 
                        fillRule="evenodd" 
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    ></path>
                </svg>
            </span>
        </div>
    )
}

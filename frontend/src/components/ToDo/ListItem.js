import React from 'react'

export default function ListItem({text, ind, removeOne}) {
    return (
        <li className="d-flex flex-row list-group-item align-items-center">
            <div className="w-100 text-break">{text}</div>
            <div 
                onClick={() => removeOne(ind)}
                className="flex-shrink-1 text-danger cursor-pointer"
            >Delete</div>
        </li>
    )
}

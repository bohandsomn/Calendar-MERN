import React from 'react'

import ListItem from './ListItem'

export default function List({list, removeOne}) {
    return (
        <ul className="h-100 list-group">
            {
                list.map( (item, ind) => 
                    <ListItem 
                        text={item} 
                        key={ind} 
                        ind={ind}
                        removeOne={removeOne}
                    /> 
                )
            }
        </ul>
    )
}

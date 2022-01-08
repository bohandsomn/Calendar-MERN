import React from 'react'

import Field from '../ToDo/Field.js'
import Month from './Month.js'

export default function Calendar() {
    return (
        <div className="container d-flex">
            < Month />
            < Field/>
        </div>
    )
}
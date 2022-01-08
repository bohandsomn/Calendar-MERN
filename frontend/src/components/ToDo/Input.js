import React, { useState } from 'react'

export default function Input({push, changeKey}) {
    const [text, setText] = useState('')
    const submit = e => {
        e.preventDefault()

        if (!text) {
            return
        }
        
        push(text)
        setText('')
    }
    return (
        <div className="d-flex">
            <form onSubmit={submit}>
                <input 
                    type="text"
                    placeholder="Enter your task"
                    onChange={e => setText(e.target.value)}
                    value={text}
                    className="form-control"
                />
            </form>
            <button 
                className="btn btn-warning"
                onClick={() => changeKey('')}
            >Save</button>
        </div>
    )
}

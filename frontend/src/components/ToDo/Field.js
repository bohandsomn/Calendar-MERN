import React from 'react'
import { connect } from 'react-redux'

import { push, removeOne, changeKey } from '../../redux'
import Input from './Input'
import List from './List'

function Field({ list, push, keyOfDay, removeOne, changeKey }) {
    const [year, month, day] = keyOfDay.split('-')
    const key = [year, +month+1, day].join('-')

    return (
        <div className="field">
            <div className="d-flex align-items-start">
                <h1>To do list</h1>
                <p>{keyOfDay && key}</p>
            </div>
            {
                keyOfDay !== ''
                ? <div>
                    < Input push={push} changeKey={changeKey}/>
                    < br />
                    < List list={list} removeOne={removeOne}/>
                </div>
                : <p>Please select a day</p>
            }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        list: state.listReducer,
        keyOfDay: state.keyReduser
    }
}

const dispatchToProps = dispatch => {
    return {
        push: (list) => dispatch( push(list) ),
        removeOne: (ind) => dispatch( removeOne(ind) ),
        changeKey: (key) => dispatch( changeKey(key) )
    }
}

export default connect(
    mapStateToProps, 
    dispatchToProps
)(Field);
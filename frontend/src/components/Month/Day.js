import React from 'react'
import { connect } from 'react-redux'

import { getList } from '../../functions'
import { put, changeKey } from '../../redux'

function Day({ currDay, numberOfDays, keyOfDay, put, changeKey }) {    
    const isThisMonth = currDay > 0 && currDay <= numberOfDays

    const styles = ['flex-fill', 'bg-warning', 'bg-opacity-25', 'w-14', 'day', 'border border-warning']
    isThisMonth && styles.push('bg-light')

    return (
        <div 
            className={styles.join(' ')}
            onClick={() => getList(keyOfDay, put, changeKey, numberOfDays)}
        >
            {
                isThisMonth && 
                <>
                    <div className="span bg-secondary text-warning rounded-circle">{currDay}</div>
                </>
            }
        </div>
    )
}

const mapStateToProps = state => {
    return {
    }
}

const dispatchToProps = dispatch => {
    return {
        put: (list) => dispatch( put(list) ),
        changeKey: (key) => dispatch( changeKey(key) )
    }
}

export default connect(
    mapStateToProps, 
    dispatchToProps
)(Day);
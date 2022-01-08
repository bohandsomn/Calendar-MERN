import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { decodeMonth, setList } from '../../functions'
import { useYearWithMonth, usePrevious } from '../../hooks'
import { days } from '../../staticData'
import Day from './Day.js'
import SwitchMonth from './SwitchMonth.js'

function Month({keyRedux, list}) {
    const [month, year, setDate] = useYearWithMonth( new Date().getMonth() )

    const { step, numberOfDays, nameOfMonth, fullNumber } = decodeMonth(month, year)

    const previousKeyRedux = usePrevious(keyRedux)
    useEffect( () => {
        if (previousKeyRedux !== keyRedux && previousKeyRedux) {
            setList(previousKeyRedux, list)
        }
    }, [keyRedux, list, previousKeyRedux] )

    return (
        <div className="seven-cols vh-100 container">
            <div className="d-flex align-items-center">
                <h1 className="w-100">{nameOfMonth}, {year}</h1>
                < SwitchMonth month={month} setDate={setDate}/>
            </div>
            <div className="d-flex flex-wrap">
                {
                    days.map( day => 
                        <div
                            className="flex-fill bg-warning bg-opacity-25 w-14 h-20 border border-warning dayOfWeek user-select-none"
                            key={day}
                        >{day}</div>
                    )
                }
            </div>
            <div className="d-flex flex-wrap">
                {
                Array(fullNumber)
                    .fill('')
                    .map( (_, ind) => 
                        < Day 
                            currDay={ind + 1 - step} 
                            numberOfDays={numberOfDays}
                            key={`${year}-${month}-${ind + 1 - step}`}
                            keyOfDay={`${year}-${month}-${ind + 1 - step}`} 
                        /> 
                    )
                }
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        keyRedux: state.keyReduser,
        list: state.listReducer
    }
}

const dispatchToProps = dispatch => {
    return {
    }
}

export default connect(
    mapStateToProps, 
    dispatchToProps
)(Month);
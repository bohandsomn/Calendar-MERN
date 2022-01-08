import { useState } from "react";

export function useYearWithMonth(initialMonth = 0, initialYear = new Date( Date.now() ).getFullYear()) {
    const [month, setMonth] = useState(initialMonth)
    const [year, setYear] = useState(initialYear)
    
    const setDate = (month, y = year) => {
        if(month < 0) {
            setYear(y - 1);
            setMonth(11)
        } else if(month > 11) {
            setYear(y + 1);
            setMonth(0);
        } else {
            setYear(y)
            setMonth(month)
        }
    }

    return [month, year, setDate]
}
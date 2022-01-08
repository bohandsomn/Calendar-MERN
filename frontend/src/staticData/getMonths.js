export const getMonths = (year) => [
    {name: 'January',   numberOfDays: 31 }, 
    {name: 'February',  numberOfDays: year % 4 === 0 ? 29 : 28 }, 
    {name: 'March',     numberOfDays: 31 }, 
    {name: 'April',     numberOfDays: 30 }, 
    {name: 'May',       numberOfDays: 31 }, 
    {name: 'June',      numberOfDays: 30 }, 
    {name: 'July',      numberOfDays: 31 }, 
    {name: 'August',    numberOfDays: 31 }, 
    {name: 'September', numberOfDays: 30 }, 
    {name: 'October',   numberOfDays: 31 }, 
    {name: 'November',  numberOfDays: 30 }, 
    {name: 'December',  numberOfDays: 31 }
]
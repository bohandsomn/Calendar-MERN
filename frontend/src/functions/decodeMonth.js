import { getMonths } from '../staticData'

export const decodeMonth = (month, year) => {
    const months = getMonths(year)
    const nameOfMonth  = months[month].name;
    const numberOfDays = months[month].numberOfDays;
    const stepLT0 = new Date( year, month, 1 ).getDay() - 1 < 0;
    const step = stepLT0 ? new Date( year, month, 1 ).getDay() + 6 : new Date( year, month, 1 ).getDay() - 1;
    const fullNumber = ((step + numberOfDays) % 7 ? 7 - (step + numberOfDays) % 7 : 0) + step + numberOfDays;

    return {step, numberOfDays, nameOfMonth, fullNumber}
}
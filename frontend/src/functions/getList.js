export const getList = async (keyOfDay, put, changeKey, numberOfDays) => {
    const [ , , currKey] = keyOfDay.split('-')
    const isNotValidDay = currKey === '' || currKey <= 0 || currKey > numberOfDays

    if (isNotValidDay) {
        return
    }

    await fetch(`http://localhost:5000/api/getList`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({key: keyOfDay})
    })
        .then(res => res.json())
        .then(res => {
            changeKey(keyOfDay)
            return res;    
        })
        .then(todoList => put(todoList.list))
        .catch(err => console.log(err))
    
}
export const push = (text) => {
    return {
        type: 'PUSH',
        payload: text
    }
}

export const put = (list) => {
    return {
        type: 'PUT',
        payload: list,
        isSuccess: true
    }
}

export const changeKey = (key) => {
    return {
        type: 'CHANGE_KEY',
        payload: key
    }
}

export const removeOne = (ind) => {
    return {
        type: 'REMOVE_ONE',
        payload: ind
    }
}
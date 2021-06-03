export const ADD = "ADD";
export const REMOVE = "REMOVE";
export const COMPLETE = "COMPLETE";

export const addTodoList = (text) => {
    return {
        type: ADD,
        payload: text
    }
}

export const removeTodoList = (id) => {
    return {
        type: REMOVE,
        payload: id
    }
}
export const completedToItemFromToDoList = (id) => {
    return {
        type: COMPLETE,
        payload: id
    }
}



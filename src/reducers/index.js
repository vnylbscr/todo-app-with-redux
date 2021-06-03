import { ADD, REMOVE, COMPLETE } from "../actions/index"
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    todoList: []
}
export const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case ADD:
            return {
                ...state,
                todoList: [...state.todoList, {
                    id: uuidv4(),
                    text: action.payload,
                    completed: false
                }
                ]
            }
        case REMOVE:
            return {
                ...state,
                todoList: state.todoList.filter(item => item.id !== action.payload)
            }
        case COMPLETE:
            return {
                ...state,
                todoList: state.todoList.map(item => {
                    return item.id === action.payload ? { ...item, completed: !item.completed } : item
                }
                )
            }
        default:
            return state;
    }
}
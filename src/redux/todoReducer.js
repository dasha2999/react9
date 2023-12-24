import { TODO_ACTIONS_TYPES } from "./todoActionTypes"

const initialState = {
    todos: []
}

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case TODO_ACTIONS_TYPES.ADD_TODO:
            return {
                todos: [...state.todos, {...action.payload}]
            }
        case TODO_ACTIONS_TYPES.DELETE_TODO:
            return
        default:
            return {...state}
    }
}
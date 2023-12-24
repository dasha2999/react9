import { v4 as uuidv4 } from "uuid";
import { TODO_ACTIONS_TYPES } from "./todoActionTypes";

export const addTodo = (todotext) => ({
    
        type: TODO_ACTIONS_TYPES.ADD_TODO,
        payload: {
            text: todotext,
            done: false,
            id: uuidv4()
        }
})

// {
//     text: 'dkdk',
//     done: false,
//     id: '239323'
// }
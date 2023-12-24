import { useState } from 'react';
import Stack from '@mui/material/Stack';
import { useDispatch, useSelector } from 'react-redux';
import { TextField } from "../TextField";
import { Todo } from '../ToDo';
import { Btn } from '../Button';
import { getTodos } from '../../redux/todoSelectors';
import { addTodo } from '../../redux/todoActions';

export const TodoListPage = () => {
    const [todoText, setTodoText] = useState('')

    const dispatch = useDispatch()
    const todos = useSelector(getTodos)

    const handleChange = ({target: {value}}) => {
        setTodoText(value)
    } 

    const handleClick = () => {
        // console.log('add todo')
        dispatch(addTodo(todoText))
        setTodoText('')
    }

    const handleDelete = () => {
        console.log('delete')
    }

    return (
        <>
        <h1 style={{textAlign: 'center'}}> Todo list page </h1>
        <Stack 
        spacing={10} 
        direction='row' 
        justifyContent='center'
        alignItems='center'
        >
            <TextField 
            value={todoText} 
            fieldName='TODO'
            handleChange ={handleChange}
            />
            <Btn text='add' handleClick={handleClick}/>
        </Stack>
        <Stack marginTop={10} spacing={5} justifyContent='center' alignItems='center'>
            <Todo handleDelete={handleDelete} />
        </Stack>
        </>
        
    )
}
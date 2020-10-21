import React from 'react'
import { 
    IconButton, ListItem, Typography, Checkbox 
} from '@material-ui/core'
import { Close } from '@material-ui/icons'

const Todo = ({ todo, toggleComplete, removeTodo }) => {

    const handleCheckboxClick = _ => {
        toggleComplete(todo.id)
    }

    const handleRemoveClick = _ => {
        removeTodo(todo.id)
    }

    return (
        <ListItem style={{ display: 'flex' }}>
            <Checkbox
                onClick={handleCheckboxClick}
                checked={todo.completed}
            ></Checkbox>
            <Typography
                variant='body1'
                style={{
                    textDecoration: todo.completed ? 'line-through' : null
                }}
            >
                {todo.task}
            </Typography>
            <IconButton onClick={handleRemoveClick}>
                <Close />
            </IconButton>
        </ListItem>
    )
}

export default Todo

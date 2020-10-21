import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'
import { Button, TextField } from '@material-ui/core'

const TodoForm = ({ addTodo }) => {

    const [todo, setTodo] = useState({
        id: '', task: '', completed: false
    })

    const handleTaskInputChange = e => {
        setTodo({ ...todo, task: e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (todo.task.trim()) {
            addTodo({ ...todo, id: uuid() })
            // reset task input
            setTodo({ ...todo, task: '' })
        }
    }

    return (
        <form className='todo-form' onSubmit={handleSubmit}>
            <TextField
                name='task'
                value={todo.task}
                onChange={handleTaskInputChange}
                label='Task'
                variant='filled'
                color='primary'
            />
            <Button
                type='submit'
                color='primary'
                variant='contained'
                size='large'
                style={{
                  fontSize: 21
                }}
                onSubmit={handleSubmit}>Submit</Button>
        </form>
    )

}

export default TodoForm

import React, { useContext } from 'react'
import { TodoContext } from '../contexts/TodoContext'

export default function TodoItem({todo, selected}) {
    const { handleComplete } = useContext(TodoContext)
    return (
        <div className={todo.color + ' todo-item' + (todo.completed ? ' completed' : '')} key={todo.id} onClick={e => handleComplete(todo.id)}>
                <div className="todo-top">
                {todo.completed ? (
                    <strike><p className="todo">{todo.todo}</p></strike>
                ) : (
                    <p className="todo">{todo.todo}</p>
                )}
                <div className={todo.completed ? 'circle circle-fill' : 'circle'}></div>
            </div>
            {selected === 'All' && (
                <div className="type">
                    {todo.selected}
                </div>
            )}
        </div>
    )
}

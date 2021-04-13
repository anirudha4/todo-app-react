import React, { useContext, useEffect, useState } from 'react'
import { TodoContext } from '../contexts/TodoContext'
import Header from './Header';
import List from './List';
import NoTodos from './NoTodos';
import Options from './Options';

export default function TodoList() {
    const [selected, setSelected] = useState('All')
    const {todos, setTodos} = useContext(TodoContext)
    return (
        <div className="todo-list">
            <Header text="TODO'S FOR TODAY" showIntro={true} />
            <Options selected={selected} setSelected={setSelected} />
            {todos.length ? <List todos={todos} selected={selected} /> : (
                <NoTodos />
            ) }
        </div>
    )
}

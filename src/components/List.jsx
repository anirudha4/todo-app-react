import TodoItem from './TodoItem'

export default function List({todos, selected}) {
    return (
        <div className="list">
            {todos.map(todo => {
                return (
                    <div key={todo.id}>
                    {(todo.selected === selected || selected === 'All') && (
                        <TodoItem key={todo.id} todo={todo} selected={selected} />
                    )}
                    </div>
                )
            })}
        </div>
    )
}


export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
    return (
        <li
            key={todo.id}
            className="list-group-item d-flex justify-content-between"
        >
            <span
                className=
                {`align-self-center 
                ${ (todo.done) ? 'text-decoration-line-through' : ''}`}
                aria-label="span"
                onClick={ () => onToggleTodo(todo.id)}
            >
                {todo.description}
            </span>
            <button
                className="btn btn-danger pl-2"
                onClick={() => onDeleteTodo(todo.id)}
            >
                Borrar
            </button>
        </li>
    )
}

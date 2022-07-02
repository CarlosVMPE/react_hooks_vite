import { useTodos } from '../hooks/useTodos';
import { TodoAdd, TodoList } from './';

export const TodoApp = () => {

    const { todos, todosCount, pendingTodos,
        handleNewTodo, handleDeleteTodo, handleToggleTodo,
    } = useTodos();

    return (
        <>
            <h1>TodoApp: {todosCount}, <small>pendientes: {pendingTodos}</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">

                    {/* Todo List */}
                    <TodoList
                        todos={todos}
                        onDeleteTodo={handleDeleteTodo}
                        onToggleTodo={handleToggleTodo}
                    />
                    {/* Fin Todo List */}
                </div>

                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />

                    {/* TodoAdd onNewTodo(todo)*/}
                    {/* { id: newDate(), description: '', done_ false } */}
                    <TodoAdd handleNewTodo={handleNewTodo} />
                    {/* Fin TodoAdd */}
                </div>
            </div>
        </>
    )
}
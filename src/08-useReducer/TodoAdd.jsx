import { useForm } from '../hooks/useForm';

export const TodoAdd = ({ handleNewTodo }) => {

    const { description, onInputChange, onResetForm } = useForm({
        description: ''
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        if (description.length <= 2) return;
        const newTodo = {
            id: new Date().getTime(),
            description,
            done: false
        };
        handleNewTodo(newTodo);
        onResetForm();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="¿Qué hay que hacer?"
                name="description"
                className="form-control" value={description}
                onChange={onInputChange} />

            <button type="submit"
                className="btn btn-outline-primary mt-3">
                Agregar
            </button>
        </form>
    )
}

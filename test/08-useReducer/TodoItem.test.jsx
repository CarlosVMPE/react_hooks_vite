import { render, screen } from "@testing-library/react";
import { fireEvent } from "@testing-library/dom";
import { TodoItem } from "../../src/08-useReducer/TodoItem";

describe('Test in TodoItem', () => {

    const todo = {
        id: 1,
        description: 'Piedra del Alma',
        done: false
    };

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach(() => jest.clearAllMocks());

    test('should be show a Todo pending for complete', () => {
        render(<TodoItem todo={todo}
            onToggleTodo={onToggleTodoMock}
            onDeleteTodo={onDeleteTodoMock} />);

        const liElement = screen.getByRole('listitem');
        expect(liElement.className).toBe('list-group-item d-flex justify-content-between');

        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain('align-self-center');
        expect(spanElement.className).not.toContain('text-decoration-line-through');
    });

    test('should be show a Todo completed', () => {
        todo.done = true;
        render(<TodoItem todo={todo}
            onToggleTodo={onToggleTodoMock}
            onDeleteTodo={onDeleteTodoMock} />);

        const liElement = screen.getByRole('listitem');
        expect(liElement.className).toBe('list-group-item d-flex justify-content-between');

        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain('text-decoration-line-through');
    });

    test('span should be call onToggleTodo when is clicked', () => {
        render(<TodoItem todo={todo}
            onToggleTodo={onToggleTodoMock}
            onDeleteTodo={onDeleteTodoMock} />);

        const spanElement = screen.getByLabelText('span');
        fireEvent.click(spanElement);
        expect(onToggleTodoMock).toHaveBeenCalled();    
        expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);    
    });
    
    test('button should be call onDeleteTodo when is clicked', () => {
        render(<TodoItem todo={todo}
            onToggleTodo={onToggleTodoMock}
            onDeleteTodo={onDeleteTodoMock} />);

        const buttonElement = screen.getByRole('button');
        fireEvent.click(buttonElement);
        expect(onDeleteTodoMock).toHaveBeenCalled();    
        expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);    
    });
})
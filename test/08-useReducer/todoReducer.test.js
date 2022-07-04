import { todoReducer } from "../../src/08-useReducer/todoReducer";

describe('Testing in todoReducer', () => {

    const initialState = [{
        id: 1,
        description: 'Demo Todo',
        done: false
    }];

    test('should be return the initialState', () => {
        const newState = todoReducer(initialState, {});
        expect(newState).toBe(initialState);
    });

    test('should be add a Todo', () => {
        const action = {
            type: '[TODO] Add Todo',
            payload: {
                id: 2,
                description: 'Nuevo Todo',
                done: false
            }
        };
        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(2);
        expect(newState).toContain(action.payload);
    });

    test('should be remove a Todo', () => {

        const actionAdd = {
            type: '[TODO] Add Todo',
            payload: {
                id: 2,
                description: 'Nuevo Todo',
                done: false
            }
        };

        const newStateAdd = todoReducer(initialState, actionAdd);
        const actionRemove = {
            type: '[TODO] Remove Todo',
            payload: 2
        };

        const newState = todoReducer(newStateAdd, actionRemove);
        expect(newState.length).toBe(1);
    });

    test('should be toggle a Todo', () => {
        const action = {
            type: '[TODO] Toggle Todo',
            payload: 1
        };
        const newState = todoReducer(initialState, action);
        expect(newState[0].done).toBe(true);

        const newState2 = todoReducer(newState, action);
        expect(newState2[0].done).toBe(false);
    });
});
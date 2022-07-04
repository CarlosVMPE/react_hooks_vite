import { act, renderHook } from "@testing-library/react";
import { useForm } from "../../src/hooks/useForm";

describe('Testing in hook useForm', () => {

    const initialForm = {
        name: 'Carlos',
        email: 'carlos@google.com'
    };

    test('should be return the object default', () => {
        const { result } = renderHook(() => useForm(initialForm));
        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function)
        });
    });

    test('should change the name of the form', () => {
        const newValue = 'Juan';
        const { result } = renderHook(() => useForm(initialForm));
        const { onInputChange } = result.current;

        // montar el hook
        // onInputChange // act, event...
        act(() => {
            onInputChange({
                target: {
                    name: 'name',
                    value: newValue
                }
            })
        });


        // expect, result.current.name === Juan
        // expect, result.current.formState.name === Juan
        expect(result.current.name).toBe(newValue);
        expect(result.current.formState.name).toBe(newValue);
    });
    
    test('should reset the form', () => {
        const newValue = 'Juan';
        const { result } = renderHook(() => useForm(initialForm));
        const { onInputChange, onResetForm } = result.current;

        // montar el hook
        // onInputChange // act, event...
        act(() => {
            onInputChange({
                target: {
                    name: 'name',
                    value: newValue
                }
            });
            onResetForm();
        });

        // expect, result.current.name === Juan
        // expect, result.current.formState.name === Juan
        expect(result.current.name).toBe(initialForm.name);
        expect(result.current.formState.name).toBe(initialForm.name);
    });
});
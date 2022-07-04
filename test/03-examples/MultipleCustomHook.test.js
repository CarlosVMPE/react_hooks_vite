import { render, screen } from "@testing-library/react";
import { fireEvent } from "@testing-library/dom";
import { MultipleCustomHook } from "../../src/03-examples";
import { useFetch } from "../../src/hooks/useFetch";
import { useCounter } from "../../src/hooks";

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('Testing in MultipleCustomHook', () => {

    const mockIncrement = jest.fn();

    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement,
    });

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('should be show the component by default', () => {

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        });
        render(<MultipleCustomHook />);
        expect(screen.getByText('Loading...'));
        expect(screen.getByText('BreakingBad Quotes'));

        const nextButton = screen.getByRole('button', { name: 'Next quote' });
        expect(nextButton.disabled).toBeTruthy();
        //screen.debug();
    });

    test('should be show a Quote', () => {

        useFetch.mockReturnValue({
            data: [{ author: 'Fernando', quote: 'Hola Mundo' }],
            isLoading: false,
            hasError: null
        });

        render(<MultipleCustomHook />);
        expect(screen.getByText('Hola Mundo')).toBeTruthy();
        expect(screen.getByText('Fernando')).toBeTruthy();

        const nextButton = screen.getByRole('button', { name: 'Next quote' });
        expect(nextButton.disabled).toBeFalsy();
    });

    test('should be call the function increment', () => {

        useFetch.mockReturnValue({
            data: [{ author: 'Fernando', quote: 'Hola Mundo' }],
            isLoading: false,
            hasError: null
        });

        render(<MultipleCustomHook />);
        const nextButton = screen.getByRole('button', { name: 'Next quote' });
        fireEvent.click(nextButton);
        expect(mockIncrement).toHaveBeenCalled();
    })
});
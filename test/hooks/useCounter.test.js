import { act, renderHook } from "@testing-library/react"
import { useCounter } from "../../src/hooks/useCounter";

describe('Test in useCounter', () => {
    test('should be return default values', () => {
        const { result } = renderHook(() => useCounter());
        const { counter, decrement, increment, reset } = result.current;

        expect(counter).toBe(10);
        expect(decrement).toEqual(expect.any(Function));
        expect(increment).toEqual(expect.any(Function));
        expect(reset).toEqual(expect.any(Function));
    });

    test('should be return a value of 100 in counter', () => {
        const { result } = renderHook(() => useCounter(100));
        const { counter } = result.current;
        expect(counter).toBe(100);
    });

    test('should be increment the counter', () => {
        const { result } = renderHook(() => useCounter());
        const { increment } = result.current;

        act( () => {
            increment();
            increment(2);
        });

        expect(result.current.counter).toBe(13);
    });
    
    test('should be decrement the counter', () => {
        const { result } = renderHook(() => useCounter());
        const { decrement } = result.current;

        act( () => {
            decrement();
            decrement(2);
        });

        expect(result.current.counter).toBe(7);
    });
    
    test('should be reset the counter', () => {
        const { result } = renderHook(() => useCounter(100));
        const { decrement, reset } = result.current;

        act( () => {
            decrement(2); // 98
            reset(); // 100
        });
        expect(result.current.counter).toBe(100);
    });
});
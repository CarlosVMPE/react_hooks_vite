import { render, screen } from "@testing-library/react"
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { HomePage } from "../../src/09-useContext/HomePage"

describe('Testing in HomePage', () => {
    test('should be show the component without user', () => {
        render(
            <UserContext.Provider value={{ user: null }}>
                <HomePage />
            </UserContext.Provider>
        );
        //screen.debug();
        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).toBe('null');
    });

    test('should be show the component with the user', () => {
        const user = {
            id: 123,
            name: 'Carlos V',
            email: 'carlos@gmail.com'
        };

        render(
            <UserContext.Provider value={{ user }}>
                <HomePage />
            </UserContext.Provider>
        );

        const smallTag = screen.getByLabelText('username');
        const preTag = screen.getByLabelText('pre');

        expect(smallTag.innerHTML).toBe(user.name);
        // other way: expect(JSON.parse(preTag.innerHTML)).toEqual(user);
        expect(preTag.innerHTML).toContain(user.name);
        expect(preTag.innerHTML).toContain(`${user.id}`);
    });
})
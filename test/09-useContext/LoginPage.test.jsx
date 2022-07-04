import { render, screen } from "@testing-library/react"
import { fireEvent } from "@testing-library/dom"
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { LoginPage } from "../../src/09-useContext/LoginPage";

describe('Testing in LoginPage', () => {

    const setUserMock = jest.fn();

    beforeEach(() => jest.clearAllMocks());

    test('should be show the component without user', () => {
        render(
            <UserContext.Provider value={{ user: null }}>
                <LoginPage />
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).toBe('null');
    });

    test('should be call setUser when the button is clicked', () => {
        const userDefault = {
            id: 123,
            name: 'Carlos',
            email: 'carlos1@gmail.com'
        };

        render(
            <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
                <LoginPage />
            </UserContext.Provider>
        );

        const buttonUser = screen.getByRole('button');
        fireEvent.click(buttonUser);
        expect(setUserMock).toHaveBeenCalledWith(userDefault);
    });
})
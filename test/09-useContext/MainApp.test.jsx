import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { MainApp } from "../../src/09-useContext/MainApp";

describe('Testing in MainApp', () => {
    test('should be show HomePage', () => {
        render(
            <MemoryRouter>
                <MainApp />
            </MemoryRouter>
        );

        //screen.debug();
        expect(screen.getByText('Home Page')).toBeTruthy();
    });
    
    test('should be show LoginPage', () => {
        render(
            <MemoryRouter initialEntries={['/login']}>
                <MainApp />
            </MemoryRouter>
        );

        expect(screen.getByText('Login Page')).toBeTruthy();
    });
});
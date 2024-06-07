import { fireEvent, render, screen } from "@testing-library/react";
import { Provider, useDispatch } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { MemoryRouter } from "react-router-dom";
import { LoginPage } from "../../../src/auth/pages/LoginPage";
import { authSlice } from "../../../src/store/auth";
import { startGoogleSignIn, startLoginWithEmailPassword } from "../../../src/store/auth/thunks";

const mockStartGoogleSignIn = jest.fn();
const mockStartLoginWithEmailPassword = jest.fn();

jest.mock('../../../src/store/auth/thunks', () => ({
    startGoogleSignIn: () => mockStartGoogleSignIn,
    startLoginWithEmailPassword: ({ email, password }) => {
        return () => mockStartLoginWithEmailPassword({ email, password })
    }
}));

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useDispatch: () => (fn) => fn(),
}));

const store = configureStore({
    reducer: {
        auth: authSlice.reducer
    },
})

describe('Pruebas en <LoginPage/> ', () => {

    beforeEach(() => jest.clearAllMocks());

    test('debe de mostrar el componente correctamente', () => {

        render(
            <Provider store={store}>
                <MemoryRouter>
                    <LoginPage />
                </MemoryRouter>
            </Provider>
        )

        expect(screen.getAllByText('Iniciar sesion').length).toBeGreaterThanOrEqual(1)

    });

    test('boton de google debe de llamar startGoogleSignin', () => {

        render(
            <Provider store={store}>
                <MemoryRouter>
                    <LoginPage />
                </MemoryRouter>
            </Provider>
        )

        const googleBtn = screen.getByLabelText('google-btn');
        fireEvent.click(googleBtn);

        expect(mockStartGoogleSignIn).toHaveBeenCalled();
    });

    test('submit debe llamar starLoginWithEmialPassword', () => {

        const email = 'raulsuarez@hgtv.com';
        const password = '123455789';

        render(
            <Provider store={store}>
                <MemoryRouter>
                    <LoginPage />
                </MemoryRouter>
            </Provider>
        )


        const emailField = screen.getByRole('textbox', { name: 'email' });
        fireEvent.change(emailField, { target: { name: 'email', value: email } })

        const passwordField = screen.getByTestId('password');
        fireEvent.change(passwordField, { target: { name: 'password', value: password } })

        const loginForm = screen.getByLabelText('login-form');
        fireEvent.submit(loginForm);

        expect(mockStartLoginWithEmailPassword).toHaveBeenCalledWith({ email, password })
    });

});
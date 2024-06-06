import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { MemoryRouter } from "react-router-dom";
import { LoginPage } from "../../../src/auth/pages/LoginPage";
import { authSlice } from "../../../src/store/auth";

const store = configureStore({
    reducer: {
        auth: authSlice.reducer
    },
})

describe('Pruebas en <LoginPage/> ', () => {

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

        const googleBtn = screen.getByText('Google')

    });

});
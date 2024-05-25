import { authSlice, login, logout, checkingCredentials } from "../../../src/store/auth/authSlice";
import { initialState, demoUser, authenticatedState } from "../../fixtures/authFixtures";

describe('Puebas en el authSlice', () => {

    test('debe regresar el estado inicial y llamarse auth', () => {

        const state = authSlice.reducer(initialState, {});

        expect(state).toEqual(initialState);
        expect(authSlice.name).toBe('auth');
    });

    test('debe realizar la autenticacion', () => {
        const state = authSlice.reducer(initialState, login(demoUser));

        expect(state).toEqual({
            status: 'authenticated',
            uid: '123456awdwafg',
            email: 'raul.sulastra@hotmail',
            displayName: 'Demo User',
            photoURL: 'https://demo.jpg',
            errorMessage: null,
        })
    });

    test('debe realizar logout sin argumentos', () => {
        const state = authSlice.reducer(authenticatedState, logout());

        expect(state).toEqual({
            status: 'not-authenticated',
            uid: null,
            email: null,
            displayName: null,
            photoURL: null,
            errorMessage: undefined
        })

    });

    test('debe realizar logout y mostrar un mensaje de error', () => {

        const errorMessage = 'Credenciales no son correctos';

        const state = authSlice.reducer(authenticatedState, logout({errorMessage}));

        expect(state).toEqual({
            status: 'not-authenticated',
            uid: null,
            email: null,
            displayName: null,
            photoURL: null,
            errorMessage: errorMessage
        })
    });

    test('debe de cambiar el estado a checking', () => {

        const errorMessage = 'Credenciales no son correctos';

        const state = authSlice.reducer(authenticatedState, checkingCredentials );

        expect(state.status).toBe('checking');
    });

});
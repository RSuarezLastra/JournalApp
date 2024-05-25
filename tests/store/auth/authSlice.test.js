import { authSlice } from "../../../src/store/auth/authSlice";
import { initialState } from "../../fixtures/authFixtures";

describe( 'Puebas en el authSlice', () => {

    test('debe regresar el estado inicial y llamarse auth', () => {

        const state = authSlice.reducer(initialState, {});

        expect(state).toEqual(initialState);
        expect(authSlice.name).toBe('auth');
    });
});
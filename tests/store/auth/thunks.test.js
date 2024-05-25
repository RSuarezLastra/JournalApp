import { singInWithGoogle } from "../../../src/firebase/providers";
import { checkingAuthentication, checkingCredentials, login, logout, startGoogleSignIn } from "../../../src/store/auth";
import { demoUser } from '../../fixtures/authFixtures';

jest.mock('../../../src/firebase/providers')

describe('Pruebas en thunks', () => {

    const dispatch = jest.fn();
    beforeEach(() => jest.clearAllMocks());

    test('debe invocar el checkingCredentials', async () => {


        await checkingAuthentication()(dispatch);

        expect(dispatch).toHaveBeenCalledWith(checkingCredentials())

    });

    test('startGoogleSignIn debe llamar checkingCredentials y login - Exito', async () => {


        const loginData = { ok: true, ...demoUser };

        await singInWithGoogle.mockResolvedValue( loginData );

        await startGoogleSignIn()(dispatch);

        expect(dispatch).toHaveBeenCalledWith( checkingCredentials());
        expect(dispatch).toHaveBeenCalledWith( login(loginData));

    });

    test('startGoogleSignIn debe llamar checkingCredentials y logout - Error', async () => {


        const loginData = { ok: false, errorMessage: 'Un error en google' };

        await singInWithGoogle.mockResolvedValue( loginData );

        await startGoogleSignIn()(dispatch);

        expect(dispatch).toHaveBeenCalledWith( checkingCredentials());
        expect(dispatch).toHaveBeenCalledWith(logout(loginData));

    });



});
import { checkingAuthentication, checkingCredentials } from "../../../src/store/auth";

jest.mock('../../../src/firebase/providers')

describe('Purebas en thunks', () => {
    
    const dispatch = jest.fn();
    beforeEach(() => jest.clearAllMocks());
    
    test('debe invocar el checkingCredentials', async () => {


        await checkingAuthentication()(dispatch);

        expect(dispatch).toHaveBeenCalledWith( checkingCredentials() )
        
    });

});
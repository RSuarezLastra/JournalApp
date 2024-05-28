import { startNewNote } from "../../../src/store/journal";

describe('Pruebas en journal Thunks', () => {

    const dispatch = jest.fn();
    const getState = jest.fn();

    beforeEach(() => jest.clearAllMocks());

    test('startNewNote debe de crear una nueva nota en blanco', async () => {
        const uid = '12345'
        getState.mockReturnValue({ auth: { uid } });

        await startNewNote()(dispatch, getState);


    }); 
})
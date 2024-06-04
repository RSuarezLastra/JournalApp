import { addNewEmptyNote, savingNewNote, setActiveNote, startNewNote } from "../../../src/store/journal";
import { FirebaseDB } from "../../../src/firebase/config";
import { getDocs, collection, deleteDoc  } from "firebase/firestore";

describe('Pruebas en journal Thunks', () => {

    const dispatch = jest.fn();
    const getState = jest.fn();

    beforeEach(() => jest.clearAllMocks());

    test('startNewNote debe de crear una nueva nota en blanco', async () => {
        const uid = '12345'
        getState.mockReturnValue({ auth: { uid } });

        await startNewNote()(dispatch, getState);

        expect(dispatch).toHaveBeenCalledWith(savingNewNote());
        expect(dispatch).toHaveBeenCalledWith(addNewEmptyNote({
            body: '',
            title: '',
            id: expect.any(String),
            date: expect.any(Number)
        }));
        expect(dispatch).toHaveBeenCalledWith(setActiveNote({
            body: '',
            title: '',
            id: expect.any(String),
            date: expect.any(Number)
        }));

        //borrar firebase
        const collectionRef = collection(FirebaseDB, `${uid}/journal/notes`);
        const docs = await getDocs( collectionRef );
        
        const deletePromises = [];
        docs.forEach( doc => deletePromises.push( deleteDoc(doc.ref) ));

        await Promise.all(deletePromises);


    }); 
})
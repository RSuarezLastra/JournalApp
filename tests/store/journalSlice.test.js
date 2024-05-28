import { initialState, emptyNote, activeNote } from "../fixtures/journalFixtures";
import { addNewEmptyNote, journalSlice, savingNewNote, setActiveNote } from "../../src/store/journal/journalSlice";

describe('Puebas en el journalSlice', () => {

    test('debe regresar el estado inicial y llamarse journal',() => {

        const state = journalSlice.reducer( initialState, {});

        expect(state).toEqual(initialState);
        expect(journalSlice.name).toBe('journal');
    });

    test('savingNewNote debe poner el estado isSaving en true',() => {

        const state = journalSlice.reducer( initialState, savingNewNote());

        expect(state.isSaving).toBeTruthy();
    });


    test('addNewEmptyNote debe agregar una nota vacia y poner el estado isSaving en false',() => {

        const state = journalSlice.reducer( initialState, addNewEmptyNote(emptyNote));

        expect(state.notes).toContain(emptyNote);
        expect(state.isSaving).toBeFalsy();

    });

    test('setActiveNote debe setear la nota activa en el estado y borrar el estado de mensaje',() => {

        const state = journalSlice.reducer( initialState, setActiveNote(activeNote));

        expect(state.active).toEqual(activeNote);
        expect(state.messageSaved).toBe('');

    });

});
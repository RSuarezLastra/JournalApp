export const initialState = {
    isSaving: false,
    messageSaved: '',
    notes: [],
    active: null
}

export const emptyNote = {
    title: '',
    body: '',
    date: new Date().getTime(),
}

export const activeNote = {
    title: 'Nota 1',
    body: 'Hola mundo',
    date: new Date().getTime(),
}
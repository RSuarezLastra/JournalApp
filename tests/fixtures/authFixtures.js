export const initialState = {
    status: 'checking', // , 'authenticated'
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null,
}
export const authenticatedState = {
    status: 'authenticated', 
    uid: '123456awdwafg',
    email: 'raul.sulastra@hotmail',
    displayName: 'Demo User',
    photoURL: 'https://demo.jpg',
    errorMessage: null,
}
export const notAuthenticatedState = {
    status: 'not-authenticated', 
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null,
}

export const demoUser = {
    uid: '123456awdwafg',
    email: 'raul.sulastra@hotmail',
    displayName: 'Demo User',
    photoURL: 'https://demo.jpg',
}
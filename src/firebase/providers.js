import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async () => {

    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvider);

        const { displayName, email, photoURL, uid } = result.user;

        return {
            ok: true,
            displayName,
            email,
            photoURL,
            uid
        }

    } catch (error) {
        console.log(error);

        const errorMessage = error.message
        const errorCode = error.code

        return {
            ok: false,
            errorCode,
            errorMessage
        }
    }
}
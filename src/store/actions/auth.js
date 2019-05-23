import { LOGIN_USER } from './actionTypes'

export const loginUser = (uid, email) => {
    return {
        type: LOGIN_USER,
        payload: {uid,email}
    }
} 
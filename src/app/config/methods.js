import { toast } from "react-toastify";

export function toastMessage(type, message) {
    toast[type](message)
};

export function authToken(data) {
    return {
        headers: {
            Authorization: `Bearer ${data().authSlice.signin.token}`
        }
    }
}
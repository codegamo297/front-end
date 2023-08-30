import axios from 'axios';
import { LoginStart, LoginSuccess, LoginFailure } from './context/AuthorActions';

export const loginCall = async (userCredential, dispatch) => {
    dispatch(LoginStart);
    try {
        const res = await axios.post('/author/login', userCredential);
        dispatch(LoginSuccess(res.data));
    } catch (error) {
        dispatch(LoginFailure(error));
    }
};

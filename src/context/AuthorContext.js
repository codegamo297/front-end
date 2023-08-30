import { createContext, useReducer } from 'react';
import AuthorReducer from './AuthorReducer';

const INITIAL_STATE = {
    user: null,
    isFetching: false,
    error: false,
};

export const AuthorContext = createContext(INITIAL_STATE);

export const AuthorContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthorReducer, INITIAL_STATE);

    return (
        <AuthorContext.Provider
            value={{ user: state.user, isFetching: state.isFetching, error: state.error, dispatch }}
        >
            {children}
        </AuthorContext.Provider>
    );
};

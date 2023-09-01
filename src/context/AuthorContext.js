import { createContext, useReducer } from 'react';
import AuthorReducer from './AuthorReducer';

const INITIAL_STATE = {
    user: {
        _id: '64eb0da59e293d82fa01b705',
        userName: 'hari',
        email: 'hari@gmail.com',
        password: '$2b$10$vwbv/Vrhch3AlhKE3Q77MuWz8nxTFJ0VD7c2OKr9TCtSyMM/n/DjS',
        profilePicture: 'hari.jpg',
        coverPicture: 'sky.jpg',
        followers: ['64eab5ae08d04961645f2b54', '64eab5e008d04961645f2b56'],
        followings: [
            '64eab5ae08d04961645f2b54',
            '64eab6c208d04961645f2b66',
            '64eab5e008d04961645f2b56',
            '64eab60f08d04961645f2b5a',
        ],
        isAdmin: false,
        createdAt: '2023-08-27T08:47:33.278Z',
        updatedAt: '2023-08-28T07:33:22.737Z',
        __v: 0,
        desc: 'Learn to earn, not to save.',
        city: 'Paris',
        from: 'France',
        relationship: 1,
    },
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

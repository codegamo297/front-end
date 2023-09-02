const AuthorReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN_START':
            return {
                user: null,
                isFetching: true,
                error: false,
            };
        case 'LOGIN_SUCCESS':
            return {
                user: action.payload,
                isFetching: false,
                error: false,
            };
        case 'LOGIN_FAILURE':
            return {
                user: null,
                isFetching: false,
                error: action.payload,
            };
        case 'FOLLOW':
            const updatedFollowingsFollow = [...state.user.followings, action.payload];
            const updatedUserFollow = {
                ...state,
                user: {
                    ...state.user,
                    followings: updatedFollowingsFollow,
                },
            };
            localStorage.setItem('user', JSON.stringify(updatedUserFollow.user));

            return updatedUserFollow;
        case 'UNFOLLOW':
            const updatedFollowingsUnFollow = state.user.followings.filter(
                (following) => following !== action.payload,
            );
            const updatedUserUnFollow = {
                ...state,
                user: {
                    ...state.user,
                    followings: updatedFollowingsUnFollow,
                },
            };
            localStorage.setItem('user', JSON.stringify(updatedUserUnFollow.user));

            return updatedUserUnFollow;
        default:
            return state;
    }
};

export default AuthorReducer;

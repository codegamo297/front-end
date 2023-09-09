import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import axios from 'axios';

import styles from './Conversation.module.scss';

const cx = classNames.bind(styles);

function Conversation({ conversation, currentUser, userCurrentChat }) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [user, setUser] = useState(null);

    let isActive;
    if (user !== null) {
        isActive = user._id === userCurrentChat;
    }

    useEffect(() => {
        const friendId = conversation.members.find((member) => member !== currentUser._id);

        const getUser = async () => {
            try {
                const res = await axios('/users?userId=' + friendId);
                setUser(res.data);
            } catch (error) {
                console.log(error);
            }
        };

        getUser();
    }, [conversation, currentUser]);

    return (
        <div className={isActive ? cx('wrapper', 'active') : cx('wrapper')}>
            <img
                className={cx('img')}
                src={
                    user !== null
                        ? PF + user.profilePicture || `${PF}person/noAvatar.png`
                        : `${PF}person/noAvatar.png`
                }
                alt=""
            />
            <span className={cx('name')}>{user !== null && user.userName}</span>
        </div>
    );
}

export default Conversation;

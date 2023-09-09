import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import axios from 'axios';

import styles from './ChatOnline.module.scss';

const cx = classNames.bind(styles);

function ChatOnline({ onlineUsers, currentId, setCurrentChat }) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    const [friends, setFriends] = useState([]);
    const [onlineFriends, setOnlineFriends] = useState([]);

    useEffect(() => {
        const getFriends = async () => {
            const res = await axios.get('/users/friends/' + currentId);
            setFriends(res.data);
        };

        getFriends();
    }, [currentId]);

    useEffect(() => {
        setOnlineFriends(friends.filter((friend) => onlineUsers.includes(friend._id)));
    }, [friends, onlineUsers]);

    const handleClick = async (onlineFriend) => {
        try {
            const res = await axios.get(`/conversations/find/${currentId}/${onlineFriend._id}`);
            setCurrentChat(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    return onlineFriends.map((onlineFriend) => (
        <div className={cx('wrapper')} key={onlineFriend._id}>
            <div className={cx('friend')} onClick={() => handleClick(onlineFriend)}>
                <div className={cx('img-container')}>
                    <img
                        className={cx('img')}
                        src={
                            onlineFriend?.profilePicture !== undefined
                                ? PF + onlineFriend.profilePicture || `${PF}person/noAvatar.png`
                                : `${PF}person/noAvatar.png`
                        }
                        alt=""
                    />
                    <div className={cx('badge')}></div>
                </div>
                <span className={cx('name')}>{onlineFriend.userName}</span>
            </div>
        </div>
    ));
}

export default ChatOnline;

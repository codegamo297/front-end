import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { formatDistance, parseISO } from 'date-fns';
import axios from 'axios';

import styles from './Message.module.scss';

const cx = classNames.bind(styles);

function Message({ message, own }) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    const [user, setUser] = useState(null);

    useEffect(() => {
        const getUser = async () => {
            try {
                const res = await axios.get('/users?userId=' + message.senderId);
                setUser(res.data);
            } catch (error) {
                console.log(error);
            }
        };

        getUser();
    }, [message]);

    return (
        <div className={own ? cx('wrapper', 'own') : cx('wrapper')}>
            <div className={cx('top')}>
                <img
                    className={cx('img')}
                    src={
                        user?.profilePicture !== undefined
                            ? PF + user.profilePicture || `${PF}person/noAvatar.png`
                            : `${PF}person/noAvatar.png`
                    }
                    alt=""
                />
                <p className={cx('text')}>{message.text}</p>
            </div>
            <div className={cx('bottom')}>
                {formatDistance(parseISO(message.createdAt), new Date(), {
                    addSuffix: true,
                })}
            </div>
        </div>
    );
}

export default Message;

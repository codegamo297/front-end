import { useContext, useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import axios from 'axios';
import {
    Bookmark,
    Chat,
    Event,
    Group,
    HelpOutline,
    PlayCircleFilledOutlined,
    RssFeed,
    School,
    WorkOutline,
} from '@mui/icons-material';

import styles from './Sidebar.module.scss';
import CloseFriend from '../CloseFriend/CloseFriend';
import { AuthorContext } from '~/context/AuthorContext';

const cx = classNames.bind(styles);

function Sidebar() {
    const [closeFriends, setCloseFriends] = useState([]);
    const { user } = useContext(AuthorContext);

    useEffect(() => {
        const getFriends = async () => {
            try {
                const friendList = await axios.get('/users/friends/' + user._id);
                setCloseFriends(friendList.data);
            } catch (error) {
                console.log(error);
            }
        };
        getFriends();
    }, [user]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <ul className={cx('list')}>
                    <li className={cx('list-item')}>
                        <RssFeed className={cx('icon')} />
                        <span className={cx('list-item-text')}>Feed</span>
                    </li>
                    <li className={cx('list-item')}>
                        <Chat className={cx('icon')} />
                        <span className={cx('list-item-text')}>Chats</span>
                    </li>
                    <li className={cx('list-item')}>
                        <PlayCircleFilledOutlined className={cx('icon')} />
                        <span className={cx('list-item-text')}>Videos</span>
                    </li>
                    <li className={cx('list-item')}>
                        <Group className={cx('icon')} />
                        <span className={cx('list-item-text')}>Groups</span>
                    </li>
                    <li className={cx('list-item')}>
                        <Bookmark className={cx('icon')} />
                        <span className={cx('list-item-text')}>Bookmarks</span>
                    </li>
                    <li className={cx('list-item')}>
                        <HelpOutline className={cx('icon')} />
                        <span className={cx('list-item-text')}>Questions</span>
                    </li>
                    <li className={cx('list-item')}>
                        <WorkOutline className={cx('icon')} />
                        <span className={cx('list-item-text')}>Jobs</span>
                    </li>
                    <li className={cx('list-item')}>
                        <Event className={cx('icon')} />
                        <span className={cx('list-item-text')}>Events</span>
                    </li>
                    <li className={cx('list-item')}>
                        <School className={cx('icon')} />
                        <span className={cx('list-item-text')}>Courses</span>
                    </li>
                </ul>

                <button className={cx('btn')}>Show More</button>
                <hr className={cx('hr')} />

                <ul className={cx('friend-list')}>
                    {closeFriends.map((closeFriend) => (
                        <CloseFriend key={closeFriend._id} closeFriend={closeFriend} />
                    ))}
                </ul>
            </div>
            <div className={cx('content')}></div>
        </div>
    );
}

export default Sidebar;

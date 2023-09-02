import classNames from 'classnames/bind';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Add, Remove } from '@mui/icons-material';

import styles from './RightBar.module.scss';
import Online from '../Online';
import { AuthorContext } from '~/context/AuthorContext';
import { Follow, UnFollow } from '~/context/AuthorActions';

const cx = classNames.bind(styles);

function RightBar({ user }) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [friends, setFriends] = useState([]);
    const [friendsOnline, setFriendsOnline] = useState([]);
    const { user: currentUser, dispatch } = useContext(AuthorContext);
    const [isFollowed, setIsFollowed] = useState(currentUser.followings.includes(user?._id));

    useEffect(() => {
        const getFriends = async () => {
            try {
                if (user && user._id) {
                    const friendList = await axios.get('/users/friends/' + user._id);
                    setFriends(friendList.data);
                }
            } catch (error) {
                console.log(error);
            }
        };
        getFriends();
    }, [user]);

    useEffect(() => {
        const getFriends = async () => {
            try {
                const friendList = await axios.get('/users/friends/' + currentUser._id);
                setFriendsOnline(friendList.data);
            } catch (error) {
                console.log(error);
            }
        };
        getFriends();
    }, [currentUser]);

    const handleClick = async () => {
        try {
            if (isFollowed) {
                await axios.put('/users/' + user._id + '/unfollow', { userId: currentUser._id });
                dispatch(UnFollow(user._id));
            } else {
                await axios.put('/users/' + user._id + '/follow', { userId: currentUser._id });
                dispatch(Follow(user._id));
            }
        } catch (error) {
            console.log(error);
        }
        setIsFollowed(!isFollowed);
    };

    const HomeRightBar = () => {
        return (
            <>
                <div className={cx('birthday-container')}>
                    <img className={cx('birthday-img')} src={`${PF}gift.png`} alt="" />
                    <span className={cx('birthday-text')}>
                        <b>Pola Foster</b> and <b>3 other friends</b> hav a birthday today
                    </span>
                </div>
                <img className={cx('ad')} src={`${PF}ad.png`} alt="" />
                <h4 className={cx('title')}>Online Friends</h4>
                <ul className={cx('friend-list')}>
                    {friendsOnline.map((friendOnline) => (
                        <Online key={friendOnline._id} friendOnline={friendOnline} />
                    ))}
                </ul>
            </>
        );
    };

    const ProfileRightBar = () => {
        return (
            <>
                {user.userName !== currentUser.userName && (
                    <button className={cx('follow-btn')} onClick={handleClick}>
                        {isFollowed ? 'UnFollow' : 'Follow'}
                        {isFollowed ? (
                            <Remove className={cx('icon-fl')} />
                        ) : (
                            <Add className={cx('icon-fl')} />
                        )}
                    </button>
                )}
                <h4 className={cx('profile-title')}>User information</h4>
                <div className={cx('info')}>
                    <div className={cx('info-item')}>
                        <span className={cx('info-key')}>City:</span>
                        <span className={cx('info-value')}>{user.city}</span>
                    </div>
                    <div className={cx('info-item')}>
                        <span className={cx('info-key')}>From:</span>
                        <span className={cx('info-value')}>{user.from}</span>
                    </div>
                    <div className={cx('info-item')}>
                        <span className={cx('info-key')}>Relationship:</span>
                        <span className={cx('info-value')}>
                            {user.relationship === 1
                                ? 'Single'
                                : user.relationship === 2
                                ? 'Married'
                                : '-'}
                        </span>
                    </div>
                </div>
                <h4 className={cx('profile-title')}>User friends</h4>
                <div className={cx('followings')}>
                    {friends.map((friend) => (
                        <Link
                            key={friend._id}
                            to={'/profile/' + friend.userName}
                            style={{ textDecoration: 'none' }}
                        >
                            <div className={cx('following')}>
                                <img
                                    className={cx('following-img')}
                                    src={PF + friend.profilePicture || `${PF}person/noAvatar.png`}
                                    alt=""
                                />
                                <span className={cx('following-name')}>{friend.userName}</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </>
        );
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>{user ? <ProfileRightBar /> : <HomeRightBar />}</div>
        </div>
    );
}

export default RightBar;

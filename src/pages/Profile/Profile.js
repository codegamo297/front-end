import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import styles from './Profile.module.scss';
import TopBar from '~/components/TopBar';
import Sidebar from '~/components/Sidebar';
import RightBar from '~/components/RightBar';
import Feed from '~/components/Feed';

const imgNoAvatar = require('~/assets/images/person/noAvatar.png');
const imgNoCover = require('~/assets/images/person/noCover.png');

const cx = classNames.bind(styles);

function Profile() {
    const [user, setUser] = useState({});
    const userName = useParams().userName;

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`/users?userName=${userName}`);
            setUser(res.data);
        };
        fetchUser();
    }, [userName]);
    return (
        <>
            <TopBar />
            <div className={cx('wrapper')}>
                <Sidebar />
                <div className={cx('right')}>
                    <div className={cx('right-top')}>
                        <div className={cx('cover')}>
                            <img
                                className={cx('cover-img')}
                                src={user.coverPicture || imgNoCover}
                                alt=""
                            />
                            <img
                                className={cx('user-img')}
                                src={user.profilePicture || imgNoAvatar}
                                alt=""
                            />
                        </div>
                        <div className={cx('info')}>
                            <h4 className={cx('info-name')}>{user.userName}</h4>
                            <span className={cx('info-description')}>{user.desc}</span>
                        </div>
                    </div>
                    <div className={cx('right-bottom')}>
                        <Feed userName={userName} />
                        <RightBar user={user} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;

import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import styles from './Profile.module.scss';
import TopBar from '~/components/TopBar';
import Sidebar from '~/components/Sidebar';
import RightBar from '~/components/RightBar';
import Feed from '~/components/Feed';

const cx = classNames.bind(styles);

function Profile() {
    const [user, setUser] = useState({});
    const userName = useParams().userName;
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

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
                                src={PF + user.coverPicture || `${PF}person/noCover.png`}
                                alt=""
                            />
                            <img
                                className={cx('user-img')}
                                src={PF + user.profilePicture || `${PF}person/noAvatar.png`}
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
                        {Object.keys(user).length > 0 ? <RightBar user={user} /> : null}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;

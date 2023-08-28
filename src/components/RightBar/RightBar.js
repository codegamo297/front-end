import classNames from 'classnames/bind';
import styles from './RightBar.module.scss';

import { Users } from '~/dummyData';
import Online from '../Online';

const imgBirthday = require('~/assets/images/gift.png');
const imgAd = require('~/assets/images/ad.png');
const cx = classNames.bind(styles);

function RightBar({ user }) {
    const HomeRightBar = () => {
        return (
            <>
                <div className={cx('birthday-container')}>
                    <img className={cx('birthday-img')} src={imgBirthday} alt="" />
                    <span className={cx('birthday-text')}>
                        <b>Pola Foster</b> and <b>3 other friends</b> hav a birthday today
                    </span>
                </div>
                <img className={cx('ad')} src={imgAd} alt="" />
                <h4 className={cx('title')}>Online Friends</h4>
                <ul className={cx('friend-list')}>
                    {Users.map((user) => (
                        <Online key={user.id} user={user} />
                    ))}
                </ul>
            </>
        );
    };

    const ProfileRightBar = () => {
        return (
            <>
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
                    {Users.map((user) => (
                        <div key={user.id} className={cx('following')}>
                            <img className={cx('following-img')} src={user.profilePicture} alt="" />
                            <span className={cx('following-name')}>{user.username}</span>
                        </div>
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

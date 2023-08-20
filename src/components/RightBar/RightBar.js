import classNames from 'classnames/bind';
import styles from './RightBar.module.scss';

const imgBirthday = require('~/assets/images/gift.png');
const imgProfile = require('~/assets/images/person/3.jpeg');
const imgAd = require('~/assets/images/ad.png');
const cx = classNames.bind(styles);

function RightBar() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('birthday-container')}>
                    <img className={cx('birthday-img')} src={imgBirthday} alt="" />
                    <span className={cx('birthday-text')}>
                        <b>Pola Foster</b> and <b>3 other friends</b> hav a birthday today
                    </span>
                </div>
                <img className={cx('ad')} src={imgAd} alt="" />
                <h4 className={cx('title')}>Online Friends</h4>
                <ul className={cx('friend-list')}>
                    <li className={cx('friend')}>
                        <div className={cx('profile-img-container')}>
                            <img className={cx('profile-img')} src={imgProfile} alt="" />
                            <span className={cx('online')}></span>
                        </div>
                        <span className={cx('user-name')}>John Carter</span>
                    </li>
                    <li className={cx('friend')}>
                        <div className={cx('profile-img-container')}>
                            <img className={cx('profile-img')} src={imgProfile} alt="" />
                            <span className={cx('online')}></span>
                        </div>
                        <span className={cx('user-name')}>John Carter</span>
                    </li>
                    <li className={cx('friend')}>
                        <div className={cx('profile-img-container')}>
                            <img className={cx('profile-img')} src={imgProfile} alt="" />
                            <span className={cx('online')}></span>
                        </div>
                        <span className={cx('user-name')}>John Carter</span>
                    </li>
                    <li className={cx('friend')}>
                        <div className={cx('profile-img-container')}>
                            <img className={cx('profile-img')} src={imgProfile} alt="" />
                            <span className={cx('online')}></span>
                        </div>
                        <span className={cx('user-name')}>John Carter</span>
                    </li>
                    <li className={cx('friend')}>
                        <div className={cx('profile-img-container')}>
                            <img className={cx('profile-img')} src={imgProfile} alt="" />
                            <span className={cx('online')}></span>
                        </div>
                        <span className={cx('user-name')}>John Carter</span>
                    </li>
                    <li className={cx('friend')}>
                        <div className={cx('profile-img-container')}>
                            <img className={cx('profile-img')} src={imgProfile} alt="" />
                            <span className={cx('online')}></span>
                        </div>
                        <span className={cx('user-name')}>John Carter</span>
                    </li>
                    <li className={cx('friend')}>
                        <div className={cx('profile-img-container')}>
                            <img className={cx('profile-img')} src={imgProfile} alt="" />
                            <span className={cx('online')}></span>
                        </div>
                        <span className={cx('user-name')}>John Carter</span>
                    </li>
                    <li className={cx('friend')}>
                        <div className={cx('profile-img-container')}>
                            <img className={cx('profile-img')} src={imgProfile} alt="" />
                            <span className={cx('online')}></span>
                        </div>
                        <span className={cx('user-name')}>John Carter</span>
                    </li>
                    <li className={cx('friend')}>
                        <div className={cx('profile-img-container')}>
                            <img className={cx('profile-img')} src={imgProfile} alt="" />
                            <span className={cx('online')}></span>
                        </div>
                        <span className={cx('user-name')}>John Carter</span>
                    </li>
                    <li className={cx('friend')}>
                        <div className={cx('profile-img-container')}>
                            <img className={cx('profile-img')} src={imgProfile} alt="" />
                            <span className={cx('online')}></span>
                        </div>
                        <span className={cx('user-name')}>John Carter</span>
                    </li>
                    <li className={cx('friend')}>
                        <div className={cx('profile-img-container')}>
                            <img className={cx('profile-img')} src={imgProfile} alt="" />
                            <span className={cx('online')}></span>
                        </div>
                        <span className={cx('user-name')}>John Carter</span>
                    </li>
                    <li className={cx('friend')}>
                        <div className={cx('profile-img-container')}>
                            <img className={cx('profile-img')} src={imgProfile} alt="" />
                            <span className={cx('online')}></span>
                        </div>
                        <span className={cx('user-name')}>John Carter</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default RightBar;

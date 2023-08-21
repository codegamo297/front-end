import classNames from 'classnames/bind';
import styles from './RightBar.module.scss';

import { Users } from '~/dummyData';
import Online from '../Online';

const imgBirthday = require('~/assets/images/gift.png');
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
                    {Users.map((user) => (
                        <Online key={user.id} user={user} />
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default RightBar;

import classNames from 'classnames/bind';
import styles from './Online.module.scss';

const cx = classNames.bind(styles);

function Online({ user }) {
    return (
        <li key={user.id} className={cx('friend')}>
            <div className={cx('profile-img-container')}>
                <img className={cx('profile-img')} src={user.profilePicture} alt="" />
                <span className={cx('online')}></span>
            </div>
            <span className={cx('user-name')}>{user.username}</span>
        </li>
    );
}

export default Online;

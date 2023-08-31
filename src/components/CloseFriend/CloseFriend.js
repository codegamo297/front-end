import classNames from 'classnames/bind';
import styles from './CloseFriend.module.scss';

const cx = classNames.bind(styles);

function CloseFriend({ user }) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <li className={cx('friend')}>
            <img
                src={PF + user.profilePicture || `${PF}person/noAvatar.png`}
                alt=""
                className={cx('img')}
            />
            <span className={cx('friend-name')}>{user.username}</span>
        </li>
    );
}

export default CloseFriend;

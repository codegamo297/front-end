import classNames from 'classnames/bind';
import styles from './CloseFriend.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function CloseFriend({ closeFriend }) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <Link to={'/profile/' + closeFriend.userName}>
            <li className={cx('friend')}>
                <img
                    src={PF + closeFriend.profilePicture || `${PF}person/noAvatar.png`}
                    alt=""
                    className={cx('img')}
                />
                <span className={cx('friend-name')}>{closeFriend.userName}</span>
            </li>
        </Link>
    );
}

export default CloseFriend;

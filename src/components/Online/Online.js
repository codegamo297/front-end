import classNames from 'classnames/bind';
import styles from './Online.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Online({ friendOnline }) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const isOnline = false;
    return (
        <Link to={'/profile/' + friendOnline.userName}>
            <li className={cx('friend')}>
                <div className={cx('profile-img-container')}>
                    <img
                        className={cx('profile-img')}
                        src={PF + friendOnline.profilePicture || `${PF}person/noAvatar.png`}
                        alt=""
                    />
                    {isOnline ? (
                        <span className={cx('online')}></span>
                    ) : (
                        <span className={cx('offline')}></span>
                    )}
                </div>
                <span className={cx('user-name')}>{friendOnline.userName}</span>
            </li>
        </Link>
    );
}

export default Online;

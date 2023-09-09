import classNames from 'classnames/bind';
import { Search, Person, Chat, Notifications } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useContext } from 'react';

import styles from './TopBar.module.scss';
import { AuthorContext } from '~/context/AuthorContext';

const cx = classNames.bind(styles);

function TopBar() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const { user } = useContext(AuthorContext);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('left')}>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <span className={cx('logo')}>Social Media App</span>
                </Link>
            </div>
            <div className={cx('center')}>
                <div className={cx('search-bar')}>
                    <Search className={cx('search-icon')} />
                    <input
                        placeholder="Search for friend, post or video"
                        className={cx('search-input')}
                    ></input>
                </div>
            </div>
            <div className={cx('right')}>
                <div className={cx('links')}>
                    <Link to={'/'}>
                        <span className={cx('link')}>Home Page</span>
                    </Link>
                    <span className={cx('link')}>Time line</span>
                </div>
                <div className={cx('icons')}>
                    <div className={cx('icon-item')}>
                        <Person className={cx('search-icon')} />
                        <span className={cx('icon-badge')}>1</span>
                    </div>
                    <Link to="/messenger">
                        <div className={cx('icon-item')}>
                            <Chat className={cx('search-icon')} />
                            <span className={cx('icon-badge')}>2</span>
                        </div>
                    </Link>
                    <div className={cx('icon-item')}>
                        <Notifications className={cx('search-icon')} />
                        <span className={cx('icon-badge')}>1</span>
                    </div>
                </div>
                <Link to={`/profile/${user.userName}`} className={cx('link-img')}>
                    <img
                        src={
                            user.profilePicture
                                ? PF + user.profilePicture
                                : `${PF}person/noAvatar.png`
                        }
                        alt=""
                        className={cx('img')}
                    ></img>
                </Link>
            </div>
        </div>
    );
}

export default TopBar;

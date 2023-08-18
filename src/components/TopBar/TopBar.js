import classNames from 'classnames/bind';
import styles from './TopBar.module.scss';
import { Search, Person, Chat, Notifications } from '@mui/icons-material';

const imgPerson1 = require('~/assets/images/person/1.jpeg');

const cx = classNames.bind(styles);

function TopBar() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('left')}>
                <span className={cx('logo')}>Social Media App</span>
            </div>
            <div className={cx('center')}>
                <div className={cx('search-bar')}>
                    <Search className={cx('search-icon')} />
                    <input placeholder="Search for friend, post or video" className={cx('search-input')}></input>
                </div>
            </div>
            <div className={cx('right')}>
                <div className={cx('links')}>
                    <span className={cx('link')}>Home Page</span>
                    <span className={cx('link')}>Time line</span>
                </div>
                <div className={cx('icons')}>
                    <div className={cx('icon-item')}>
                        <Person className={cx('search-icon')} />
                        <span className={cx('icon-badge')}>1</span>
                    </div>
                    <div className={cx('icon-item')}>
                        <Chat className={cx('search-icon')} />
                        <span className={cx('icon-badge')}>2</span>
                    </div>
                    <div className={cx('icon-item')}>
                        <Notifications className={cx('search-icon')} />
                        <span className={cx('icon-badge')}>1</span>
                    </div>
                </div>
                <img src={imgPerson1} alt="" className={cx('img')}></img>
            </div>
        </div>
    );
}

export default TopBar;

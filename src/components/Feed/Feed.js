import classNames from 'classnames/bind';
import styles from './Feed.module.scss';
import Share from './Share';
import Post from '../Post';

const cx = classNames.bind(styles);

function Feed() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <Share />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    );
}

export default Feed;

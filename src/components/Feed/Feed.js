import classNames from 'classnames/bind';
import styles from './Feed.module.scss';
import Share from './Share';
import Post from '../Post';
import { Posts } from '~/dummyData';

const cx = classNames.bind(styles);

function Feed() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <Share />
                {Posts.map((post) => (
                    <Post key={post.id} data={post} />
                ))}
            </div>
        </div>
    );
}

export default Feed;

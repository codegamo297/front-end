import classNames from 'classnames/bind';
import styles from './Post.module.scss';
import { MoreVert } from '@mui/icons-material';

const imgPerson1 = require('~/assets/images/person/1.jpeg');
const imgPost1 = require('~/assets/images/post/1.jpeg');
const imgLike = require('~/assets/images/like.png');
const imgHeart = require('~/assets/images/heart.png');
const cx = classNames.bind(styles);

function Post() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('top')}>
                    <div className={cx('top-left')}>
                        <img className={cx('profile-img')} src={imgPerson1} alt="" />
                        <span className={cx('user-name')}>Safak Kocaoglu</span>
                        <span className={cx('date')}>5 mins ago</span>
                    </div>
                    <div className={cx('top-right')}>
                        <MoreVert className={cx('icon')} />
                    </div>
                </div>
                <div className={cx('center')}>
                    <span className={cx('text')}>Hey! Its my first post</span>
                    <img className={cx('post-img')} src={imgPost1} alt="" />
                </div>
                <div className={cx('bottom')}>
                    <div className={cx('bottom-left')}>
                        <img className={cx('emoticon')} src={imgLike} alt="" />
                        <img className={cx('emoticon')} src={imgHeart} alt="" />
                        <span className={cx('like-counter')}>32 people like it</span>
                    </div>
                    <div className={cx('bottom-right')}>
                        <span className={cx('comment-text')}>9 comments</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;

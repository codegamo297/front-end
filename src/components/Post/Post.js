import classNames from 'classnames/bind';
import styles from './Post.module.scss';
import { MoreVert } from '@mui/icons-material';
import { Users } from '~/dummyData';

const imgLike = require('~/assets/images/like.png');
const imgHeart = require('~/assets/images/heart.png');
const cx = classNames.bind(styles);

function Post({ data }) {
    const user = Users.filter((u) => u.id === data.userId);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('top')}>
                    <div className={cx('top-left')}>
                        <img className={cx('profile-img')} src={user[0].profilePicture} alt="" />
                        <span className={cx('user-name')}>{user[0].username}</span>
                        <span className={cx('date')}>{data?.date}</span>
                    </div>
                    <div className={cx('top-right')}>
                        <MoreVert className={cx('icon')} />
                    </div>
                </div>
                <div className={cx('center')}>
                    <span className={cx('text')}>{data?.desc}</span>
                    <img className={cx('post-img')} src={data.photo} alt="" />
                </div>
                <div className={cx('bottom')}>
                    <div className={cx('bottom-left')}>
                        <img className={cx('emoticon')} src={imgLike} alt="" />
                        <img className={cx('emoticon')} src={imgHeart} alt="" />
                        <span className={cx('like-counter')}>{data.like} people like it</span>
                    </div>
                    <div className={cx('bottom-right')}>
                        <span className={cx('comment-text')}>{data.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;

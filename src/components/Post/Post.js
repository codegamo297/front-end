import classNames from 'classnames/bind';
import styles from './Post.module.scss';
import { MoreVert } from '@mui/icons-material';
import { Users } from '~/dummyData';
import { useState } from 'react';

const imgLike = require('~/assets/images/like.png');
const imgHeart = require('~/assets/images/heart.png');
const cx = classNames.bind(styles);

function Post({ post }) {
    const [like, setLike] = useState(post.like);
    const [isLiked, setIsLiked] = useState(false);

    const user = Users.filter((u) => u.id === post.userId);

    const likeHandler = () => {
        setLike(isLiked ? like - 1 : like + 1);
        setIsLiked(!isLiked);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('top')}>
                    <div className={cx('top-left')}>
                        <img className={cx('profile-img')} src={user[0].profilePicture} alt="" />
                        <span className={cx('user-name')}>{user[0].username}</span>
                        <span className={cx('date')}>{post?.date}</span>
                    </div>
                    <div className={cx('top-right')}>
                        <MoreVert className={cx('icon')} />
                    </div>
                </div>
                <div className={cx('center')}>
                    <span className={cx('text')}>{post?.desc}</span>
                    <img className={cx('post-img')} src={post.photo} alt="" />
                </div>
                <div className={cx('bottom')}>
                    <div className={cx('bottom-left')}>
                        <img className={cx('emoticon')} src={imgLike} onClick={likeHandler} alt="" />
                        <img className={cx('emoticon')} src={imgHeart} onClick={likeHandler} alt="" />
                        <span className={cx('like-counter')}>{like} people like it</span>
                    </div>
                    <div className={cx('bottom-right')}>
                        <span className={cx('comment-text')}>{post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;

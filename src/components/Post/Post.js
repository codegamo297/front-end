import classNames from 'classnames/bind';
import { MoreVert } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { formatDistance, parseISO } from 'date-fns';
import { Link } from 'react-router-dom';

import styles from './Post.module.scss';

const imgNoAvatar = require('~/assets/images/person/noAvatar.png');
const imgNoCover = require('~/assets/images/person/noCover.png');
const imgLike = require('~/assets/images/like.png');
const imgHeart = require('~/assets/images/heart.png');
const cx = classNames.bind(styles);

function Post({ post }) {
    const [like, setLike] = useState(post.likes.length);
    const [isLiked, setIsLiked] = useState(false);
    const [user, setUser] = useState({});

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`/users?userId=${post.userId}`);
            setUser(res.data);
        };

        fetchUser();
    }, [post.userId]);

    const likeHandler = () => {
        setLike(isLiked ? like - 1 : like + 1);
        setIsLiked(!isLiked);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('top')}>
                    <div className={cx('top-left')}>
                        <Link to={`/profile/${user.userName}`} className={cx('link')}>
                            <img
                                className={cx('profile-img')}
                                src={user.profilePicture || imgNoAvatar}
                                alt=""
                            />
                            <span className={cx('user-name')}>{user.userName}</span>
                        </Link>
                        <span className={cx('date')}>
                            {formatDistance(parseISO(post.createdAt), new Date(), {
                                addSuffix: true,
                            })}
                        </span>
                    </div>
                    <div className={cx('top-right')}>
                        <MoreVert className={cx('icon')} />
                    </div>
                </div>
                <div className={cx('center')}>
                    <span className={cx('text')}>{post?.desc}</span>
                    <img className={cx('post-img')} src={post.img || imgNoCover} alt="" />
                </div>
                <div className={cx('bottom')}>
                    <div className={cx('bottom-left')}>
                        <img
                            className={cx('emoticon')}
                            src={imgLike}
                            onClick={likeHandler}
                            alt=""
                        />
                        <img
                            className={cx('emoticon')}
                            src={imgHeart}
                            onClick={likeHandler}
                            alt=""
                        />
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

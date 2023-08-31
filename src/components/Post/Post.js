import classNames from 'classnames/bind';
import { MoreVert } from '@mui/icons-material';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { formatDistance, parseISO } from 'date-fns';
import { Link } from 'react-router-dom';

import styles from './Post.module.scss';
import { AuthorContext } from '~/context/AuthorContext';

const cx = classNames.bind(styles);

function Post({ post }) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [like, setLike] = useState(post.likes.length);
    const [isLiked, setIsLiked] = useState(false);
    const [user, setUser] = useState({});
    const { user: currentUser } = useContext(AuthorContext);

    useEffect(() => {
        setIsLiked(post.likes.includes(currentUser._id));
    }, [currentUser._id, post.likes]);

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`/users?userId=${post.userId}`);
            setUser(res.data);
        };

        fetchUser();
    }, [post.userId]);

    const likeHandler = () => {
        try {
            axios.put('/posts/' + post._id + '/like', { userId: currentUser._id });
        } catch (error) {}
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
                                src={PF + user.profilePicture || `${PF}person/noAvatar.png`}
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
                    <img
                        className={cx('post-img')}
                        src={PF + post.img || `${PF}person/noCover.png`}
                        alt=""
                    />
                </div>
                <div className={cx('bottom')}>
                    <div className={cx('bottom-left')}>
                        <img
                            className={cx('emoticon')}
                            src={`${PF}like.png`}
                            onClick={likeHandler}
                            alt=""
                        />
                        <img
                            className={cx('emoticon')}
                            src={`${PF}heart.png`}
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

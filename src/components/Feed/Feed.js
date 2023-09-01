import { useContext, useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Feed.module.scss';
import Share from '../Share';
import Post from '../Post';
import axios from 'axios';
import { AuthorContext } from '~/context/AuthorContext';

const cx = classNames.bind(styles);

function Feed({ userName }) {
    const [posts, setPosts] = useState([]);
    const { user } = useContext(AuthorContext);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = userName
                ? await axios.get('/posts/profile/' + userName)
                : await axios.get('/posts/timeline/' + user._id);
            setPosts(
                res.data.sort((p1, p2) => {
                    return new Date(p2.createdAt) - new Date(p1.createdAt);
                }),
            );
        };
        fetchPosts();
    }, [userName, user._id]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                {(!userName || userName === user.userName) && <Share />}
                {posts.map((post) => (
                    <Post key={post._id} post={post} />
                ))}
            </div>
        </div>
    );
}

export default Feed;

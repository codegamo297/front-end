import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Feed.module.scss';
import Share from './Share';
import Post from '../Post';
import axios from 'axios';

const cx = classNames.bind(styles);

function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get('posts/timeline/64eab5ae08d04961645f2b54');
            setPosts(res.data);
        };
        fetchPosts();
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <Share />
                {posts.map((post) => (
                    <Post key={post._id} post={post} />
                ))}
            </div>
        </div>
    );
}

export default Feed;

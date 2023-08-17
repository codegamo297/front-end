import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import React from 'react';

const cx = classNames.bind(styles);

function Home() {
    return <div className={cx('wrapper')}>this is home</div>;
}

export default Home;

import classNames from 'classnames/bind';
import styles from './Profile.module.scss';

import TopBar from '~/components/TopBar';
import Sidebar from '~/components/Sidebar';
import RightBar from '~/components/RightBar';
import Feed from '~/components/Feed';

import imgCover from '~/assets/images/post/1.jpeg';
import imgUser from '~/assets/images/person/1.jpeg';

const cx = classNames.bind(styles);

function Profile() {
    return (
        <>
            <TopBar />
            <div className={cx('wrapper')}>
                <Sidebar />
                <div className={cx('right')}>
                    <div className={cx('right-top')}>
                        <div className={cx('cover')}>
                            <img className={cx('cover-img')} src={imgCover} alt="" />
                            <img className={cx('user-img')} src={imgUser} alt="" />
                        </div>
                        <div className={cx('info')}>
                            <h4 className={cx('info-name')}>Safak Kocaoglu</h4>
                            <span className={cx('info-description')}>Hello my friends!</span>
                        </div>
                    </div>
                    <div className={cx('right-bottom')}>
                        <Feed />
                        <RightBar profile />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;

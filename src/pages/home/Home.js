import classNames from 'classnames/bind';

import styles from './Home.module.scss';
import TopBar from '~/components/TopBar';
import Sidebar from '~/components/Sidebar';
import Feed from '~/components/Feed';
import RightBar from '~/components/RightBar';

const cx = classNames.bind(styles);

function Home() {
    return (
        <>
            <TopBar />
            <div className={cx('wrapper')}>
                <Sidebar />
                <Feed />
                <RightBar />
            </div>
        </>
    );
}

export default Home;

import classNames from 'classnames/bind';
import styles from './RightBar.module.scss';

const cx = classNames.bind(styles);

function RightBar() {
    return <div className={cx('wrapper')}>RightBar</div>;
}

export default RightBar;

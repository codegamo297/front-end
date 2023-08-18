import classNames from 'classnames/bind';
import styles from './Share.module.scss';
import { PermMedia, Label, Room, EmojiEmotions } from '@mui/icons-material';

const imgPerson1 = require('~/assets/images/person/1.jpeg');

const cx = classNames.bind(styles);
function Share() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('top')}>
                    <img src={imgPerson1} alt="" className={cx('img-profile')} />
                    <input placeholder="What in your mind Safak?" className={cx('input')} />
                </div>
                <hr className={cx('hr')} />
                <div className={cx('bottom')}>
                    <div className={cx('options')}>
                        <div className={cx('option')}>
                            <PermMedia htmlColor="#F79327" className={cx('icon')} />
                            <span className={cx('option-text')}>Photo or Video</span>
                        </div>
                        <div className={cx('option')}>
                            <Label htmlColor="#279EFF" className={cx('icon')} />
                            <span className={cx('option-text')}>Tag</span>
                        </div>
                        <div className={cx('option')}>
                            <Room htmlColor="#27AE60" className={cx('icon')} />
                            <span className={cx('option-text')}>Location</span>
                        </div>
                        <div className={cx('option')}>
                            <EmojiEmotions htmlColor="#F7DC6F" className={cx('icon')} />
                            <span className={cx('option-text')}>Feelings</span>
                        </div>
                    </div>
                    <button className={cx('btn')}>Share</button>
                </div>
            </div>
        </div>
    );
}

export default Share;

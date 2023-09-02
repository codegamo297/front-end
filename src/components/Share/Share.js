import classNames from 'classnames/bind';
import { PermMedia, Label, Room, EmojiEmotions, Cancel } from '@mui/icons-material';
import { useContext, useRef, useState } from 'react';

import styles from './Share.module.scss';
import { AuthorContext } from '~/context/AuthorContext';
import axios from 'axios';

const cx = classNames.bind(styles);

function Share() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const { user } = useContext(AuthorContext);
    const [file, setFile] = useState(null);
    const descRef = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newPost = {
            userId: user._id,
            desc: descRef.current.value,
        };

        if (file) {
            const data = new FormData();
            const fileName = file.name;
            data.append('file', file);
            data.append('name', fileName);
            newPost.img = fileName;

            try {
                await axios.post('/upload', data);
                window.location.reload();
            } catch (error) {
                console.log(error);
            }
        }

        try {
            await axios.post('/posts', newPost);
        } catch (error) {}
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('top')}>
                    <img
                        src={PF + user.profilePicture || `${PF}person/noAvatar.png`}
                        alt=""
                        className={cx('img-profile')}
                    />
                    <input
                        placeholder={`What in your mind ${user.userName}?`}
                        className={cx('input')}
                        ref={descRef}
                    />
                </div>
                <hr className={cx('hr')} />
                {file && (
                    <div className={cx('img-container')}>
                        <img className={cx('img-share')} src={URL.createObjectURL(file)} alt="" />
                        <Cancel className={cx('icon-cancel')} onClick={() => setFile(null)} />
                    </div>
                )}
                <form className={cx('bottom')} onSubmit={handleSubmit}>
                    <div className={cx('options')}>
                        <label htmlFor="file" className={cx('option')}>
                            <PermMedia htmlColor="#F79327" className={cx('icon')} />
                            <span className={cx('option-text')}>Photo or Video</span>
                            <input
                                style={{ display: 'none' }}
                                type="file"
                                id={cx('file')}
                                accept=".png, .jpeg, .jpg"
                                onChange={(e) => setFile(e.target.files[0])}
                            />
                        </label>
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
                    <button className={cx('btn')} type="submit">
                        Share
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Share;

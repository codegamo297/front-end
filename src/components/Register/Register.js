import classNames from 'classnames/bind';
import styles from './Register.module.scss';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Register() {
    const [isShow1, setIsShow1] = useState(true);
    const [isShow2, setIsShow2] = useState(true);

    const handleShowPassWord = () => {
        setIsShow1(!isShow1);
    };

    const handleShowPassWordAgain = () => {
        setIsShow2(!isShow2);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('left')}>
                    <h3 className={cx('logo')}>Social Media App</h3>
                    <span className={cx('description')}>
                        Connect with friends and the world around you on Social Media App.
                    </span>
                </div>
                <div className={cx('right')}>
                    <div className={cx('box')}>
                        <div className={cx('inp-container')}>
                            <input placeholder="User name" className={cx('input')} />
                        </div>
                        <div className={cx('inp-container')}>
                            <input placeholder="Email" className={cx('input')} />
                        </div>

                        {isShow1 ? (
                            <div className={cx('inp-container')}>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className={cx('input')}
                                />
                                <VisibilityOff
                                    className={cx('hide-password')}
                                    onClick={handleShowPassWord}
                                />
                            </div>
                        ) : (
                            <div className={cx('inp-container')}>
                                <input type="text" placeholder="Password" className={cx('input')} />
                                <Visibility
                                    className={cx('show-password')}
                                    onClick={handleShowPassWord}
                                />
                            </div>
                        )}

                        {isShow2 ? (
                            <div className={cx('inp-container')}>
                                <input
                                    type="password"
                                    placeholder="Password Again"
                                    className={cx('input')}
                                />
                                <VisibilityOff
                                    className={cx('hide-password')}
                                    onClick={handleShowPassWordAgain}
                                />
                            </div>
                        ) : (
                            <div className={cx('inp-container')}>
                                <input
                                    type="text"
                                    placeholder="Password Again"
                                    className={cx('input')}
                                />

                                <Visibility
                                    className={cx('show-password')}
                                    onClick={handleShowPassWordAgain}
                                />
                            </div>
                        )}

                        <button className={cx('btn')}>Sign up</button>
                        <hr className={cx('hr')} />
                        <button className={cx('register-btn')}>Log into Account</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;

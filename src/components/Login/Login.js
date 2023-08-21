import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Login() {
    const [isShow, setIsShow] = useState(true);

    const handleShowPassWord = () => {
        setIsShow(!isShow);
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
                            <input placeholder="Email" className={cx('input')} />
                        </div>

                        {isShow ? (
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

                        <button className={cx('btn')}>Log in</button>
                        <span className={cx('forgot')}>Forgotten password?</span>
                        <hr className={cx('hr')} />
                        <button className={cx('register-btn')}>Create new account</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;

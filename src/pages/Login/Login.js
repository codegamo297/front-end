import classNames from 'classnames/bind';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useContext, useRef, useState } from 'react';
import { CircularProgress } from '@mui/material';

import styles from './Login.module.scss';
import { loginCall } from '~/apiCalls';
import { AuthorContext } from '~/context/AuthorContext';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Login() {
    const [isShow, setIsShow] = useState(true);
    const emailRef = useRef();
    const passwordRef = useRef();
    const { isFetching, dispatch } = useContext(AuthorContext);

    const handleShowPassWord = () => {
        setIsShow(!isShow);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        loginCall({ email: emailRef.current.value, password: passwordRef.current.value }, dispatch);
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
                    <form className={cx('box')} onSubmit={handleSubmit}>
                        <div className={cx('inp-container')}>
                            <input
                                type="email"
                                placeholder="Email"
                                required
                                className={cx('input')}
                                ref={emailRef}
                            />
                        </div>

                        {isShow ? (
                            <div className={cx('inp-container')}>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    required
                                    minLength="6"
                                    className={cx('input')}
                                    ref={passwordRef}
                                />
                                <VisibilityOff
                                    className={cx('hide-password')}
                                    onClick={handleShowPassWord}
                                />
                            </div>
                        ) : (
                            <div className={cx('inp-container')}>
                                <input
                                    type="text"
                                    placeholder="Password"
                                    required
                                    minLength="6"
                                    className={cx('input')}
                                    ref={passwordRef}
                                />
                                <Visibility
                                    className={cx('show-password')}
                                    onClick={handleShowPassWord}
                                />
                            </div>
                        )}

                        <button className={cx('btn')} type="submit" disabled={isFetching}>
                            {isFetching ? (
                                <CircularProgress color="inherit" size="22px" />
                            ) : (
                                'Log in'
                            )}
                        </button>
                        <span className={cx('forgot')}>Forgotten password?</span>
                        <hr className={cx('hr')} />
                        <Link to="/register" className={cx('link-register')}>
                            <button className={cx('register-btn')}>
                                {isFetching ? (
                                    <CircularProgress color="inherit" size="22px" />
                                ) : (
                                    'Create new account'
                                )}
                            </button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;

import classNames from 'classnames/bind';
import styles from './Register.module.scss';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import axios from 'axios';

const cx = classNames.bind(styles);

function Register() {
    const [isShow1, setIsShow1] = useState(true);
    const [isShow2, setIsShow2] = useState(true);

    const userNameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordAgainRef = useRef();
    const navigate = useNavigate();

    const handleShowPassWord = () => {
        setIsShow1(!isShow1);
    };
    const handleShowPassWordAgain = () => {
        setIsShow2(!isShow2);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (passwordAgainRef.current.value !== passwordRef.current.value) {
            passwordAgainRef.current.setCustomValidity("Passwords don't match");
        } else {
            const user = {
                userName: userNameRef.current.value,
                email: emailRef.current.value,
                password: passwordRef.current.value,
            };
            try {
                await axios.post('/author/register', user);
                navigate('/login');
            } catch (error) {
                console.log(error);
            }
        }
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
                                placeholder="User name"
                                className={cx('input')}
                                required
                                ref={userNameRef}
                            />
                        </div>
                        <div className={cx('inp-container')}>
                            <input
                                type="email"
                                placeholder="Email"
                                className={cx('input')}
                                required
                                ref={emailRef}
                            />
                        </div>

                        {isShow1 ? (
                            <div className={cx('inp-container')}>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className={cx('input')}
                                    required
                                    minLength="6"
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
                                    className={cx('input')}
                                    required
                                    minLength="6"
                                    ref={passwordRef}
                                />
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
                                    required
                                    minLength="6"
                                    ref={passwordAgainRef}
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
                                    required
                                    minLength="6"
                                    ref={passwordAgainRef}
                                />

                                <Visibility
                                    className={cx('show-password')}
                                    onClick={handleShowPassWordAgain}
                                />
                            </div>
                        )}

                        <button className={cx('btn')} type="submit">
                            Sign up
                        </button>
                        <hr className={cx('hr')} />
                        <Link to="/login" className={cx('link-login')}>
                            <button className={cx('register-btn')}>Login to Account</button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;

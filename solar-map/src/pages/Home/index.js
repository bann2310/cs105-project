import React from 'react';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import LogoApp from '~/logoapp.png';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('home')}>
            <div className={cx('logoapp')}>
                <img src={LogoApp} height="300px" />
            </div>
            <div className={cx('content')}>
                <h1 className={cx('tittle')}>Solar System Software</h1>
                <div className={cx('content-button')}>
                    <Link to="/solarsystem">
                        <button className={cx('button')}>Solar System</button>
                    </Link>
                    <Link to="/adventurefpp">
                        <button className={cx('button')}>First-Person Perspective</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Home;

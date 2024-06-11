import classNames from 'classnames/bind';
import styles from './Information.module.scss';
const cx = classNames.bind(styles);
function Information({ name, description }) {
    return (
        <>
            <div className={cx('name')}>{name}</div>
            <div className={cx('description')}>{description}</div>
        </>
    );
}

export default Information;

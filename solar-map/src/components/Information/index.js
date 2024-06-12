import classNames from 'classnames/bind';
import styles from './Information.module.scss';
const cx = classNames.bind(styles);

function parseDescription(description) {
    const lines = description.trim().split('\n');
    const data = {};
    lines.forEach((line) => {
        const [key, value] = line.split(':').map((part) => part.trim());
        data[key] = value;
    });
    return data;
}

function Information({ name, description }) {
    const descriptionData = parseDescription(description);
    return (
        <>
            <div className={cx('name')}>{name}</div>
            <div className={cx('description')}>
                {Object.entries(descriptionData).map(([key, value]) => (
                    <div key={key}>
                        <strong>{key}:</strong> {value}
                    </div>
                ))}
            </div>
        </>
    );
}

export default Information;

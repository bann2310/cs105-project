import classNames from 'classnames/bind';
import styles from '~/App.module.scss';
import Header from '~/components/Header';

const cx = classNames.bind(styles);

function App() {
    return (
        <div className="App">
            <Header></Header>
            <div className={cx('container')}>
                
            </div>
        </div>
    );
}

export default App;

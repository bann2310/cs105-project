import './GlobalStyles.scss';
import { Provider } from './store';

function GlobalStyles({ children }) {
    return <Provider>{children}</Provider>;
}
export default GlobalStyles;

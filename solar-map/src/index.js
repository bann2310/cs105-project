import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from '~/components/GlobalStyles';
import { HoverProvider } from '~/components/SolarSystemv2/stores/hoverStore';
import { ClickProvider } from '~/components/SolarSystemv2/stores/clickStore';
import { InforProvider } from './components/Information/informationStore';
import { StatusProvider } from './pages/Adventurefpp/provider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <GlobalStyles>
            <HoverProvider>
                <ClickProvider>
                    <InforProvider>
                        <StatusProvider>
                            <App />
                        </StatusProvider>
                    </InforProvider>
                </ClickProvider>
            </HoverProvider>
        </GlobalStyles>
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

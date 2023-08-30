import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyles from './components/GlobalStyles';
import { AuthorContextProvider } from './context/AuthorContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <GlobalStyles>
            <AuthorContextProvider>
                <App />
            </AuthorContextProvider>
        </GlobalStyles>
    </React.StrictMode>,
);

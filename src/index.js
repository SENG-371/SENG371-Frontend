import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import MainPage from './components/MainPage';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <>
//     <MainPage />
//   </>
// );
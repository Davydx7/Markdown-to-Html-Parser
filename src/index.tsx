import React from 'react';
import ReactDOM from 'react-dom/client';
import 'modern-normalize/modern-normalize.css';
// import 'normalize.css';
import './styles/index.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'flag-icons';

import App from './App';
import Home from './Routes/Home';
import Details from './Routes/Details';
import List from './Routes/List';
import Summary from './Routes/Summary';
import Login from './Routes/Login';
import Payment from './Routes/Payment';
import NotFound from './Routes/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="login/:id" element={<Login />} />
          <Route path="details" element={<Details />} />
          <Route path="list" element={<List />} />
          <Route path="summary" element={<Summary />} />
          <Route path="payment" element={<Payment />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

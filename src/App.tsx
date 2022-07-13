import { Routes, Route, useLocation } from 'react-router-dom';
import './App.scss';
import { AnimatePresence } from 'framer-motion';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Navigation from './Components/Navigation';

import Home from './Routes/Home';
import Details from './Routes/Details';
import List from './Routes/List';
import Summary from './Routes/Summary';
import Login from './Routes/Login';
import Payment from './Routes/Payment';
import NotFound from './Routes/NotFound';
import Logout from './Routes/Logout';
import Bookings from './Routes/Bookings';

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Header />

      <AnimatePresence initial exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="bookings" element={<Bookings />} />
          <Route path="details" element={<Details />} />
          <Route path="list" element={<List />} />
          <Route path="summary" element={<Summary />} />
          <Route path="payment" element={<Payment />} />
          <Route path="login/:id" element={<Login />} />
          <Route path="logout" element={<Logout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>

      <Footer />
      <Navigation />
    </div>
  );
}

export default App;

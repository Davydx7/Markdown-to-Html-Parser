import { Routes, Route, useLocation } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { AnimatePresence } from 'framer-motion';
import './styles/App.scss';

import Footer from './components/Footer';
import Header from './components/Header';
import Navigation from './components/Navigation';

import Home from './routes/Home';
import Details from './routes/Details';
import Flights from './routes/Flights';
import Summary from './routes/Summary';
import Login from './routes/Login';
import Payment from './routes/Payment';
import NotFound from './routes/NotFound';
import Logout from './routes/Logout';
import Bookings from './routes/Bookings';
import Signup from './routes/signup/Signup';

const queryClient = new QueryClient();

function App() {
  const location = useLocation();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Header />

        <AnimatePresence initial exitBeforeEnter>
          <Routes location={location} key={location.pathname}>
            <Route index element={<Home />} />
            <Route path="bookings" element={<Bookings />} />
            <Route path="details" element={<Details />} />
            <Route path="flights">
              <Route index element={<Flights />} />
              <Route path=":id" element={<Summary />} />
            </Route>
            <Route path="payment" element={<Payment />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="logout" element={<Logout />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>

        <Footer />
        <Navigation />
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;

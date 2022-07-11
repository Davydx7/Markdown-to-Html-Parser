import { Outlet } from 'react-router-dom';
import './App.scss';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Navigation from './Components/Navigation';

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
      <Navigation />
    </div>
  );
}

export default App;

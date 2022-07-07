import { Link } from 'react-router-dom';
import Button from '../../Components/Button';
import Layout from '../../Components/Layout';
import './home.scss';

const Home: React.FC = () => (
  <Layout>
    <h1>Welcome!</h1>
    <p>We offer convenience at its best</p>
    <div className="buttons">
      <Button type="button" size="large">
        <Link to="details">Book a flight</Link>
      </Button>
      <Button type="button" group="secondary" size="medium">
        Your Bookings
      </Button>
    </div>
  </Layout>
);
export default Home;

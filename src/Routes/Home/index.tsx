import { FaPaperPlane, FaPlane } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Button from '../../Components/Button';
import Layout from '../../Components/Layout';
import './home.scss';

const Home: React.FC = () => (
  <Layout>
    <div className="home">
      <div>
        <span className="welcome">Welcome!</span> <FaPaperPlane className="icon" />
        {/* <FaPlane />
        ·························································
        <FaPlane /> */}
      </div>
      <p>
        We offer convenience at its best
        <br />
        below are primary, secondary and tertiary button of large sizes
      </p>
      <div className="buttons">
        <Button type="button" group="secondary" size="large">
          <Link to="bookings">Your Bookings</Link>
        </Button>
        <Button type="button" group="primary" size="large">
          <Link to="details">Book a flight</Link>
        </Button>
        <Button type="button" group="tertiary" size="large">
          Travel Planner
        </Button>
      </div>
    </div>
  </Layout>
);
export default Home;

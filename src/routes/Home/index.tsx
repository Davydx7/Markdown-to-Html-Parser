import { FaPaperPlane } from 'react-icons/fa';
import Button from '../../components/Button';
import Layout from '../../components/Layout';
import useLoggedUser from '../../stores/clientStores/loggedUser';
import './home.scss';

const Home: React.FC = () => {
  const loggedUser = useLoggedUser((state) => state.loggedUser);

  return (
    <Layout>
      <div className="home">
        <div>
          <span className="welcome">Welcome! {loggedUser?.firstName}</span>{' '}
          <FaPaperPlane className="icon" />
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
          <Button goTo="/bookings" type="button" group="secondary" size="large">
            Your Bookings
          </Button>
          <Button goTo="/details" type="button" group="primary" size="large">
            Book a flight
          </Button>
          <Button type="button" group="tertiary" size="large">
            Travel Planner
          </Button>
        </div>
      </div>
    </Layout>
  );
};
export default Home;
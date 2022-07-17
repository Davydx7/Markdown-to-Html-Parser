import Button from '../../components/Button';
import FlightItem from '../../components/FlightItem';
import Layout from '../../components/Layout';
import './booking.scss';

const Bookings = () => (
  <Layout>
    <h1>Bookings</h1>
    <div>
      <FlightItem
        name="Chris Airways"
        id="XYZ123"
        date="July 22"
        time="15:30 UTC"
        from="Vienna"
        to="New York"
        price={450.99}
      />
    </div>
    <Button type="button" group="primary" goTo="/details">
      Book a flight
    </Button>
  </Layout>
);
export default Bookings;

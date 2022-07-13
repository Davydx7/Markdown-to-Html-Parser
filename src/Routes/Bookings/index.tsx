import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../Components/Button';
import FlightItem from '../../Components/FlightItem';
import Layout from '../../Components/Layout';
import './booking.scss';

const Bookings = () => {
  const [selected, setSelected] = useState('');
  return (
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
      <Button type="button" group="primary">
        <Link to="/details">Book a flight</Link>
      </Button>
    </Layout>
  );
};
export default Bookings;

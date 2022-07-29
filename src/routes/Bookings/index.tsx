import { FaPlane } from 'react-icons/fa';
import BookedFlightItem from '../../components/BookedFlightItem';
import Button from '../../components/Button';
import Layout from '../../components/Layout';
import PageHeader from '../../components/pageHeader';
import useFetchBookedFlights from '../../hooks/bookedFlights';
import './booking.scss';

const Bookings = () => {
  // fetch user's booked flights from server
  const { data: bookedFlights, isLoading, status } = useFetchBookedFlights();

  console.log('Bookings');

  return (
    <Layout>
      <div className="bookings">
        <PageHeader heading="Bookings" homeButton backButton />

        <ul>
          {isLoading ? (
            <div className="loader">
              <FaPlane className="loaderSpinner" />
              <FaPlane className="loaderSpinner" />
              <FaPlane className="loaderSpinner" />
            </div>
          ) : bookedFlights ? (
            bookedFlights.map((bookedFlight) => (
              <BookedFlightItem key={bookedFlight.id} {...bookedFlight} />
            ))
          ) : (
            <div>You have no available bookings</div>
          )}
        </ul>
        <Button type="button" group="primary" goTo="/details">
          Book a flight
        </Button>
      </div>
    </Layout>
  );
};
export default Bookings;

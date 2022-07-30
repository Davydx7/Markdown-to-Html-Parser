import { FaPlane } from 'react-icons/fa';
import BookedFlightItem from '../../components/BookedFlightItem';
import Button from '../../components/Button';
import Layout from '../../components/Layout';
import PageHeader from '../../components/pageHeader';
import useFetchBookedFlights from '../../hooks/bookedFlights';
import './booking.scss';

const Bookings = () => {
  // fetch user's booked flights from server
  const { data: bookedFlights, isLoading, isError } = useFetchBookedFlights();

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
          ) : isError ? (
            <div className="error">Failed to load bookings. Please try again.</div>
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

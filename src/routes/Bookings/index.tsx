import BookedFlightItem from '../../components/BookedFlightItem';
import Button from '../../components/Button';
import Layout from '../../components/Layout';
import useBookedFlights from '../../stores/clientStores/bookedFlights';
import './booking.scss';

const Bookings = () => {
  const bookedFlights = useBookedFlights((state) => state.bookedFlights);

  return (
    // useQuery call to get bookings based on Logged in user
    // but current totally mocked by zustand

    <Layout>
      <h1>Bookings</h1>

      <ul>
        {bookedFlights.length ? (
          bookedFlights.map((bookedFlight) => (
            <BookedFlightItem key={bookedFlight.id} {...bookedFlight} />
          ))
        ) : (
          <div>You have no bookings yet:</div>
        )}
      </ul>

      <Button type="button" group="primary" goTo="/details">
        Book a flight
      </Button>
    </Layout>
  );
};
export default Bookings;

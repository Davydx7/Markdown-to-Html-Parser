import BookedFlightItem from '../../components/BookedFlightItem';
import Button from '../../components/Button';
import Layout from '../../components/Layout';
import PageHeader from '../../components/pageHeader';
import useBookedFlights from '../../stores/clientStores/bookedFlights';
import './booking.scss';

const Bookings = () => {
  const bookedFlights = useBookedFlights((state) => state.bookedFlights);

  return (
    // useQuery call to get bookings based on Logged in user
    // but totally mocked by zustand for prototyping

    <Layout>
      <div className="bookings">
        <PageHeader heading="Bookings" homeButton backButton />

        <ul>
          {bookedFlights.length ? (
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

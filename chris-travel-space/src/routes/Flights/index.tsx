import { FaPlane } from 'react-icons/fa';
import Button from '../../components/Button';
import FlightItem from '../../components/FlightItem';
import Layout from '../../components/Layout';
import PageHeader from '../../components/pageHeader';
import useFetchFlights from '../../hooks/searchFlights';
import './flights.scss';

// Available flights list
const List: React.FC = () => {
  // Fetch available matching flights from server
  const { data: flights, isLoading, isError } = useFetchFlights();

  return (
    <Layout>
      <div className="flightList">
        <PageHeader heading="Flights for you" homeButton backButton />

        <ul>
          {isLoading ? (
            <div className="loader">
              <FaPlane className="loaderSpinner" />
              <FaPlane className="loaderSpinner" />
              <FaPlane className="loaderSpinner" />
            </div>
          ) : isError ? (
            <div className="error">Failed to load flights. Please try again.</div>
          ) : (
            flights?.map((flight) => <FlightItem key={flight.id} {...flight} />)
          )}
        </ul>

        <Button type="button" group="primary" goTo="/bookings">
          Bookings
        </Button>
      </div>
    </Layout>
  );
};
export default List;
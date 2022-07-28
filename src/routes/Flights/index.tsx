import { FaPlane, FaSpinner } from 'react-icons/fa';
import Button from '../../components/Button';
import FlightItem from '../../components/FlightItem';
import Layout from '../../components/Layout';
import PageHeader from '../../components/pageHeader';
import useFetchFlights from '../../hooks/searchFlights';
import './flights.scss';

// Available flights list
const List: React.FC = () => {
  const { data: flights, isLoading, status } = useFetchFlights();

  console.log('status: ', status);

  return (
    <Layout>
      <div className="flightList">
        <PageHeader heading="Flights for you" homeButton backButton />

        <ul>
          {isLoading ? (
            <div className="loader">
              <FaPlane className="loaderSpinner" />
            </div>
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

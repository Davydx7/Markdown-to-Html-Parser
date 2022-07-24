import Button from '../../components/Button';
import FlightItem from '../../components/FlightItem';
import Layout from '../../components/Layout';
import PageHeader from '../../components/pageHeader';
import useFetchFlights from '../../hooks/searchFlights';
import './flights.scss';

function List() {
  const { data: flights } = useFetchFlights();

  return (
    <Layout>
      <div className="flightList">
        <PageHeader heading="Flights for you" homeButton backButton />

        <ul>
          {flights?.map((flight) => (
            <FlightItem key={flight.id} {...flight} />
          ))}
        </ul>
        <Button type="button" group="primary" goTo="/bookings">
          Bookings
        </Button>
      </div>
    </Layout>
  );
}
export default List;

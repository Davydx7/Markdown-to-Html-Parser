import FlightItem from '../../components/FlightItem';
import Layout from '../../components/Layout';
import useFetchFlights from '../../hooks/searchFlights';
import './flights.scss';

function List() {
  const { data: flights } = useFetchFlights();

  return (
    <Layout>
      <div className="flightList">
        <h2 className="title">Flights for you</h2>
        <ul>
          {flights?.map((flight) => (
            <FlightItem key={flight.id} {...flight} />
          ))}
        </ul>
      </div>
    </Layout>
  );
}
export default List;

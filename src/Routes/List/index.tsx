import FlightItem from '../../Components/FlightItem';
import Layout from '../../Components/Layout';
import flights from './flight';

function List() {
  return (
    <Layout>
      <h2 className="title">Flights for you</h2>
      <ul>
        {flights.map((flight) => (
          <FlightItem key={flight.id} {...flight} />
        ))}
      </ul>
    </Layout>
  );
}
export default List;

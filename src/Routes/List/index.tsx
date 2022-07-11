import FlightItem from '../../Components/FlightItem';
import Layout from '../../Components/Layout';
import flights from './flight';
import './list.scss';

function List() {
  return (
    <Layout>
      <div className="flightList">
        <h2 className="title">Flights for you</h2>
        <ul>
          {flights.map((flight) => (
            <FlightItem key={flight.id} {...flight} />
          ))}
        </ul>
      </div>
    </Layout>
  );
}
export default List;

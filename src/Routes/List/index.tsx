import { useQuery } from 'react-query';
import FlightItem from '../../Components/FlightItem';
import Layout from '../../Components/Layout';
import useFlights from '../../Stores/Server/Available flights';
import { flightType } from '../../Stores/Server/ServerData/Flights';
import './list.scss';

function List() {
  const fetchFlights = useFlights((state) => state.getAvailableFlights);

  // This Data will be gotten from server later;
  const { data: flights } = useQuery<flightType[], Error>('flights', fetchFlights, {
    staleTime: Infinity
  });

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

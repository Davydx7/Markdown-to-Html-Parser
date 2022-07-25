import { FaPlaneArrival, FaPlaneDeparture } from 'react-icons/fa';
import { BiPlanet } from 'react-icons/bi';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { format, parseJSON } from 'date-fns';

import Button from '../../components/Button';
import Layout from '../../components/Layout';
import './summary.scss';
import useFetchFlights from '../../hooks/searchFlights';
import PageHeader from '../../components/pageHeader';
import useLoggedUser from '../../stores/clientStores/loggedUser';

// type summary = {
//   name: string;
//   id: string;
//   from: string;
//   to: string;
//   departureDate: string;
//   departureTime: string;
//   arrivalDate: string;
//   arrivalTime: string;
//   price: number;
// };

// const flight: summary = {
//   name: 'Chris Airways',
//   id: 'FLT1836',
//   from: 'Vienna',
//   to: 'New York',
//   departureDate: 'Fri, Jul 22',
//   departureTime: '15:30 UTC',
//   arrivalDate: 'Tue, Jul 26',
//   arrivalTime: '11:00 UTC',
//   price: 100
// };

const Summary: React.FC = () => {
  const { data: flights } = useFetchFlights();
  const { id } = useParams();

  const flight = flights?.find((flight) => flight.id === id);

  return (
    <Layout>
      {flight ? (
        <div className="summaryPage">
          <PageHeader
            heading={
              <>
                <BiPlanet className="planet" />
                {flight.name}
              </>
            }
            backButton
          />

          <div className="id">
            Flight ID: <span>{flight.id}</span>
          </div>
          <div className="schedule">
            {/* Departure Details */}
            <FaPlaneDeparture className="icon" />
            <div className="depArr">
              Departure:
              <span className="subtle">
                <span className="fi fi-at" /> {flight.from}
              </span>
            </div>
            <div className="date">
              <span>{format(parseJSON(flight.departureDate), 'MMM, d')}</span>
              <span className="subtle">
                {format(parseJSON(flight.departureDate), "HH:mm 'UTC'")}
              </span>
            </div>
            {/* Arrival Details */}
            <FaPlaneArrival className="icon" />
            <div className="depArr">
              Arrival:
              <span className="subtle">
                <span className="fi fi-us" /> {flight.to}
              </span>
            </div>
            <div className="date">
              <span>{format(parseJSON(flight.arrivalDate), 'MMM, d')}</span>
              <span className="subtle">{format(parseJSON(flight.arrivalDate), "HH:mm 'UTC'")}</span>
            </div>
          </div>
          <div className="price">
            <span>Price:</span>
            <span>${flight.price}</span>
            <span> VAT included:</span>
            <span>$0.99</span>
            <span>Total:</span>
            <span>${flight.price + 0.99}</span>
          </div>
          <p>
            Make a downpayment of 10% <strong>(${((flight.price + 0.99) / 10).toFixed(2)})</strong>
            <br />
            to secure seat
          </p>
          <Button goTo={`/payment/${id}`} type="button" size="medium">
            Pay 10% now
          </Button>
        </div>
      ) : (
        <>
          <p> No summary to display</p>
          <p> Select a flight to view summary</p>
        </>
      )}
    </Layout>
  );
};
export default Summary;

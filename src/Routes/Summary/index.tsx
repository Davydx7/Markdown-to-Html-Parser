import { FaPlaneArrival, FaPlaneDeparture } from 'react-icons/fa';
import { BiPlanet } from 'react-icons/bi';
import Button from '../../components/Button';
import Layout from '../../components/Layout';
import './summary.scss';

type summary = {
  name: string;
  id: string;
  from: string;
  to: string;
  departureDate: string;
  departureTime: string;
  arrivalDate: string;
  arrivalTime: string;
  price: number;
};

const flight: summary = {
  name: 'Chris Airways',
  id: 'FLT1836',
  from: 'Vienna',
  to: 'New York',
  departureDate: 'Fri, Jul 22',
  departureTime: '15:30 UTC',
  arrivalDate: 'Tue, Jul 26',
  arrivalTime: '11:00 UTC',
  price: 100
};

const Summary: React.FC = () => (
  <Layout>
    <div className="summaryPage">
      <h1 className="title">
        <BiPlanet className="planet" />
        {flight.name}
      </h1>
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
          <span>{flight.departureDate}</span>
          <span className="subtle">{flight.departureTime}</span>
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
          <span>{flight.arrivalDate}</span>
          <span className="subtle">{flight.arrivalTime}</span>
        </div>
      </div>
      <div className="price">
        <span>Price:</span>
        <span>${flight.price}.00</span>
        <span> VAT included:</span>
        <span>$0.99</span>
        <span>Total:</span>
        <span>$100.99</span>
      </div>
      <p>
        Make a downpayment of 10% <br />
        to secure seat
      </p>
      <Button goTo="/payment" type="button" size="medium">
        Pay 10% now
      </Button>
      <Button goTo="/list" type="button" size="medium" group="secondary">
        Go back
      </Button>
    </div>
  </Layout>
);
export default Summary;

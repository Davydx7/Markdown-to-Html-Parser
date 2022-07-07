import './flightItem.scss';

type Props = {
  name: string;
  id: string;
  from: string;
  to: string;
  date: string;
  time: string;
  price: number;
  onClick?: () => void;
};

const FlightItem: React.FC<Props> = ({ name, from, to, date, time, price }) => (
  <li>
    <div className="flight-item"> flight from: {from} </div>
  </li>
);
export default FlightItem;

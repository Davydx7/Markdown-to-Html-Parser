import { Link } from 'react-router-dom';
import Button from '../Button';
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
  <li className="flightItem">
    <div className="info one">
      <div>
        <span className="fi fi-at" /> {from} &rarr; <span className="fi fi-us" /> {to}
      </div>
      <h3 className="name">{name}</h3>
    </div>
    <div className="info two">
      <div>Departure:</div>
      <h3 className="date">
        <span>{date}</span>
        {' . '}
        <span>{time}</span>
      </h3>
    </div>
    <div className="info three">
      <div>Fee:</div>
      <h3 className="price">
        <span>${price}</span>
      </h3>
    </div>
    <Button type="button" size="medium">
      <Link to="/summary"> Book </Link>
    </Button>
  </li>
);
export default FlightItem;

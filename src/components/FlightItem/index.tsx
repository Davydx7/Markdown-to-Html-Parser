import { format, parseJSON } from 'date-fns';
import Button from '../Button';
import './flightItem.scss';

type Props = {
  id: string;
  name: string;
  from: string;
  to: string;
  departureDate: string /* Date */;
  arrivalDate?: string;
  price: number;
  onClick?: () => void;
};

const FlightItem: React.FC<Props> = ({ id, name, from, to, departureDate, price, onClick }) => (
  <li className="flightItem">
    <div className="info one">
      <div>
        <span className="fi fi-at" /> {from} &rarr; <span className="fi fi-us" /> {to}
      </div>
      <h3 className="name">{name}</h3>
    </div>
    <div className="info two">
      <div>Departure:</div>
      <h3 className="departureDate">
        <span>{format(parseJSON(departureDate), 'MMM, d')}</span>
        {' - '}
        <span>{format(parseJSON(departureDate), "HH:mm 'UTC'")}</span>
      </h3>
    </div>
    <div className="info three">
      <div>Fee:</div>
      <h3 className="price">
        <span>${price}</span>
      </h3>
    </div>
    <Button goTo={`/flights/${id}`} type="button" size="medium">
      Book
    </Button>
  </li>
);
export default FlightItem;

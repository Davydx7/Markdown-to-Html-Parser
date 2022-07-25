import { format, parseJSON } from 'date-fns';
import useBookedFlights from '../../stores/clientStores/bookedFlights';
import Button from '../Button';
import './bookedItem.scss';

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

const BookedFlightItem: React.FC<Props> = ({
  id,
  name,
  from,
  to,
  departureDate,
  price,
  onClick
}) => {
  const removeBookedFlight = useBookedFlights((state) => state.removeBookedFlight);

  const handleClick = () => {
    removeBookedFlight(id);
  };

  return (
    <li className="bookedFlightItem">
      <div className="info one">
        <div className="city">
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
        <div>Paid Fee:</div>
        <h3 className="price">
          <span>${price}</span>
        </h3>
      </div>
      <Button onClick={handleClick} type="button" size="medium">
        Cancel
      </Button>
    </li>
  );
};
export default BookedFlightItem;
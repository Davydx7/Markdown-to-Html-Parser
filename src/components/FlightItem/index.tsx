import { format, parseJSON } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import useLoggedUser from '../../stores/clientStores/loggedUser';
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

const FlightItem: React.FC<Props> = ({ id, name, from, to, departureDate, price, onClick }) => {
  const navigate = useNavigate();

  const loggedUser = useLoggedUser((state) => state.loggedUser);

  // redirect users on clicking 'book' based on login status
  const onClickBook = () => {
    if (loggedUser) {
      navigate(`/flights/${id}`);
    } else {
      navigate(`/signup/${id}`);
    }
  };

  return (
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
      <Button onClick={onClickBook} type="button" size="medium">
        Book
      </Button>
    </li>
  );
};
export default FlightItem;

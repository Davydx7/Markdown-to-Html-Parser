import { useMutation, useQueryClient } from '@tanstack/react-query';
import { format, parseJSON } from 'date-fns';
import * as Flags from 'country-flag-icons/react/3x2';
import { byIso } from 'country-code-lookup';
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

  const queryClient = useQueryClient();

  const mutation = useMutation(
    () => {
      removeBookedFlight(id);
      return Promise.resolve('done');
    },
    {
      onSuccess: () => queryClient.invalidateQueries(['bookedFlights'])
    }
  );

  const FlagFrom = Flags[from as keyof typeof Flags];

  const FlagTo = Flags[to as keyof typeof Flags];

  return (
    <li className="bookedFlightItem">
      <div className="info one">
        <div className="city">
          <FlagFrom className="flag" /> {byIso(from)?.country} &rarr; <FlagTo className="flag" />{' '}
          {byIso(to)?.country}
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
      <Button onClick={mutation.mutate} type="button" size="medium">
        Cancel
      </Button>
    </li>
  );
};
export default BookedFlightItem;

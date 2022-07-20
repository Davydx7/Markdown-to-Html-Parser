import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { startOfToday, addDays } from 'date-fns';

import Button from '../../components/Button';
import Layout from '../../components/Layout';
import Autocomplete from '../../components/Autocomplete';
import './details.scss';

export type FlightDetails = {
  from: string;
  to: string;
  departureDate: string;
};

const Details: React.FC = () => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors, isValid }
  } = useForm<FlightDetails>({
    mode: 'onChange',
    defaultValues: {
      from: '',
      to: '',
      departureDate: ''
    }
  });

  const navigate = useNavigate();

  const onSubmit = (data: FlightDetails) => {
    // no next line, should be sent to api, result from api will be stored with react query itself
    // by then the flights data call wwill be made and received here by react query before navigating, and not at
    // the flights page itself as its currently at

    // setFlightDetails(data); // no
    console.log(data);

    navigate('/flights');
  };

  const today = startOfToday();
  const tomorrow = addDays(today, 1);
  const next2days = addDays(today, 2);

  return (
    <Layout>
      <div className="detailsPage">
        <h2 className="title">Book your next flight!</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Autocomplete
            placeholder="Departure location"
            name="from"
            control={control}
            rules={{
              required: 'required',
              validate: () => watch('from') !== watch('to') || 'Locations must be different'
            }}
          />

          <Autocomplete
            placeholder="Destination"
            name="to"
            control={control}
            rules={{
              required: 'required',
              validate: () => watch('from') !== watch('to') || 'Locations must be different'
            }}
          />

          <label>
            <span className="label">
              Departure Day<i>*</i>
            </span>
            <select {...register('departureDate', { required: 'required' })}>
              <option selected disabled hidden value="">
                Select a day
              </option>
              <option value={today.toJSON()}>{`Today, ${today.toLocaleDateString('en-GB', {
                weekday: 'long'
              })}`}</option>
              <option value={tomorrow.toJSON()}>{`Tommorow, ${tomorrow.toLocaleDateString('en-GB', {
                weekday: 'long'
              })}`}</option>
              <option value={next2days.toJSON()}>
                {next2days.toLocaleDateString('en-GB', {
                  weekday: 'long'
                })}
              </option>
            </select>
            {errors.departureDate && <span className="error">{errors.departureDate.message}</span>}
          </label>

          <Button disabled={!isValid} type="submit">
            Search Flight
          </Button>
        </form>
      </div>
    </Layout>
  );
};
export default Details;

import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Button from '../../Components/Button';
import Layout from '../../Components/Layout';
import Autocomplete from '../../Components/Autocomplete';
import './details.scss';

export type FormValues = {
  From: string;
  To: string;
  departureDate: string;
  returningDate: string;
};

const Details: React.FC = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid }
  } = useForm<FormValues>({
    mode: 'onChange',
    defaultValues: {
      From: '',
      To: '',
      departureDate: '',
      returningDate: ''
    }
  });

  const navigate = useNavigate();

  const onSubmit = (data: any) => {
    // eslint-disable-next-line no-console
    console.log(data);

    navigate('/list');
  };
  // console.log(errors);

  return (
    <Layout>
      <div className="detailsPage">
        <h2 className="title">Book your next flight!</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Autocomplete
            placeholder="Departure location"
            name="From"
            control={control}
            rules={{ required: 'required' }}
          />
          <Autocomplete
            placeholder="Destination"
            name="To"
            control={control}
            rules={{ required: 'required' }}
          />

          <label>
            <span className="label">
              Departure Date<i>*</i>
            </span>

            <input type="date" />
            {/* <input
              type="datetime"
              placeholder="Departure date"
              {...register('departureDate', { required: true })}
            /> */}
            {errors.departureDate && <span className="error">{errors.departureDate.message}</span>}
          </label>

          <label>
            <span className="label">
              Returning Date<i>*</i>
            </span>
            <input
              type="date"
              placeholder="Returning Date"
              {...register('returningDate', { required: true })}
            />
            {errors.returningDate && <span className="error">{errors.returningDate.message}</span>}
          </label>
          <Button type="submit">Search Flight</Button>
        </form>
      </div>
    </Layout>
  );
};
export default Details;

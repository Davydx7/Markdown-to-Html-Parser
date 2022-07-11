import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Button from '../../Components/Button';
import Layout from '../../Components/Layout';
import './details.scss';

const Details: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

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
          <input
            type="text"
            placeholder="From(Location)"
            {...register('From(Location)', { required: true, maxLength: 100 })}
          />
          <input
            type="text"
            placeholder="To(Destination)"
            {...register('To(Destination)', { required: true, maxLength: 100 })}
          />

          <div>
            <input
              type="datetime"
              placeholder="Departure Date"
              {...register('Departure', { required: true })}
            />
            <input
              type="datetime"
              placeholder="Return Date"
              {...register('Return', { required: true })}
            />
          </div>
          {errors.Title && <p>errors.Title.message</p>}
          <Button type="submit">Search Flight</Button>
        </form>
      </div>
    </Layout>
  );
};
export default Details;

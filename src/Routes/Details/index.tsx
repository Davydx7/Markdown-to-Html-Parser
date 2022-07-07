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
      <h2 className="title">Book your next flight!</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <select {...register('Title', { required: true })}>
          <option value="Mr">Mr</option>
          <option value="Mrs">Mrs</option>
          <option value="Miss">Miss</option>
          <option value="Dr">Dr</option>
        </select>
        <input
          type="text"
          placeholder="First name"
          {...register('First name', { required: true, maxLength: 80 })}
        />
        <input
          type="text"
          placeholder="Last name"
          {...register('Last name', { required: true, maxLength: 100 })}
        />
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
        <input
          type="text"
          placeholder="Email"
          {...register('Email', { required: true, pattern: /^\S+@\S+$/i })}
        />
        <input
          type="tel"
          placeholder="Mobile number"
          {...register('Mobile number', { required: true, minLength: 6, maxLength: 16 })}
        />
        <div>
          <input
            type="datetime"
            placeholder="Departure"
            {...register('Departure', { required: true })}
          />
          <input type="datetime" placeholder="Return" {...register('Return', { required: true })} />
        </div>
        {errors.Title && <p>errors.Title.message</p>}
        <Button type="submit">Search Flight</Button>
      </form>
    </Layout>
  );
};
export default Details;

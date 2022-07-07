import { Link } from 'react-router-dom';
import Button from '../../Components/Button';
import './notFound.scss';

function NotFound() {
  return (
    <div className="notFound">
      <div className="title">Overflight</div>
      <div className="subtitle">Page Not Found</div>
      <div className="text">Our attendant will lead you back to the booking officer</div>
      <Button type="button">
        <Link to="/details">Book a flight</Link>
      </Button>
    </div>
  );
}
export default NotFound;

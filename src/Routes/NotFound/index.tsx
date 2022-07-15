import Button from '../../Components/Button';
import './notFound.scss';

function NotFound() {
  return (
    <div className="notFound">
      <div className="title">Overflight</div>
      <div className="subtitle">Page Not Found</div>
      <div className="text">Our attendant will lead you back to the booking officer</div>
      <Button type="button" goTo="/details">
        Book a flight
      </Button>
    </div>
  );
}
export default NotFound;

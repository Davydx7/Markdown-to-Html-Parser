import Button from '../Button';
import './header.scss';

type Props = {
  color?: string;
  children?: React.ReactNode;
};

const Header: React.FC<Props> = () => (
  <header>
    <div className="logo">&lt; Chris /&gt;</div>
    <Button type="button">Login</Button>
  </header>
);
export default Header;

import { useNavigate, To } from 'react-router-dom';
import './button.scss';

type Props = {
  type: 'submit' | 'button' | 'reset';
  group?: 'primary' | 'secondary' | 'tertiary' | 'quaternary';
  size?: 'small' | 'medium' | 'large';
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  goTo?: string | number;
};

const Button: React.FC<Props> = ({
  size = 'medium',
  children,
  onClick,
  goTo,
  group = 'primary',
  type = 'button',
  disabled = false
}) => {
  const navigate = useNavigate();
  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick || (goTo ? () => navigate(goTo as To) : undefined)}
      className={`button ${size} ${group}`}>
      {children || 'Button'}
    </button>
  );
};
export default Button;

import './button.scss';

type Props = {
  type: 'submit' | 'button' | 'reset';
  group?: 'primary' | 'secondary' | 'tertiary' | 'quaternary';
  size?: 'small' | 'medium' | 'large';
  children?: React.ReactNode;
  onClick?: () => void;
};

const Button: React.FC<Props> = ({
  size = 'medium',
  children,
  onClick,
  group = 'primary',
  type = 'button'
}) => (
  <button type={type} onClick={onClick} className={`button ${size} ${group}`}>
    {children || 'Button'}
  </button>
);
export default Button;

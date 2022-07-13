import './button.scss';

type Props = {
  type: 'submit' | 'button' | 'reset';
  group?: 'primary' | 'secondary' | 'tertiary' | 'quaternary';
  size?: 'small' | 'medium' | 'large';
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
};

const Button: React.FC<Props> = ({
  size = 'medium',
  children,
  onClick,
  group = 'primary',
  type = 'button',
  disabled = false
}) => (
  <button disabled={disabled} type={type} onClick={onClick} className={`button ${size} ${group}`}>
    {children || 'Button'}
  </button>
);
export default Button;

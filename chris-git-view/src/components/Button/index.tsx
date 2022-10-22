import React, {
  JSXElementConstructor,
  MouseEventHandler,
  ReactElement,
  ReactNode,
  ReducerAction
} from 'react';
import './button.scss';
const Button: React.FC<{
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
}> = ({ onClick, children }) => {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
};
export default Button;

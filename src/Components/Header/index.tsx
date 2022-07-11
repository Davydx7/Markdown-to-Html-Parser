import { useEffect, useState } from 'react';
import Draggable from 'react-draggable';
import { FaMoon, FaRandom, FaSun } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { RgbaColorPicker } from 'react-colorful';

import Button from '../Button';
import './header.scss';

type Props = {
  color?: string;
  children?: React.ReactNode;
};

const Header: React.FC<Props> = () => {
  const [theme, setTheme] = useState('light');
  const [color, setColor] = useState({ r: 174, g: 52, b: 217, a: 1 });

  useEffect(() => {
    document.body.classList.add('light');
  }, []);

  if (theme === 'light') {
    document.body.classList.replace('darkRandom', 'light');
    document.body.style.setProperty('--primary', '5,5,5');
    document.body.style.setProperty('--secondary', '255,255,255');
  } else if (theme === 'dark') {
    document.body.classList.replace('light', 'dark');
    document.body.style.setProperty('--primary', '255,255,255');
    document.body.style.setProperty('--secondary', '5,5,5');
  } else if (theme === 'lightRandom') {
    document.body.classList.replace('dark', 'lightRandom');
    document.body.style.setProperty('--primary', `${color.r},${color.g},${color.b}`);
    document.body.style.setProperty('--secondary', '255,255,255');
  } else {
    document.body.classList.replace('lightRandom', 'darkRandom');
    document.body.style.setProperty('--primary', `${color.r},${color.g},${color.b}`);
    document.body.style.setProperty('--secondary', '5,5,5');
  }

  const handleClick = () => {
    setTheme(
      theme === 'light'
        ? 'dark'
        : theme === 'dark'
        ? 'lightRandom'
        : theme === 'lightRandom'
        ? 'darkRandom'
        : 'light'
    );
  };
  return (
    <header className="pageHeader">
      <div className="logo">&lt;Chris /&gt;</div>
      <div className="theme">
        {theme === 'light' ? (
          <FaMoon className="icon" onClick={handleClick} />
        ) : theme === 'dark' ? (
          <div>
            <FaSun className="icon" onClick={handleClick} />
            <FaRandom className="icon" onClick={handleClick} />
          </div>
        ) : theme === 'lightRandom' ? (
          <div>
            <FaMoon className="icon" onClick={handleClick} />
            <FaRandom className="icon" onClick={handleClick} />
          </div>
        ) : (
          <FaSun className="icon" onClick={handleClick} />
        )}
      </div>
      <p>Current Theme: {theme}</p>
      <div className="buttons">
        <Button type="button">
          <Link to="/login/1">Sign Up</Link>
        </Button>
        <Button type="button" group="secondary">
          <Link to="/login/2">Login</Link>
        </Button>
      </div>

      {(theme === 'lightRandom' || theme === 'darkRandom') && (
        <Draggable>
          <RgbaColorPicker className="colorPicker" color={color} onChange={setColor} />
        </Draggable>
      )}
    </header>
  );
};
export default Header;

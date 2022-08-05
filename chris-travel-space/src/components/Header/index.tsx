import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { FaMoon, FaRandom, FaSun } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import Button from '../Button';
import './header.scss';
import useLoggedUser from '../../stores/clientStores/loggedUser';
import ColorPicker from '../ColorPicker';

const storedTheme = localStorage.getItem('theme');
const initialTheme = storedTheme ?? 'light';

const storedColor = JSON.parse(localStorage.getItem('color') as string);
const intialColor = storedColor ?? { r: 174, g: 52, b: 217, a: 1 };

const Header: React.FC = () => {
  const [theme, setTheme] = useState<string>(initialTheme);
  const [color, setColor] = useState(intialColor);

  localStorage.setItem('theme', theme);
  localStorage.setItem('color', JSON.stringify(color));

  function setBodyStyle(primary: string, secondary: string): void {
    document.body.style.setProperty('--primary', primary);
    document.body.style.setProperty('--secondary', secondary);
  }

  if (theme === 'light') {
    setBodyStyle('5,5,5', '255,255,255');
  } else if (theme === 'dark') {
    setBodyStyle('255,255,255', '5,5,5');
  } else if (theme === 'lightRandom') {
    setBodyStyle(`${color.r},${color.g},${color.b}`, '255,255,255');
  } else if (theme === 'darkRandom') {
    setBodyStyle(`${color.r},${color.g},${color.b}`, '5,5,5');
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

  const loggedUser = useLoggedUser((state) => state.loggedUser);

  const navigate = useNavigate();

  return (
    <header className="appHeader">
      <div className="logo" onClick={() => navigate('/')}>
        &lt;Chris/&gt;
      </div>

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
        {loggedUser ? (
          <Button type="button" group="secondary" goTo="/logout">
            Log Out
          </Button>
        ) : (
          <>
            <Button type="button" goTo="/signup/1">
              Sign Up
            </Button>
            <Button type="button" group="secondary" goTo="/login/1">
              Login
            </Button>
          </>
        )}
      </div>

      <AnimatePresence initial>
        {(theme === 'lightRandom' || theme === 'darkRandom') && (
          <ColorPicker theme={theme} color={color} setColor={setColor} />
        )}
      </AnimatePresence>
    </header>
  );
};
export default Header;
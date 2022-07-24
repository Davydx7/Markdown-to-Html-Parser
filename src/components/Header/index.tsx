import { useEffect, useState } from 'react';
import { motion, useDragControls } from 'framer-motion';
import { FaMoon, FaRandom, FaSun } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import { RgbaColorPicker } from 'react-colorful';

import Button from '../Button';
import './header.scss';
import useLoggedUser from '../../stores/clientStores/loggedUser';

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

  const dragControls = useDragControls();

  function startDrag(event: any) {
    dragControls.start(event, { snapToCursor: true });
  }

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
            <Button type="button" goTo="/signup">
              Sign Up
            </Button>
            <Button type="button" group="secondary" goTo="/login">
              Login
            </Button>
          </>
        )}
      </div>

      {(theme === 'lightRandom' || theme === 'darkRandom') && (
        <motion.div
          id="colorBox"
          drag
          dragMomentum={false}
          dragControls={dragControls}
          dragListener={false}>
          <div className="dragHandle" onPointerDown={startDrag}>
            + Move Box Here +
          </div>
          <div>
            <RgbaColorPicker className="colorPicker" color={color} onChange={setColor} />
          </div>
        </motion.div>
      )}
    </header>
  );
};
export default Header;

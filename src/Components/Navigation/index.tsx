import { NavLink } from 'react-router-dom';
import Draggable from 'react-draggable';

import {
  FaHome,
  FaUserAlt,
  FaListAlt,
  FaPlane,
  FaKey,
  FaRegCreditCard,
  FaFileSignature
} from 'react-icons/fa';
import { BiError } from 'react-icons/bi';

import './navigation.scss';
import { ReactNode } from 'react';

type page = {
  text: string;
  title: string;
  path: string;
  icon: ReactNode;
};

const pages: page[] = [
  {
    text: 'Home',
    title: 'Go to home page',
    path: '/',
    icon: <FaHome className="icon" />
  },
  {
    text: 'Flight details',
    title: 'Passenger personal flight details',
    path: '/details',
    icon: <FaUserAlt className="icon" />
  },
  {
    text: 'Flight list',
    title: 'List of available flight based on passenger details',
    path: '/list',
    icon: <FaListAlt className="icon" />
  },
  {
    text: 'Summary',
    title: 'summary of passenger flight booking',
    path: '/summary',
    icon: <FaPlane className="icon" />
  },
  {
    text: 'Sign Up',
    title: 'Sign Up page',
    path: '/login/1',
    icon: <FaFileSignature className="icon" />
  },
  {
    text: 'Login',
    title: 'Login page',
    path: '/login/2',
    icon: <FaKey className="icon" />
  },
  {
    text: 'Payment',
    title: 'Payment page',
    path: '/payment',
    icon: <FaRegCreditCard className="icon" />
  },
  {
    text: '404 page',
    title: 'Page not found',
    path: '/404',
    icon: <BiError className="icon" />
  }
];

const Navigation = () => (
  <Draggable>
    <div id="navigation">
      <div id="navigationheader">Drag around navigation</div>
      <div className="pages">
        {pages.map((pag) => (
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : '')}
            to={pag.path}
            title={pag.title}>
            {pag.icon} {pag.text}
          </NavLink>
        ))}
      </div>
    </div>
  </Draggable>
);
export default Navigation;

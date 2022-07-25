import { NavLink } from 'react-router-dom';
// import Draggable from 'react-draggable';
import { motion } from 'framer-motion';

import {
  FaHome,
  FaUserAlt,
  FaListAlt,
  FaPlane,
  FaKey,
  FaRegCreditCard,
  FaFileSignature,
  FaDoorOpen
} from 'react-icons/fa';
import { BiBookBookmark, BiError } from 'react-icons/bi';

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
    text: 'Bookings',
    title: 'See all bookings',
    path: '/bookings',
    icon: <BiBookBookmark className="icon" />
  },
  {
    text: 'Flight details',
    title: 'Passenger personal flight details',
    path: '/details',
    icon: <FaUserAlt className="icon" />
  },
  {
    text: 'Flights',
    title: 'List of available flight based on passenger details',
    path: '/flights',
    icon: <FaListAlt className="icon" />
  },
  {
    text: 'Flight Summary',
    title: 'summary of passenger flight booking',
    path: '/flights/1',
    icon: <FaPlane className="icon" />
  },
  {
    text: 'Sign Up',
    title: 'Sign Up page',
    path: '/signup/1',
    icon: <FaFileSignature className="icon" />
  },
  {
    text: 'Login',
    title: 'Login page',
    path: '/login/1',
    icon: <FaKey className="icon" />
  },
  {
    text: 'Logout',
    title: 'Logout page',
    path: '/logout',
    icon: <FaDoorOpen className="icon" />
  },
  {
    text: 'Payment',
    title: 'Payment page',
    path: '/payment/1',
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
  <motion.div id="navigation" drag dragMomentum={false}>
    <div id="navigationheader">Drag around navigation</div>
    <div className="pages">
      {pages.map((page) => (
        <NavLink
          key={page.text}
          className={({ isActive }) => (isActive ? 'active' : '')}
          to={page.path}
          title={page.title}>
          {page.icon} {page.text}
        </NavLink>
      ))}
    </div>
  </motion.div>
);
export default Navigation;
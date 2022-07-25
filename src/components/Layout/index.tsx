import { motion } from 'framer-motion';

import './layout.scss';

type Props = {
  children: React.ReactNode;
};

const transit = {
  hidden: { opacity: 0, x: '25%' },
  visible: {
    opacity: 1,
    x: 0
  },
  exit: { opacity: 0, x: '-25%' }
};

const Layout: React.FC<Props> = ({ children }) => (
  <motion.div
    variants={transit}
    initial="hidden"
    animate="visible"
    exit="exit"
    transition={{ type: 'spring', duration: 0.6 }}
    className="layout">
    {children}
  </motion.div>
);

export default Layout;

import { Dispatch, useState } from 'react';
import { RgbaColor, RgbaColorPicker } from 'react-colorful';
import { FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';

import colorPicker from '../../assets/png/colorPicker.png';

import './colorPicker.scss';

type Props = {
  theme: string;
  color: RgbaColor;
  setColor: Dispatch<RgbaColor>;
};

const ColorPicker: React.FC<Props> = ({ theme, color, setColor }) => {
  const [isOpen, setIsOpen] = useState<Boolean>(true);

  return (
    <motion.div
      initial={{ y: '-100vw', opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: '-100vw', opacity: 0 }}
      transition={{ type: 'spring', duration: 1, bounce: 0 }}
      className="colorArea">
      {isOpen && (
        <div className="colorBox">
          <RgbaColorPicker className="colorPicker" color={color} onChange={setColor} />
        </div>
      )}
      <div className="control" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <img src={colorPicker} alt="color picker" />}
      </div>
    </motion.div>
  );
};

export default ColorPicker;

import { useState } from 'react';

const AbsolutePanel: React.FC = () => {
  const [isShow, setIsShow] = useState(false);

  return (
    <div className="relativePanel">
      <span>Anchor</span>
      <div className="anchor">
        <span>X</span>
        <input type="number" />
        <span>Y</span>
        <input type="number" />
      </div>
      <span>Positioning</span>
      <div className="positioning">
        <span>X offset:</span>
        <input type="number" />
        <span>Width:</span>
        <input type="number" />
        <span>Y offset:</span>
        <input type="number" />
        <span>Height:</span>
        <input type="number" />
      </div>
    </div>
  );
};
export default AbsolutePanel;

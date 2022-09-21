import { useState } from 'react';

const RelativePanel: React.FC = () => {
  const [isShow, setIsShow] = useState(false);

  return (
    <div className="relativePanel">
      <span>Anchor</span>
      <div className="anchor">
        <span>X</span>
        <span>Y</span>
        <input type="number" />
        <span>Min</span>
        <input type="number" />
        <input type="number" />
        <span>Max</span>
        <input type="number" />
      </div>
      <span>Margins</span>
      <div className="margin">
        <span>Left:</span>
        <input type="number" />
        <span>Right:</span>
        <input type="number" />
        <span>Top:</span>
        <input type="number" />
        <span>Bottom:</span>
        <input type="number" />
      </div>
    </div>
  );
};
export default RelativePanel;

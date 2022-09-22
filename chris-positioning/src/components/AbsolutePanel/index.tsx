import { useState } from 'react';
import './absolutePanel.scss';

const AbsolutePanel: React.FC = () => {
  const [isShow, setIsShow] = useState(false);

  return (
    <div className="absolutePanel">
      <fieldset className="anchor">
        <legend>. Anchors :</legend>
        <label>
          <strong>X</strong>
          <input id="x" type="number" min={0} max={100} />
        </label>
        <span>%</span>
        <label>
          <strong>Y</strong>
          <input id="y" type="number" min={0} max={100} />
        </label>
      </fieldset>

      <fieldset className="positioning">
        <legend>. Positioning :</legend>
        <label>
          X offset: <input type="number" /> px
        </label>
        <label>
          Y offset: <input type="number" /> px
        </label>
        <label>
          Width: <input type="number" /> px
        </label>
        <label>
          Height: <input type="number" /> px
        </label>
      </fieldset>
    </div>
  );
};
export default AbsolutePanel;

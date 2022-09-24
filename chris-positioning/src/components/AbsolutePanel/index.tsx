import { useState } from 'react';
import Input from '../Input';
import './absolutePanel.scss';

const AbsolutePanel: React.FC = () => {
  const [isShow, setIsShow] = useState(false);

  return (
    <div className="absolutePanel">
      <fieldset className="anchor">
        <legend>. Anchors :</legend>
        <label>
          <strong>X</strong>
          <Input value="x" />
        </label>
        <span>%</span>
        <label>
          <strong>Y</strong>
          <Input value="y" />
        </label>
      </fieldset>

      <fieldset className="positioning">
        <legend>. Positioning :</legend>
        <label>
          X offset:
          <Input value="xOffset" />
          px
        </label>
        <label>
          Y offset:
          <Input value="yOffset" />
          px
        </label>
        <label>
          Width:
          <Input value="width" />
          px
        </label>
        <label>
          Height:
          <Input value="height" />
          px
        </label>
      </fieldset>

      <fieldset className="pivot">
        <legend>. Pivot :</legend>
        <label>
          X:
          <Input value="xPivot" />
        </label>
        <span>%</span>
        <label>
          Y:
          <Input value="yPivot" />
        </label>
      </fieldset>
    </div>
  );
};
export default AbsolutePanel;

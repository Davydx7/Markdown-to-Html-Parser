import { useState } from 'react';
import './relativePanel.scss';

const RelativePanel: React.FC = () => {
  const [isShow, setIsShow] = useState(false);

  return (
    <div className="relativePanel">
      <fieldset className="anchor">
        <legend>. Anchors :</legend>
        <strong>X</strong>
        <strong>Y</strong>
        <span>%</span>
        <input id="xMin" type="number" value={50} min={0} max={100} />
        <span>-- min --</span>
        <input id="yMin" type="number" value={50} min={0} max={100} />
        <span>%</span>
        <span>%</span>
        <input id="xMax" type="number" value={75} min={0} max={100} />
        <span>-- max --</span>
        <input id="yMax" type="number" value={75} min={0} max={100} />
        <span>%</span>
      </fieldset>

      <fieldset className="positioning">
        <legend>. Margins :</legend>
        <label>
          Left: <input type="number" /> px
        </label>
        <label>
          Top: <input type="number" /> px
        </label>
        <label>
          Right: <input type="number" /> px
        </label>
        <label>
          Bottom <input type="number" /> px
        </label>
      </fieldset>
    </div>
  );
};
export default RelativePanel;

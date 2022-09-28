import { useState } from 'react';
import Input from '../Input';
import './unityPanel.scss';

const UnityPanel: React.FC<{ isAbsolute: boolean }> = ({ isAbsolute }) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <div className="unityPanel">
      {isAbsolute ? (
        <>
          <fieldset className="anchorAbsolute">
            <legend>. ANCHORS :</legend>
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
            <legend>. POSITIONING :</legend>
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
            <legend>. PIVOT :</legend>
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
        </>
      ) : (
        <>
          <fieldset className="anchorRelative">
            <legend>. ANCHORS :</legend>
            <strong>X</strong>
            <strong>Y</strong>
            <span>%</span>
            <Input value="xMin" />
            <span>-min-</span>
            <Input value="yMin" />
            <span>%</span>
            <span>%</span>
            <Input value="xMax" />
            <span>-max-</span>
            <Input value="yMax" />
            <span>%</span>
          </fieldset>

          <fieldset className="margins">
            <legend>. MARGINS :</legend>
            <label>
              Left: <Input value="left" /> px
            </label>
            <label>
              Top: <Input value="top" /> px
            </label>
            <label>
              Right: <Input value="right" /> px
            </label>
            <label>
              Bottom <Input value="bottom" /> px
            </label>
          </fieldset>
        </>
      )}
    </div>
  );
};
export default UnityPanel;

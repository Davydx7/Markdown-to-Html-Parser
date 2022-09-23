import Input from '../Input';
import './relativePanel.scss';

const RelativePanel: React.FC = () => (
  <div className="relativePanel">
    <fieldset className="anchor">
      <legend>. Anchors :</legend>
      <strong>X</strong>
      <strong>Y</strong>
      <span>%</span>
      <Input value="xMin" />
      <span>-- min --</span>
      <Input value="yMin" />
      <span>%</span>
      <span>%</span>
      <Input value="xMax" />
      <span>-- max --</span>
      <Input value="yMax" />
      <span>%</span>
    </fieldset>

    <fieldset className="positioning">
      <legend>. Margins :</legend>
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
  </div>
);
export default RelativePanel;

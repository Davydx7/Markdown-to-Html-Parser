import Input from '../Input';
import './cssPanel.scss';

const CssPanel: React.FC<{ isAbsolute: boolean }> = ({ isAbsolute }) => (
  <div className="cssPanel">
    {isAbsolute ? ( // if absolute, show absolute input fields
      <>
        <fieldset className="cssFieldset">
          <legend>. OFFSETS :</legend>
          <label>
            Top: <Input value="CssOffsetTop" /> px
          </label>
          <label>
            Left: <Input value="CssOffsetLeft" /> px
          </label>
        </fieldset>

        <fieldset className="cssFieldset">
          <legend>. DIMENSIONS :</legend>
          <label>
            Width: <Input value="CssWidth" /> px
          </label>
          <label>
            Height: <Input value="CssHeight" /> px
          </label>
        </fieldset>
      </>
    ) : (
      // else, show relative input fields
      <>
        <fieldset className="cssFieldset">
          <legend>. INSETS :</legend>
          <label>
            Top: <Input value="CssInsetTop" /> %
          </label>
          <label>
            Right: <Input value="CssInsetRight" /> %
          </label>
          <label>
            Bottom <Input value="CssInsetBottom" /> %
          </label>
          <label>
            Left: <Input value="CssInsetLeft" /> %
          </label>
        </fieldset>

        <fieldset className="cssFieldset">
          <legend>. MARGINS :</legend>
          <label>
            Top: <Input value="CssMarginTop" /> px
          </label>
          <label>
            Right: <Input value="CssMarginRight" /> px
          </label>
          <label>
            Bottom <Input value="CssMarginBottom" /> px
          </label>
          <label>
            Left: <Input value="CssMarginLeft" /> px
          </label>
        </fieldset>
      </>
    )}
  </div>
);
export default CssPanel;

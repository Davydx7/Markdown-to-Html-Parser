import { useContext, useState } from 'react';
import { DataContext } from '../../store/DataContext';
import './relativePanel.scss';

const RelativePanel: React.FC = () => {
  const { data, setValue } = useContext(DataContext)!;
  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
  //   setData({ ...data, xMin: +e.currentTarget.value });

  return (
    <div className="relativePanel">
      <fieldset className="anchor">
        <legend>. Anchors :</legend>
        <strong>X</strong>
        <strong>Y</strong>
        <span>%</span>
        <input
          id="xMin"
          type="number"
          onChange={setValue}
          value={data.xMin}
          // min={0}
          // max={100}
        />
        <span>-- min --</span>
        <input id="yMin" type="number" value={data.yMin} onChange={setValue} min={0} max={100} />
        {/*
        <span>%</span>
        <span>%</span>
        <input id="xMax" type="number" defaultValue={75} min={0} max={100} />
        <span>-- max --</span>
        <input id="yMax" type="number" defaultValue={75} min={0} max={100} />
        <span>%</span> */}
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

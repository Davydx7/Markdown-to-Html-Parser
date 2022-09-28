import { useContext } from 'react';
import { DataContext } from '../../store/DataContext';

type ValueType =
  | 'x'
  | 'y'
  | 'xMax'
  | 'xMin'
  | 'yMax'
  | 'yMin'
  | 'xPivot'
  | 'yPivot'
  | 'bottom'
  | 'left'
  | 'right'
  | 'top'
  | 'height'
  | 'width'
  | 'xOffset'
  | 'yOffset'
  | 'CssInsetTop'
  | 'CssInsetRight'
  | 'CssInsetBottom'
  | 'CssInsetLeft'
  | 'CssMarginTop'
  | 'CssMarginRight'
  | 'CssMarginBottom'
  | 'CssMarginLeft'
  | 'CssOffsetLeft'
  | 'CssOffsetTop'
  | 'CssWidth'
  | 'CssHeight';

const Input: React.FC<{ value: ValueType }> = ({ value }) => {
  const { data, setValue } = useContext(DataContext)!;
  return <input id={value} type="number" value={data[value]} onChange={setValue} />;
};
export default Input;

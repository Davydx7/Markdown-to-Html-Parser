import { useContext } from 'react';
import { DataContext } from '../../store/DataContext';

type ValueType =
  | 'x'
  | 'y'
  | 'xMax'
  | 'xMin'
  | 'yMax'
  | 'yMin'
  | 'bottom'
  | 'left'
  | 'right'
  | 'top'
  | 'height'
  | 'width'
  | 'xOffset'
  | 'yOffset';

const Input: React.FC<{ value: ValueType }> = ({ value }) => {
  const { data, setValue } = useContext(DataContext)!;
  return <input id={value} type="number" value={data[value]} onChange={setValue} />;
};
export default Input;

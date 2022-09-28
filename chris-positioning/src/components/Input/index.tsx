import { useContext } from 'react';
import { DataContext, DataStateType } from '../../store/DataContext';

type ValueType = keyof DataStateType;

const Input: React.FC<{ value: ValueType }> = ({ value }) => {
  const { data, setValue } = useContext(DataContext)!;
  return <input id={value} type="number" value={data[value]} onChange={setValue} />;
};
export default Input;

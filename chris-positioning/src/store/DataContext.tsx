import React, { createContext, Dispatch, SetStateAction, useMemo, useState } from 'react';

type DataStateType = {
  xMax: number;
  xMin: number;
  yMax: number;
  yMin: number;

  bottom: number;
  left: number;
  right: number;
  top: number;

  height: number;
  width: number;
  xOffset: number;
  yOffset: number;
};

type DataContextType = {
  data: DataStateType;
  setValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
// type DataContextType = { data: DataStateType; setData: Dispatch<SetStateAction<DataStateType>> };

export const DataContext = createContext<DataContextType | null>(null);
DataContext.displayName = 'DataContext';

const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const dataObj = {
    xMax: 0,
    xMin: 0,
    yMax: 0,
    yMin: 0,

    bottom: 0,
    left: 0,
    right: 0,
    top: 0,

    height: 0,
    width: 0,
    xOffset: 0,
    yOffset: 0
  };

  const [data, setData] = useState<DataStateType>(dataObj);

  const setValue = (e: React.ChangeEvent<HTMLInputElement>) =>
    setData({ ...data, [e.currentTarget.id]: +e.currentTarget.value });

  const store = useMemo(() => ({ data, setValue }), [data]);

  return <DataContext.Provider value={store}>{children}</DataContext.Provider>;
};

export default DataProvider;

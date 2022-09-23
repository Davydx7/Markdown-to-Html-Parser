import React, { createContext, useMemo, useState } from 'react';

type DataStateType = {
  x: number;
  y: number;

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

export const DataContext = createContext<DataContextType | null>(null);
DataContext.displayName = 'DataContext';

const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const dataObj: DataStateType = {
    // absolute anchors
    x: 0,
    y: 0,

    // absolute positioning
    height: 0,
    width: 0,
    xOffset: 0,
    yOffset: 0,

    // relative anchors
    xMax: 0,
    xMin: 0,
    yMax: 0,
    yMin: 0,

    // relative positioning
    bottom: 0,
    left: 0,
    right: 0,
    top: 0
  };

  const [data, setData] = useState<DataStateType>(dataObj);

  const store = useMemo(() => {
    const setValue = (e: React.ChangeEvent<HTMLInputElement>) => {
      setData({ ...data, [e.currentTarget.id]: +e.currentTarget.value });
    };

    return { data, setValue };
  }, [data]);

  return <DataContext.Provider value={store}>{children}</DataContext.Provider>;
};

export default DataProvider;

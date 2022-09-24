import React, { createContext, useMemo, useState } from 'react';

type DataStateType = {
  x: number;
  y: number;

  height: number;
  width: number;
  xOffset: number;
  yOffset: number;

  xPivot: number;
  yPivot: number;

  xMax: number;
  xMin: number;
  yMax: number;
  yMin: number;

  bottom: number;
  left: number;
  right: number;
  top: number;
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
    x: 10,
    y: 10,

    // absolute positioning
    height: 100,
    width: 100,
    xOffset: 100,
    yOffset: 100,

    // pivot
    xPivot: 50,
    yPivot: 50,

    // relative anchors
    xMax: 75,
    xMin: 25,
    yMax: 75,
    yMin: 25,

    // relative margins
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

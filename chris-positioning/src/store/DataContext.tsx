import React, { createContext, useMemo, useState } from 'react';

export type DataStateType = {
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

  CssInsetTop: number;
  CssInsetRight: number;
  CssInsetLeft: number;
  CssInsetBottom: number;

  CssMarginTop: number;
  CssMarginRight: number;
  CssMarginLeft: number;
  CssMarginBottom: number;

  CssOffsetLeft: number;
  CssOffsetTop: number;

  CssWidth: number;
  CssHeight: number;
};

type DataContextType = {
  data: DataStateType;
  setValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const DataContext = createContext<DataContextType | null>(null);
DataContext.displayName = 'DataContext';

const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const dataObj: DataStateType = {
    // Unity absolute anchors
    x: 10,
    y: 10,

    // Unity absolute positioning
    height: 100,
    width: 100,
    xOffset: 100,
    yOffset: 100,

    // Unity pivot
    xPivot: 50,
    yPivot: 50,

    // Unity relative anchors
    xMax: 75,
    xMin: 25,
    yMax: 75,
    yMin: 25,

    // Unity relative margins
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,

    // Css relative Insets
    CssInsetTop: 25,
    CssInsetRight: 25,
    CssInsetLeft: 25,
    CssInsetBottom: 25,

    // Css Margins
    CssMarginTop: 0,
    CssMarginRight: 0,
    CssMarginLeft: 0,
    CssMarginBottom: 0,

    // Css Absolute Offsets
    CssOffsetLeft: 100,
    CssOffsetTop: 100,

    // Css Absolute dimensions
    CssWidth: 100,
    CssHeight: 100
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

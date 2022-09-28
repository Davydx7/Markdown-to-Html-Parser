import { DataStateType } from '../store/DataContext';

function cssToUnity(data: DataStateType, isAbsolute: boolean): string {
  const {
    CssInsetTop,
    CssInsetRight,
    CssInsetLeft,
    CssInsetBottom,

    CssMarginTop,
    CssMarginRight,
    CssMarginLeft,
    CssMarginBottom,

    CssOffsetLeft,
    CssOffsetTop,

    CssWidth,
    CssHeight
  } = data;

  const absolute = `ANCHOR:
X: 0%  Y:0%

OFFSET:
X: ${CssOffsetLeft}px  Y: ${CssOffsetTop}px

SIZE:
width: ${CssWidth}px
height: ${CssHeight}px`;

  const relative = `ANCHOR:
xMin: ${CssInsetLeft / 100}
xMax: ${CssInsetRight / 100}
yMin: ${CssInsetTop / 100}
yMax: ${CssInsetBottom / 100}

MARGIN:
Top: ${CssMarginTop}px
Right: ${CssMarginRight}px
Bottom: ${CssMarginBottom}px
Left: ${CssMarginLeft}px`;

  return isAbsolute ? absolute : relative;
}

export default cssToUnity;

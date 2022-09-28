import { DataStateType } from '../store/DataContext';

function unityToCss(data: DataStateType, isAbsolute: boolean): string {
  const {
    x,
    y,

    height,
    width,
    xOffset,
    yOffset,

    xPivot,
    yPivot,

    xMax,
    xMin,
    yMax,
    yMin,

    bottom,
    left,
    right,
    top
  } = data;

  const absolute = `position: absolute;

left: calc(${x}% + ${xOffset}px);
top: calc(${y}% + ${yOffset}px);

height: ${height}px;
width: ${width}px;

translate: ${-xPivot}%, ${-yPivot}%;
`;

  const relative = `position: absolute;
left: ${xMin}%;
right: ${100 - xMax}%;
top: ${yMin}%;
bottom: ${100 - yMax}%;

margin-left: ${left}px;
margin-right: ${right}px;
margin-top: ${top}px;
margin-bottom: ${bottom}px;`;

  return isAbsolute ? absolute : relative;
}

export default unityToCss;

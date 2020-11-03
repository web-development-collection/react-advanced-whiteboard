import React, {FC, useEffect, useRef} from 'react';
import {itemBoundingMap} from "../../../mappings/items.map";


interface Props {
  points: Array<[number, number]>,
}


// interface LineData {
//   points: Array<[number, number]>,
//   boundingRect: {
//     x: number,
//     y: number,
//     width: number,
//     height: number,
//   }
// }



export const LineItem: FC<Props> = (props: Props) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const {points, ...rest} = props;

  const {x, y, width, height} = itemBoundingMap["line"]({ points });

  useEffect(() => {
    const canvas = canvasRef.current!;
    canvas.height = canvas.clientHeight;
    canvas.width = canvas.clientWidth;

    const context = canvas.getContext('2d')!;

    context?.beginPath();

    for (let i = 0; i < points.length - 1; i++) {
      let [cX, cY] = points[i];
      let [nX, nY] = points[i + 1];

      context?.moveTo(cX - x, cY - y);
      context?.lineTo(nX - x, nY - y);
    }

    context?.stroke();

  }, [points, x, y]);


  return <canvas
    ref={canvasRef}
    className="LineItem"
    style={{
      position: 'absolute',
      // backgroundColor: "rgb(145,176,255, 0.1)",
      top: y,
      left: x,
      width: width,
      height: height,
    }}
    {...rest}/>;
};

export default LineItem;

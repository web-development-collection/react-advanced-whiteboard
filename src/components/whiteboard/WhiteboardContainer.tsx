import React, {FC, useRef} from 'react';
import useMousePosition from "../../hooks/useMousePosition";


interface Props {}


export const WhiteboardContainer: FC<Props> = (props: Props) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { x, y } = useMousePosition(ref);

  console.log(x, y);

  return <div ref={ref} className="WhiteboardContainer" {...props}/>;
};

export default WhiteboardContainer;

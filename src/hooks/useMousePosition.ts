import {RefObject, useEffect, useState} from "react";


export const useMousePosition = (ref: RefObject<any>) => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    const element = ref.current! as HTMLElement;

    element.addEventListener('mousemove', e => {
      setX(e.offsetX);
      setY(e.offsetY);
    });
  }, [ref]);

  return { x, y };
}

export default useMousePosition;
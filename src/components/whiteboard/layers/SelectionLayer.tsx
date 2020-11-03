import React, {FC, useRef, useState} from 'react';
import {constSelector, useRecoilValue} from "recoil";
import {
  useUpdatePositionOfItem,
  whiteboardItemBoundsState,
} from "../../../store/whiteboard/items.store";



const SelectionLayer: FC = () => {
  const layerRef = useRef<HTMLDivElement | null>(null);
  const updateItem = useUpdatePositionOfItem();


  const inBounds = (bounds: { x: number, y: number, width: number, height: number }, point: { x: number, y: number }) => {
    return point.x >= bounds.x &&
      point.x <= bounds.x + bounds.width &&
      point.y >= bounds.y &&
      point.y <= bounds.y + bounds.height;
  }


  let lastMouseDragPosition = {x: 0, y: 0};
  let mouseDragOffset = {x: 0, y: 0};
  let initialMove = true;

  const [isMouseDown, setMouseDown] = useState(false);
  const [idsInBound, setIdsInBound] = useState<number[]>([]);
  const itemBounds = useRecoilValue(isMouseDown ? constSelector(null) : whiteboardItemBoundsState);


  const onMouseDown = (event: any) => {
    const {clientX: x, clientY: y} = event;
    setMouseDown(true);

    // Which items should we move?
    if (itemBounds === null)
      return;

    itemBounds.forEach(itemBoundWithId => {
      const [itemBound, id] = itemBoundWithId;

      if (inBounds(itemBound, {x, y})) {
        setIdsInBound(ids => [...ids, id]);
      }
    });
  }

  const onMouseMove = (event: any) => {
    if (isMouseDown) {
      const {clientX: x, clientY: y} = event;
      const {x: lX, y: lY} = lastMouseDragPosition;
      mouseDragOffset = {x: x - lX, y: y - lY};

      if (initialMove) {
        mouseDragOffset = {x: 0, y: 0};
        initialMove = false;
      }

      onMouseDrag(mouseDragOffset);

      lastMouseDragPosition = {x, y};
    }
  }

  const onMouseDrag = ({x, y}: { x: number, y: number }) => {
    idsInBound.forEach(itemId => {
      updateItem(itemId, x, y);
    });
  }

  const onMouseUp = () => {
    setMouseDown(false);
    onMouseDragEnd();
  }

  const onMouseDragEnd = () => {
    setIdsInBound(() => []);
  }


  console.log("render");

  return <div
    ref={layerRef}
    className="SelectionLayer ActionLayer"
    onMouseDown={onMouseDown}
    onMouseMove={onMouseMove}
    onMouseUp={onMouseUp}
  />;
};

export default SelectionLayer;

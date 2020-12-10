import React, {FC, useEffect} from 'react';
import {useRecoilValue} from "recoil";
import {
  defaultWhiteboardItems, selectedWhiteboardItemsState,
  useInsertWhiteboardItem,
  whiteboardItemIdsState
} from "../../store/whiteboard/items.store";
import WhiteboardItem from "./items/WhiteboardItem";
import WhiteboardActionLayer from "./layers/WhiteboardLayer";


export const WhiteboardContainer: FC<any> = (props: any) => {
  const whiteboardItems = useRecoilValue(whiteboardItemIdsState);
  const whiteboardSelectedItems = useRecoilValue(selectedWhiteboardItemsState);
  const insertWhiteboardItem = useInsertWhiteboardItem();

  // TODO: Remove later
  useEffect(() => {

    for (let i = 0; i < 100; i++) {

      const points = [];

      let numOfPoints = Math.floor(Math.random() * 41);

      let x = Math.floor(Math.random() * 600) + 80;
      let y = Math.floor(Math.random() * 900);

      for (let j = 0; j < numOfPoints; j++) {
        console.log("#");
        points.push([x += Math.floor(Math.random() * 50) - 25, y += Math.floor(Math.random() * 50) - 25]);
      }

      insertWhiteboardItem(i, {
        id: i,
        type: 'line',
        data: {
          points,
        }
      });
    }

    // insertWhiteboardItem(0, defaultWhiteboardItems[0]);
  }, []);


  const renderSelectedItems = () => {
    return whiteboardSelectedItems.map((itemId: any) => {
      return <WhiteboardItem key={itemId} id={itemId}/>
    });
  }

  const renderActionLayer = () => {
    return <WhiteboardActionLayer />;
  }

  const renderNonSelectedItems = () => {
    return whiteboardItems.map((itemId: any) => {
      return <WhiteboardItem key={itemId} id={itemId}/>
    });
  }


  return <div className="WhiteboardContainer" {...props}>
    {renderNonSelectedItems()}

    {renderActionLayer()}

    {renderSelectedItems()}
  </div>;
};

export default WhiteboardContainer;

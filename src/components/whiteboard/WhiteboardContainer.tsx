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
    insertWhiteboardItem(1, defaultWhiteboardItems[1]);
    insertWhiteboardItem(0, defaultWhiteboardItems[0]);
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

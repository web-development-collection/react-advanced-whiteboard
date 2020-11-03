import React, { FunctionComponent as FC } from 'react';
import {useRecoilValue} from "recoil";
import {whiteboardItemState} from "../../../store/whiteboard/items.store";
import {itemMapping} from "../../../mappings/items.map";


interface Props {
  id: number,
}


const WhiteboardItem: FC<Props> = ({ id }: Props) => {
  const { type, data } = useRecoilValue(whiteboardItemState(id));
  const Element = (itemMapping as any)[type];

  return <Element {...data} />;
};

export default WhiteboardItem;

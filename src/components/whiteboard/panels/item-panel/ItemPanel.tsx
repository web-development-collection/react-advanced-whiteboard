import React, { FC } from 'react';
import ItemButton from "./ItemButton";
import {useSetRecoilState} from "recoil";
import {selectedLayerState} from "../../../../store/whiteboard/layers.store";


interface Props {}


export const ItemPanel: FC<Props> = (props: Props) => {

  const setSelectedLayer = useSetRecoilState(selectedLayerState);

  return <div className="ItemPanel" {...props}>
    <ItemButton children={"Sel"} onClick={() => setSelectedLayer("selection")} />
    <ItemButton children={"Pen"} onClick={() => setSelectedLayer("none")} />
    <ItemButton children={"Txt"} onClick={() => setSelectedLayer("none")} />
  </div>;
};

export default ItemPanel;

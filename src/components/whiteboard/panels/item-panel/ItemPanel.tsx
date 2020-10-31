import React, { FC } from 'react';
import ItemButton from "./ItemButton";


interface Props {}


export const ItemPanel: FC<Props> = (props: Props) => {

  return <div className="ItemPanel" {...props}>
    <ItemButton children={"Sel"} />
    <ItemButton children={"Pen"} />
    <ItemButton children={"Txt"} />
  </div>;
};

export default ItemPanel;

import React, { FC } from 'react';
import "../../css/Whiteboard.css"
import WhiteboardContainer from "./WhiteboardContainer";
import ItemPanel from "./panels/item-panel/ItemPanel";


interface Props {}


export const Whiteboard: FC<Props> = (props: Props) => {

  return <div className="Whiteboard" {...props}>

    {/*<div className="TopPanel"/>*/}
    <ItemPanel/>
    <WhiteboardContainer />

  </div>;
};

export default Whiteboard;

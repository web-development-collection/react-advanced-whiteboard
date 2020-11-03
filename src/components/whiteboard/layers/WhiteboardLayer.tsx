import React, { FunctionComponent as FC } from 'react';
import {useRecoilValue} from "recoil";
import {selectedLayerState} from "../../../store/whiteboard/layers.store";
import {layerMapping} from "../../../mappings/layers.map";


interface Props {}


const WhiteboardLayer: FC<Props> = (props: Props) => {
  const selectedLayer = useRecoilValue(selectedLayerState);

  if (selectedLayer === 'none')
    return null;

  const Layer = (layerMapping as any)[selectedLayer];
  return <Layer/>;
};

export default WhiteboardLayer;

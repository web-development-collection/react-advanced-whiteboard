import React, {FC} from 'react';
import Whiteboard from "./components/whiteboard/Whiteboard";
import {RecoilRoot} from "recoil";


const App: FC = () => {

  return <RecoilRoot>
    <Whiteboard />
  </RecoilRoot>;
}

export default App;

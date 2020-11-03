import {atom, atomFamily, selector, useRecoilCallback, useRecoilState, useRecoilValue} from "recoil";
import {itemBoundingMap} from "../../mappings/items.map";


export const defaultWhiteboardItems = [
  {
    id: 0,
    type: 'line',
    data: {
      points: [[10, 10], [100, 150], [200, 30]],
    }
  },
  {
    id: 1,
    type: 'text',
    data: {
      x: 500,
      y: 500,
      text: "Hallo dit is een test",
    }
  },
];


export const whiteboardItemIdsState = atom<Array<number>>({
  key: 'whiteboardItemIdsState',
  default: []
});


export const whiteboardItemState = atomFamily<any, number>({
  key: 'whiteboardItemState',
  default: {
    type: 'text',
    data: {}
  }
});

// export const whiteboardItemsState = selector({
//   key: 'whiteboardItemsState',
//   get: ({get}) => {
//     return get(whiteboardItemIdsState).map(itemId => get(whiteboardItemState(itemId)));
//   }
// });

export const whiteboardItemBoundsState = selector({
  key: 'whiteboardItemBoundsState',
  get: ({get}) => {
    return get(whiteboardItemIdsState).map(itemId => {
      const {type, data} = get(whiteboardItemState(itemId));
      return [(itemBoundingMap as any)[type](data), itemId];
    });
  }
})

export const useInsertWhiteboardItem = () => {
  const [whiteboardItems, setWhiteboardItems] = useRecoilState(whiteboardItemIdsState);

  return useRecoilCallback(({set}) => {
    return (id: number, data: any) => {
      setWhiteboardItems(items => [...items, id]);
      set(whiteboardItemState(id), data);
    }
  }, [whiteboardItems]);
}


export const useUpdatePositionOfItem = () => {
  const [whiteboardItems] = useRecoilValue(whiteboardItemIdsState);

  return useRecoilCallback(({set}) => {
    return (id: number, x: number, y: number) => {
      set(whiteboardItemState(id), (item => {
        const {points} = item.data;
        const updatedPoints = points.map((point: [number, number]) => {
          return [x + point[0], y + point[1]];
        });

        return {
          ...item,
          data: {
            points: updatedPoints,
          }
        }
      }));
    }
  }, [whiteboardItems]);
}


export const selectedWhiteboardItemsState = atom<Array<number>>({
  key: 'selectedWhiteboardItemsState',
  default: [],
});

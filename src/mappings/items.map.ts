import TextItem from "../components/whiteboard/items/TextItem";
import LineItem from "../components/whiteboard/items/LineItem";


export const itemMapping = {
  "text": TextItem,
  "line": LineItem,
}


export const itemBoundingMap = {
  "text": (data: any): { x: number, y: number, width: number, height: number } => {
    return {x: 0, y: 0, width: 0, height: 0};
  },
  "line": (data: any): { x: number, y: number, width: number, height: number } => {
    const {points} = data;

    if (points.length <= 0)
      return {x: 0, y: 0, width: 0, height: 0};

    let minX = points[0][0];
    let minY = points[0][1];
    let maxX = points[0][0];
    let maxY = points[0][1];

    points.forEach(([x, y]: [number, number]) => {
      console.log("$");

      if (minX > x) minX = x;
      else if (maxX < x) maxX = x;

      if (minY > y) minY = y;
      else if (maxY < y) maxY = y;
    });

    return {x: minX, y: minY, width: maxX - minX, height: maxY - minY};
  }
}
import React, {FC} from 'react';


interface Props {
  x: number,
  y: number,
  text: string,
}


export const TextItem: FC<Props> = (props: Props) => {
  const { x, y, text, ...rest} = props;

  return <textarea
    defaultValue={text}
    className="TextItem"
    style={{
      position: "absolute",
      backgroundColor: "rgb(145,176,255, 0.1)",
      border: "none",
      overflow: "hidden",
      top: y,
      left: x,
    }}
    {...rest}/>;
};

export default TextItem;

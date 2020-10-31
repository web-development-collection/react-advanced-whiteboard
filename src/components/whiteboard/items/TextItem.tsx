import React, { FC } from 'react';


interface Props {}


export const TextItem: FC<Props> = (props: Props) => {

  return <div className="TextItem" {...props}/>;
};

export default TextItem;

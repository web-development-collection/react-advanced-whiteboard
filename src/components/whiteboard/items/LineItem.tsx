import React, { FC } from 'react';


interface Props {}


export const LineItem: FC<Props> = (props: Props) => {

  return <div className="LineItem" {...props}/>;
};

export default LineItem;

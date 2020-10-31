import React, { FC } from 'react';


interface Props {}


export const ItemButton: FC<Props> = (props: Props) => {

  return <div className="ItemButton" {...props}/>;
};

export default ItemButton;

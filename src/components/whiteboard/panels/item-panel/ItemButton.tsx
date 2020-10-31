import React, { FC } from 'react';


interface Props extends React.HTMLAttributes<HTMLDivElement> {}


export const ItemButton: FC<Props> = (props: Props) => {

  return <div className="ItemButton" {...props}/>;
};

export default ItemButton;

import React from 'react';

interface Props {
  orderNumber: string | number;
  title?: string;
  id: number;
  onItemClick?(id: number): void;
}

const NoticeListItem = ({ orderNumber, title, id, onItemClick }: Props) => {
  return (
    <div onClick={() => (onItemClick ? onItemClick(id) : null)}>
      <p>{orderNumber}</p>
      <p>{title}</p>
    </div>
  );
};

export default NoticeListItem;

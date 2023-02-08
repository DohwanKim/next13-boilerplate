import React from 'react';

interface Props {
  title: string;
  type: number;
}

export default function HeaderTag({ title, type = 1 }: Props) {
  return React.createElement(`h${type}`, {}, title);
}

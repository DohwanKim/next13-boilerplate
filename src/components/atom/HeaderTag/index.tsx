import React from 'react';

type headerLevel = 1 | 2 | 3 | 4 | 5 | 6;

interface Props {
  title?: string | undefined;
  level?: headerLevel;
}

export default function HeaderTag({ title, level = 1 }: Props) {
  return React.createElement(`h${level}`, {}, title || '');
}

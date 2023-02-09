import { ReactNode } from 'react';

interface Props {
  render: ReactNode;
}

const Notice = ({ render }: Props) => {
  return <>{render}</>;
};

export default Notice;

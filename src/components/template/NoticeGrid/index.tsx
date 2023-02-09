import HeaderTag from '@/components/atom/HeaderTag';
import { createContext, ReactNode, useState } from 'react';
import SelectedNotice from '@/components/organism/SelectedNotice';
import Notice from '@/components/organism/Notice';

interface Props {
  children: ReactNode;
  text?: string;
}

export const { Provider } = createContext({});

const ProductGrid = ({ children }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return <Provider value={selectedIndex}>{children}</Provider>;
};

ProductGrid.HeaderTag = HeaderTag;
ProductGrid.SelectedNotice = SelectedNotice;
ProductGrid.Notice = Notice;

export default ProductGrid;

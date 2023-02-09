import HeaderTag from '@/components/atom/HeaderTag';
import { ReactNode } from 'react';
import SelectedNotice from '@/components/organism/SelectedNotice';
import Notice from '@/components/organism/Notice';

interface Props {
  children: ReactNode;
  text?: string;
}

const ProductGrid = ({ children }: Props) => {
  return <>{children}</>;
};

ProductGrid.HeaderTag = HeaderTag;
ProductGrid.SelectedNotice = SelectedNotice;
ProductGrid.Notice = Notice;

export default ProductGrid;

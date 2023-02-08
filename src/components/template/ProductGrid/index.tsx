import HeaderTag from '@/components/atom/HeaderTag';
import { createContext, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  text?: string;
}

export const IndexContext = createContext({});

const ProductGrid = ({ children }: Props) => {
  return (
    <IndexContext.Provider value={{}}>
      {children}
      <div>
        <div>{/*<p>{t('allCount')}: 0</p>*/}</div>
        <div>공지사항 리스트</div>
      </div>
    </IndexContext.Provider>
  );
};

ProductGrid.HeaderTag = HeaderTag;

export default ProductGrid;

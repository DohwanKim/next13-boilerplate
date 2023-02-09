import HeaderTag from '@/components/atom/HeaderTag';
import SubText from '@/components/atom/SubText';
import PostContent from '@/components/atom/PostContent';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const SelectedNotice = ({ children }: Props) => {
  return <>{children}</>;
};

SelectedNotice.Title = HeaderTag;
SelectedNotice.SubText = SubText;
SelectedNotice.PostContent = PostContent;

export default SelectedNotice;

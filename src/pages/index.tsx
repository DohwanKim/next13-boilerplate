import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { useQuery } from '@tanstack/react-query';
import axiosClient from '@/utils/axiosInstance';
import UserLayout from '@/layouts/UserLayout';
import NoticeGrid from '@/components/template/NoticeGrid';
import Notice from '@/components/organism/Notice';
import NoticeListItem from '@/components/molecule/NoticeListItem';
import { NoticeItemType } from '@/types/notice';
import React, { useEffect, useState } from 'react';

export async function getStaticProps({ locale }: never) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['notice'])),
    },
  };
}

export default function Home() {
  const { data } = useQuery(['notice'], () =>
    axiosClient.get('/user/events?page=0&size=10'),
  );
  const [selectedNotice, setSelectedNotice] = useState<NoticeItemType | null>(
    null,
  );
  const { t } = useTranslation('notice');
  const onNoticeItemHandler = (id: number) => {
    const targetNoticeData =
      data?.data.content.find((item: NoticeItemType) => item.id === id) || null;

    setSelectedNotice(targetNoticeData);
  };

  useEffect(() => {
    setSelectedNotice(data?.data.content[0]);
  }, [data?.data.content]);

  return (
    <UserLayout>
      <h1>기초 Compound Pattern 예시 페이지</h1>
      <NoticeGrid>
        <NoticeGrid.HeaderTag title={t('title') || ''} type={1} />
        <NoticeGrid.SelectedNotice>
          <NoticeGrid.SelectedNotice.Title
            title={selectedNotice?.title || ''}
            type={2}
          />
          <NoticeGrid.SelectedNotice.SubText
            text={selectedNotice?.startDate || '0'}
          />
          <NoticeGrid.SelectedNotice.PostContent
            content={`${selectedNotice?.id}`}
          />
        </NoticeGrid.SelectedNotice>
      </NoticeGrid>
      <div>------------</div>
      <Notice
        render={
          data
            ? data?.data.content.map((item: NoticeItemType, index: number) => (
                <NoticeListItem
                  key={index}
                  orderNumber={1}
                  title={item.title}
                  id={item.id}
                  onItemClick={onNoticeItemHandler}
                />
              ))
            : '없는데요'
        }
      />
    </UserLayout>
  );
}

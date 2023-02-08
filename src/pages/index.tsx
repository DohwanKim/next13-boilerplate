import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { useQuery } from '@tanstack/react-query';
import axiosClient from '@/utils/axiosInstance';
import UserLayout from '@/layouts/UserLayout';

export async function getStaticProps({ locale }: never) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['notice'])),
    },
  };
}

export default function Home() {
  const { data } = useQuery(['test'], () =>
    axiosClient.get('/user/events?page=0&size=10'),
  );
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t } = useTranslation('notice');

  console.log(data?.data.content[0]);

  return (
    <UserLayout>
      <div>
        <h1>{t('title')}</h1>
        <div>
          <h2>가장 최근 공지사항 요약</h2>
          <div>가장 최근 공지사항 정보</div>
        </div>
        <div>
          {/*공지사항 페이지네이션*/}
          1번 형태
          <div>
            <div>총 아이템 갯수: 000</div>
            <div>
              <div>공지사항 아이템1</div>
              <div>공지사항 아이템1</div>
              <div>공지사항 아이템1</div>
              <div>공지사항 아이템1</div>
              <div>공지사항 아이템1</div>
            </div>
            <div>페이지네이션</div>
          </div>
          2번 형태
          <div>
            <div>총 아이템 갯수: 000</div>
            <div>
              <div>공지사항 아이템1</div>
              <div>공지사항 아이템1</div>
              <div>공지사항 아이템1</div>
              <div>공지사항 아이템1</div>
              <div>공지사항 아이템1</div>
            </div>
            <div>페이지네이션</div>
          </div>
        </div>
      </div>
    </UserLayout>
  );
}

import Head from 'next/head';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}
export default function UserLayout({ children }: Props) {
  return (
    <>
      <Head>
        <title>Next13 boilerplate example</title>
        <meta name="description" content="next13 boilerplate example" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{children}</main>
    </>
  );
}

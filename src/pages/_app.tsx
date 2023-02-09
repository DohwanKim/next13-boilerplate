import '@/assets/style/globals.css';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';
import { appWithTranslation } from 'next-i18next';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import * as process from 'process';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        {process.env.NEXT_PUBLIC_IS_DEV ? <ReactQueryDevtools /> : null}
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default appWithTranslation(MyApp);

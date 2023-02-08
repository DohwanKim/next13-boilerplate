import Link from 'next/link';

export default function LangChangeTab() {
  return (
    <>
      <div>
        <Link href="/" locale="ko">
          한국어
        </Link>
        <Link href="/" locale="en">
          영어
        </Link>
      </div>
      <style jsx>{`
        div a {
          display: inline-flex;
          width: 100px;
          background-color: #333333;
        }
      `}</style>
    </>
  );
}

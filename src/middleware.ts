import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import axiosClient from "@/utils/axiosInstance";

// 이 함수는 `await`을 사용하는 경우 `async`로 표시될 수 있습니다.
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

// Allow the requests if the following is true...
// 1) if the request is a system request /_next
// 2) if the request is to get the favicon.ico
  const response = NextResponse.next()
  if (pathname.startsWith('/_next') || pathname.startsWith('/favicon.ico')) {
    return NextResponse.next()
  }
  /*const cookieHeader = request.cookies.getAll()
    .map((value) => {
      return `${value.name}=${value.value}`;
    })
    .join(';');
  // fetch('https://stage-api.hd-brandbay.com/api/auth/refresh', {
  fetch('http://localhost/api/auth/refresh', {
    method: 'GET',
    credentials: 'include',
    headers: {
      Cookie:cookieHeader
    },
  }).then(res=>{
    console.log(res.headers);
    console.log(res.status, res.statusText);
    response.cookies.set({
      name: 'myCookieName',
      value: 'some-value'
    })
  })*/

  /*axiosClient.post("/api/test/sign-in?email=jang@spadecompany.kr", null, {
    // axiosClient.post('http://front.hd-brandbay.com/api/test/sign-in?email=jang@spadecompany.kr',null,{
    withCredentials: true
  })
    .then(res => {
      console.log(res);
    });*/
}
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import axiosInstance from "@/utils/axiosInstance";

// 이 함수는 `await`을 사용하는 경우 `async`로 표시될 수 있습니다.
export async function middleware(request: NextRequest) {
  const { pathname, origin } = request.nextUrl;

// Allow the requests if the following is true...
// 1) if the request is a system request /_next
// 2) if the request is to get the favicon.ico
  const response = NextResponse.next();
  if (pathname.startsWith("/_next") || pathname.startsWith("/favicon.ico")) {
    return NextResponse.next();
  }
  const cookieHeader = request.cookies.getAll()
    .map((value) => {
      return `${value.name}=${value.value}`;
    })
    .join(";");

  const res = await fetch(origin + "/api/auth/refresh", {
    method: "GET",
    credentials: "include",
    headers: {
      Cookie: cookieHeader
    }
  });

  if (res.ok) {
    const setCookies = res.headers.get("set-cookie");
    console.log(res.status, res.statusText);
    if (setCookies) {
      response.headers.set("set-cookie", setCookies);
    }
    /*response.cookies.set({
      name: 'myCookieName',
      value: 'some-value',
      httpOnly: true,
    })*/
  }

  return response;

  /*axiosClient.post("/api/test/sign-in?email=jang@spadecompany.kr", null, {
    // axiosClient.post('http://front.hd-brandbay.com/api/test/sign-in?email=jang@spadecompany.kr',null,{
    withCredentials: true
  })
    .then(res => {
      console.log(res);
    });*/
}
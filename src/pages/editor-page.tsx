import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import axiosClient from "@/utils/axiosInstance";
import { GetServerSideProps } from "next";

const Cookies = require("cookies");

const Editor = dynamic(() => import("@/components/organism/Editor"), {
  ssr: false
});

export default function Home() {
  const [editorLoaded, setEditorLoaded] = useState(false);
  const [testData, setTestData] = useState({ content: "" });

  useEffect(() => {
    setEditorLoaded(true);
  }, []);

  function login() {
    axiosClient.post("/api/test/sign-in?email=jang@spadecompany.kr", null, {
      // axiosClient.post('https://stage-api.hd-brandbay.com/api/test/sign-in?email=jang@spadecompany.kr',null,{
      withCredentials: true
    })
      .then(res => {
        console.log(res);
      });
  }

  async function refresh() {
    // const res = await axiosClient("/api/auth/refresh");
    // console.log(res.headers);

    fetch("/api/auth/refresh", {
      method: "GET",
      credentials: "include"
    }).then(response => {
      console.log(response.headers);
      console.log(response.status, response.statusText);
    });
  }

  return (
    <div className="App">
      <div>
        <button onClick={login}>Login</button>
      </div>
      <div>
        <button onClick={refresh}>refresh</button>
      </div>
      <h1>CKEditor 5</h1>
      <Editor
        isEditorLoaded={editorLoaded}
        initValue={""}
        onChange={(data) => {
          setTestData({ ...testData, content: data });
        }}
      />
    </div>
  );
}


export const getServerSideProps: GetServerSideProps = async (context) => {
  const cookieHeader = Object.entries(context.req.cookies)
    .map(([key, value]) => {
      return `${key}=${value}`;
    })
    .join(";");
  axiosClient("/api/auth/refresh", {
    method: "GET",
    withCredentials: true,
    headers: {
      Cookie: cookieHeader
    }
  }).then(res => {
    console.log(res.status, res.statusText);
    const cookies = new Cookies(res.request, res);
    console.log(cookies);
    // const cookies = new Cookies(context.req, context.res);
    /*if (res.headers["set-cookie"]) {
      context.res.setHeader("set-cookie", res.headers["set-cookie"].join(","));
    }*/
  }).catch(err => {
  });

  return {
    props: {}
  };
};
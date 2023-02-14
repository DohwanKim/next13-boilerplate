## 프로젝트 개요
- 프로젝트명: [기입]
- 문서: [기입]
### 참여자
- [기입]

## 프로젝트 환경
### 개발 스택
- Node/NPM(LTS;23.01): 18.13.0/8.19.3
- Next.js 13
    - Typescript
    - 'src/' directory
    - import alias: '@'
    - TanStack React Query
    - Axios
    - React Recoil
    - Markup styling
      - Normalize.css 
      - CSS post Module
    - lint
      - eslint
      - Prettier
      - husky(+ commit lint)
    - Next.js set
      - env set
      - proxy set
- Bundler
    - Webpack 5 (React 18 내장)
- Other set
    - 다국어 세팅 (한/영)
      - next-i18next
    - Dev port: 8000
    - 에디터
      - CKEditor5 custom build (/custom_modules)

### 개발 환경
- Target Device
    - OS
      - Window 8, 10, 11
      - macOS Catalina
    - Browser (■ IE 브라우저로 연결될 경우 MS Edge 브라우저로 재연결)
      - Edge 88.0.705.50(Anaheim) 이상 (~2019 Spartan 제외)
      - Google Chrome 88.0.4324 이상
      - Mozilla Firefox 85.0.2 이상
      - Apple Safari 14.12 (611.3.10.1.5) 이상
- Edit Tool: JetBrains IntelliJ 2022.3.1 UE
- API Tool
    - Swagger (Viewer: Redoc;Standalone)
- Issue tracking
    - JetBrains Youtrack
- Notification
    - Slack

### 프로젝트 실행
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

### 개발 패턴
- Git Flow
  - Trunk-based git flow 사용 할것으로 보이나 확실한 건 미정 ([참고1](https://tech.mfort.co.kr/blog/2022-08-05-trunk-based-development/), [참고2](https://www.youtube.com/watch?v=EV3FZ3cWBp8))
- Component Structure
  - 컴포넌트 설계 단계부터 헤딩 중. 뷰에서 썼던 패턴으로 이상으로 사용하고 싶은 개인 기준에 맞출려면 생각 보다 딥하게 준비해야할듯. 
  - Atomic Design based
          ([Atomic Design Pattern (feat. React, Vue, Flutter)](https://bgradecoding.tistory.com/18))
  - 참고 하여 준비 중 인 것들
    - [compound component pattern + render prop](https://velog.io/@yesbb/%EA%B0%9D%EC%B2%B4%EC%A7%80%ED%96%A5%EC%9D%98-%EA%B4%80%EC%A0%90%EC%9C%BC%EB%A1%9C-%EB%B0%94%EB%9D%BC%EB%B3%B8-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EA%B3%A0%EA%B8%89-%ED%8C%A8%ED%84%B4-Compound-component-Render-props)
    - [Toss youtube SLASH 22](https://www.youtube.com/watch?v=fR8tsJ2r7Eg)

### 잡담
Nuxt.js(2) -> Next.js(13) 이주 중...<br>
분명 비슷한 세팅으로 옮기는 중인데 세팅 전 구울게 너무 많아서 고통 받는 중...

## 라이센스 <hr>
- MIT License
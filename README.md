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
      - tailwindcss
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
    - 기타플러그인
      - Day.js: 날짜관리
      - React-datepicker: 날짜 선택
      - react-transition-group: ng-animate 패턴 활용을 위한 라이브러리

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
- Document
  - Notion

### 프로젝트 실행
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

### 페이지 정보
<code>/</code>: Compound Pattern 예시 페이지<br>
<code>/editor-page</code>: CKEditor5 예시 페이지<br>
<code>/recoil-ex</code>: Recoil 예시 페이지

### 개발 패턴
- Git Flow
  - Trunk-based git flow 사용 할것으로 보이나 확실한 건 미정 ([참고1](https://tech.mfort.co.kr/blog/2022-08-05-trunk-based-development/), [참고2](https://www.youtube.com/watch?v=EV3FZ3cWBp8))
- Component Structure 
  - Atomic Design
  - compound component
  - 참고 문서
    - https://bgradecoding.tistory.com/18 
    - https://yozm.wishket.com/magazine/detail/1531/ 
    - https://speakerdeck.com/feel5ny/atomig-paeteoneuro-dijaineowa-hyeobeobhagi 
    - [compound component pattern + render prop](https://velog.io/@yesbb/%EA%B0%9D%EC%B2%B4%EC%A7%80%ED%96%A5%EC%9D%98-%EA%B4%80%EC%A0%90%EC%9C%BC%EB%A1%9C-%EB%B0%94%EB%9D%BC%EB%B3%B8-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EA%B3%A0%EA%B8%89-%ED%8C%A8%ED%84%B4-Compound-component-Render-props)
    - [Toss youtube SLASH 22](https://www.youtube.com/watch?v=fR8tsJ2r7Eg)

### 단위 테스트 & 프리뷰
- storybook

### 잡담
Nuxt.js(2) -> Next.js(13) 이주 중...<br>


## 라이센스
- MIT License
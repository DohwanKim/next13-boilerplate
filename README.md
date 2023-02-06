```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```
### 개발 스택

- node/npm(LTS): 18.13.0/8.19.3
- Next.js 13
    - Typescript
    - 'src/' directory
    - import alias: '@'
    - TanStack React Query(+ axios)
    - React Recoil
    - CSS post Module
    - lint
        - eslint
        - Prettier
        - husky
- Bundler
    - Webpack 5 (React 18 내장)
- Other set
    - 다국어 세팅 (한/영)
        - next-i18next
    - Dev port: 8000

### 개발 환경

- Target Device
    - OS
        - Window 8, 10, 11
        - macOS Catalina
    - Browser
        - Edge 88.0.705.50(Anaheim) 이상 (~2019 Spartan 제외)
        - Google Chrome 88.0.4324 이상
        - Mozilla Firefox 85.0.2 이상
        - Apple Safari 14.12 (611.3.10.1.5) 이상

      ■ IE 브라우저로 연결될 경우 Edge 브라우저로 재연결

- JetBrains IntelliJ 2022.3.1 UE
- API Tool
    - Swagger (Viewer: Redoc;Standalone)
- Issue tracking
    - JetBrains Youtrack
- Notification
    - Slack


### 개발 패턴

- git
    - Trunk-based git flow 사용 할것으로 보이나 확실한 건 미정 ([참고1](https://tech.mfort.co.kr/blog/2022-08-05-trunk-based-development/), [참고2](https://www.youtube.com/watch?v=EV3FZ3cWBp8))
- component 구조
    - Atomic Design based
      ([Atomic Design Pattern (feat. React, Vue, Flutter)](https://bgradecoding.tistory.com/18))
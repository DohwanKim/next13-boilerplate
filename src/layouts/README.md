### 레이아웃 폴더가 컴포넌트 폴더에 들어가지 않는 이유
- Nuxt.js의 영향으로 컴포넌트에 포함시키지 않음.
- 컴포넌트는 맞으나 역할 자체가 Atomic pattern의 template의 역할보다 상위 역할을 하고 있음.
- 스켈레톤 그리드 + 스켈레톤 그리드 조합으로 되버리는데 이 자체가 컴포넌트 디자인 패턴과 아예 예외적인 부분이라 생각하여 src 하단에 layouts 폴더를 생성하여 배치 
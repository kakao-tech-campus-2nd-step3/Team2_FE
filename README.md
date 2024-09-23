# Team2_FE

2조 프론트엔드

## review

### 코드 리뷰 받고 싶은 부분

- 안녕하세요! 이번 주 저희 조 FE는 간단한 프로젝트 세팅을 마쳤습니다.
- [프로젝트 구조](#project-structure)가 잘짜였는지 여쭤보고 싶었습니다. 저희가 일반적인 용어를 적절히 사용한 걸까요?
- 사용할 기술 내역입니다.
  - vite
  - emotion style
  - stylebook
  - eslint, prettier
  - reset css, google material icon
- emtion style 관련하여 글로벌 설정을 하였습니다.
- 라우터 페이지를 미리 제작해두었습니다.

### 질문 있어요

- 절대경로를 사용해서 파일을 불러올 수 있게 처리하였는데 문제가 생겼습니다.

  1. ts(2307) 관련해서 오류가 납니다. 관련해서 세팅 파일을 설정하면 해결될까요?
  2. [simple-import-sort(eslint 플러그인)](https://github.com/lydell/eslint-plugin-simple-import-sort)`을 사용하고 있는데, 얘가 절대경로를 사용해 가져온 프로젝트 내 임포트를 패키지 임포트로 분류하는 것 같습니다.

  ```js
  // Side effect imports. (These are not sorted internally.)
  import "./setup";
  import "some-polyfill";
  import "./global.css";

  // Node.js builtins prefixed with `node:`.
  import * as fs from "node:fs";

  // Packages.
  import type A from "an-npm-package";
  import a from "an-npm-package";
  import fs2 from "fs";
  import b from "https://example.com/script.js";

  // Absolute imports and other imports.
  import c from "/";
  import d from "/home/user/foo";
  import Error from "@/components/error.vue";  // 이런 식으로 정렬되기를 기대했습니다..!
  ```

## project structure

```text
ㄴ 📁 assets
ㄴ 📁 components: 전체적으로 쓰이는 컴포넌트
ㄴ 📁 pages
    ㄴ 📁 페이지이름
        ㄴ 📜 index.tsx: 랜더링 될 페이지 컴포넌트
        ㄴ 📁 components: 해당 페이지에서만 사용되는 컴포넌트 모음
        ㄴ 📁 api: 해당 페이지에서만 사용되는 백엔드 상호작용 (fetch 훅 등)
ㄴ 📁 utils: 전체적으로 쓰이는 도구(타입 인터페이스, fetch 인스턴스 등)
  ㄴ 📜 path.ts: 경로 string 모음
ㄴ 📜 App.tsx
```

## convention

- [커밋 컨벤션](https://www.notion.so/a836423c43b94ae8833111fcd0ddeb7e)
- [코딩 컨벤션](https://www.notion.so/9076a9f32a3a4fb0a20e0c41045c9e6f)

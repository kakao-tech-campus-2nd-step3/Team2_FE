# Team2_FE

2조 프론트엔드

## review

### 코드 리뷰 받고 싶은 부분

- 컬럼 상세 페이지를 구현했습니다.
  - 코드 가독성이 괜찮은지 궁금합니다. emotion styled를 써서 나름 괜찮다고 생각하는데, 다른 스타일 라이브러리(tailwind, vanilla extract) 를 쓸때는 어떻게 코드 가독성을 높일 수 있을지도 궁금해요.
- husky, lint staged를 사용한 코드 일관성 유지 설정을 마쳤습니다.

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

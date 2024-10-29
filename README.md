# Team2_FE

2조 프론트엔드

## review

- 상품 상세와 컬럼 리스트 페이지를 추가하였습니다.
- 컬럼 상세 페이지 수정을 했습니다.

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

# Team2_FE

2조 프론트엔드

## review

### 코드 리뷰 받고 싶은 부분

### 질문

- 컬럼 리스트 페이지의 sorting이나, pagination 같이 페이지 전체에 영향을 미치는 상태가 있는 경우, 컴포넌트를 어떻게 나누어 작성해야 할지 고민입니다. 따로 추천하는 컴포넌트 패턴이 있으신가요?
  - 일단 저는 컴포넌트와 그 컴포넌트에서 조작하는 상태를 함께 리턴하는 훅(useSortingBtns 등)을 만들어 page(ColumnList)에서 사용했습니다.
  - 제가 만든 것의 반대도 가능하겠다고 생각했습니다. (ColumnList에서 상태와 상태변경 함수를 만들어 SortingBtns 컴포넌트의 Props로 넣어주기). 그런데 이러면 SortingBtns의 독립성이 없어질 것 같아요.

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

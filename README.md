# clush-homework

## 설명
- React, Ant-Design을 이용하여 제작한 간단한 Todo 앱   

### 실행 방법
```
npm install
npm run start
개발 의존성 설치 후 프로젝트 실행
```

### 주요 컴포넌트
https://github.com/krapli441/homework/blob/main/src/hooks/useTodo.ts   
코드 복잡성을 줄이기 위해 사용자가 작성한 Todo를 로컬 스토리지에 저장 및 삭제하는 로직을 별도의 커스텀 훅으로 분리   

https://github.com/krapli441/homework/tree/main/src/components   
한 개의 컴포넌트 안에 Todo 리스트에 관한 코드를 모두 넣을 수 있었으나 복잡성을 줄이기 위해   
Todo 입력, 생성된 Todo 관리 및 확인에 관한 부분을 세 개의 컴포넌트로 분리   

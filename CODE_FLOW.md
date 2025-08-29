# 코드 기능 흐름도

이 문서는 주요 기능의 데이터 및 제어 흐름을 시각적으로 표현하여 코드의 동작 방식을 쉽게 파악할 수 있도록 돕습니다.

## 흐름 1: 사용자 로그인

```
[사용자]
  |
  v
[Login.vue]
  - 이메일/비밀번호 입력 후 '로그인' 클릭
  |
  v
[Vee-Validate + Zod]
  - 폼 유효성 검증 (auth.schema.ts)
  |
  v (성공 시)
[useAuthStore.login()]
  - Pinia 스토어의 `login` 액션 호출
  - (Mock) 1초 후 사용자 상태(state.user) 및 토큰(state.token) 업데이트
  |
  v
[Vue Router]
  - `router.push('/')`로 Home 페이지 이동 요청
  |
  v
[Router Guard (router/index.ts)]
  - `beforeEach` 실행
  - 이동할 경로(`/`)가 `meta.requiresAuth`인지 확인 (true)
  - `useAuthStore.isLoggedIn`이 true인지 확인 (true)
  |
  v (통과)
[Home.vue]
  - 페이지 렌더링
```

## 흐름 2: Todo 목록 불러오기

```
[Home.vue]
  - 컴포넌트 렌더링 시 `useTodosQuery()` 훅 실행
  |
  v
[TanStack Vue Query]
  - `['todos']` 쿼리 키로 캐시 검색
  |
  v (캐시 없음)
[todo.service.ts -> fetchTodos()]
  - 서비스 함수 호출
  - (Mock) 0.5초 후 가짜 Todo 배열 반환
  |
  v
[TanStack Vue Query]
  - 받아온 데이터를 `['todos']` 키로 캐싱
  - `useTodosQuery()`의 상태 변경 (isLoading: false, isSuccess: true, data: [...])
  |
  v
[Home.vue]
  - 변경된 상태에 따라 UI 자동 리렌더링
  - 로딩 메시지 사라지고 Todo 목록 표시
```

## 흐름 3: Todo 생성하기

```
[사용자]
  |
  v
[CreateTodoForm.vue]
  - 할 일 입력 후 '추가' 버튼 클릭
  |
  v
[Vee-Validate + Zod]
  - 폼 유효성 검증 (todo.schema.ts)
  |
  v (성공 시)
[useCreateTodoMutation.mutate()]
  - `mutate` 함수에 '새로운 할 일' 텍스트 전달
  |
  v
[TanStack Vue Query]
  - `todo.service.ts`의 `createTodo()` 함수 호출
  - (Mock) 0.5초 후 새로운 Todo 객체 생성 및 반환
  |
  v (Mutation 성공 시)
[TanStack Vue Query - onSuccess 콜백]
  - `queryClient.invalidateQueries({ queryKey: ['todos'] })` 실행
  - `['todos']` 쿼리가 '무효화'되었음을 알림
  |
  v
[TanStack Vue Query - 자동 리페치]
  - 무효화된 `['todos']` 쿼리를 자동으로 다시 실행 (위의 "흐름 2" 반복)
  |
  v
[Home.vue]
  - 새로운 Todo가 포함된 목록으로 UI 리렌더링
```

# Vue 3 + TypeScript 실무 프로젝트 학습 가이드

이 문서는 `vue-todo-app` 프로젝트의 구조와 핵심 개념을 설명하여 학습자가 코드를 쉽게 이해하고 실무 기술을 습득할 수 있도록 돕기 위해 작성되었습니다.

## 1. 프로젝트 실행 방법

```bash
# 1. 의존성 설치
npm install

# 2. 개발 서버 실행
npm run dev
```

- **로그인 정보**: 아무 이메일과 비밀번호를 입력해도 로그인됩니다.

## 2. 기술 스택

이 프로젝트는 다음 기술들을 기반으로 합니다.

- **Vue 3**: Composition API와 `<script setup>`을 사용한 최신 Vue 개발 방식
- **TypeScript**: 전체 코드베이스에 정적 타입을 적용하여 안정성 확보
- **Vite**: 빠르고 효율적인 빌드 및 개발 환경
- **Pinia**: Vue의 공식 상태 관리 라이브러리. 사용자 인증 정보(UI 상태) 관리에 사용
- **TanStack Vue Query**: 서버 상태 관리 라이브러리. Todo 데이터(CRUD) 관리에 사용
- **Vue Router**: 페이지 라우팅 및 인증 기반 접근 제어
- **Vee-Validate & Zod**: 폼 유효성 검증을 위한 조합
- **Axios**: HTTP 통신 (이 프로젝트에서는 Mock Service로 대체)

## 3. 프로젝트 구조

`src` 폴더는 기능별로 명확하게 분리되어 있습니다.

- `components`: 여러 페이지에서 재사용되는 작은 UI 조각 (예: `CreateTodoForm.vue`)
- `lib`: 외부 라이브러리 설정 (예: `http.ts` - Axios 인스턴스)
- `pages`: 라우터에 매핑되는 메인 페이지 컴포넌트 (예: `Home.vue`, `Login.vue`)
- `queries`: TanStack Query 훅(Hook) 모음. 서버 데이터 관련 로직을 캡슐화 (예: `todo.queries.ts`)
- `router`: Vue Router 설정. 경로 정의 및 네비게이션 가드 포함
- `schemas`: Zod를 사용한 데이터 유효성 검증 스키마 (예: `auth.schema.ts`)
- `services`: 실제 API 통신을 담당하는 함수 모음 (이 프로젝트에서는 Mock 데이터 제공)
- `stores`: Pinia 스토어. 전역 UI 상태 관리 (예: `auth.ts`)
- `types`: 프로젝트 전반에서 사용되는 TypeScript 타입 정의

## 4. 핵심 개념

### 가. UI 상태 vs 서버 상태

이 프로젝트의 가장 중요한 개념 중 하나는 **상태의 분리**입니다.

- **UI 상태 (Pinia)**: 현재 로그인한 사용자 정보, 테마 설정 등 클라이언트에서만 관리되는 상태. 한 번 로그인하면 앱을 닫기 전까지 유지됩니다.
- **서버 상태 (TanStack Query)**: 데이터베이스에 저장된 데이터 (Todo 목록 등). 다른 사용자에 의해 변경될 수 있고, 최신 상태를 유지하기 위해 주기적인 동기화(re-fetching)가 필요합니다. TanStack Query는 캐싱, 로딩/에러 상태 처리, 자동 갱신 등을 매우 효율적으로 관리해줍니다.

### 나. TanStack Query를 이용한 데이터 흐름

`useQuery`와 `useMutation`은 이 프로젝트의 핵심입니다.

- `useQuery`: 데이터를 **가져올 때** 사용. 로딩/에러 상태, 캐시된 데이터를 자동으로 관리합니다.
- `useMutation`: 데이터를 **생성/수정/삭제할 때** 사용. 성공/실패 시 특정 동작(예: 목록 새로고침)을 쉽게 트리거할 수 있습니다.

### 다. Zod와 Vee-Validate를 이용한 타입-안전 폼

1.  **`schemas`**: `zod`로 데이터의 형태와 규칙(예: `string().email()`)을 정의합니다. 여기서 TypeScript 타입(`LoginInput`)도 자동으로 추론됩니다.
2.  **`pages/components`**: `vee-validate`의 `useForm`에 `zod` 스키마를 넘겨 폼을 생성합니다. 이를 통해 입력값의 타입과 유효성을 동시에 검증하여 매우 안정적인 폼을 만들 수 있습니다.

---

1. 프론트엔드 개발 심화


   * 컴포넌트 설계 및 재사용성: 재사용 가능한 컴포넌트를 효율적으로 설계하고 관리하는 방법 (Atomic Design 등).
   * 성능 최적화: 웹팩(Webpack) 또는 Vite 설정 최적화, 코드 스플리팅, 이미지 최적화, 렌더링 성능 개선 (가상 스크롤, 불필요한 렌더링 방지) 등.
   * 테스팅: 단위 테스트 (Unit Test, Vitest/Jest), 통합 테스트 (Integration Test), E2E 테스트 (End-to-End Test, Cypress/Playwright) 작성 방법. (이 프로젝트에는 테스트 코드가
     포함되어 있지 않습니다.)
   * 접근성 (Accessibility - A11y): 모든 사용자가 웹 애플리케이션을 쉽게 사용할 수 있도록 하는 방법 (시맨틱 HTML, ARIA 속성 등).
   * 국제화 (Internationalization - i18n): 다국어 지원을 위한 구현 방법.
   * 애니메이션/트랜지션: 사용자 경험을 향상시키는 UI 애니메이션 구현.

  2. 백엔드 및 API 연동 심화


   * RESTful API 설계 원칙: 백엔드 API와의 효율적인 통신을 위한 RESTful API의 이해.
   * 인증/인가 (Authentication/Authorization): JWT(JSON Web Token), OAuth 등 실제 서비스에서 사용되는 인증 방식에 대한 이해와 프론트엔드에서의 구현. (이 프로젝트는 목업
     인증을 사용했습니다.)
   * 에러 핸들링: API 통신 중 발생할 수 있는 다양한 에러 상황(네트워크 에러, 서버 에러, 유효성 검사 에러 등)을 사용자에게 친화적으로 처리하는 방법.


  3. 개발 환경 및 협업


   * 버전 관리 시스템 (Git): Git Flow, GitHub Flow 등 팀 협업을 위한 Git 전략.
   * CI/CD (Continuous Integration/Continuous Deployment): 코드 변경 사항이 자동으로 빌드, 테스트, 배포되는 파이프라인에 대한 이해.
   * 번들러/트랜스파일러: Webpack, Babel 등 빌드 도구의 심층적인 이해. (Vite는 이들을 추상화하여 사용하기 편리하게 해줍니다.)
   * 코드 컨벤션 및 린팅: ESLint, Prettier 등을 활용한 코드 품질 관리 및 팀 내 컨벤션 준수. (이 프로젝트에는 .eslintrc.cjs 파일이 포함되어 있습니다.)

  4. 기타 중요한 개념


   * 디자인 패턴: 프론트엔드 개발에서 자주 사용되는 디자인 패턴 (예: Observer, Singleton, Factory) 이해.
   * 클린 코드 및 리팩토링: 가독성 높고 유지보수하기 쉬운 코드를 작성하는 방법.
   * 보안: XSS, CSRF 등 웹 보안 취약점에 대한 이해와 방어 전략.

---
/**
 * 이 파일은 TypeScript 컴파일러를 위한 참조 지시어입니다.
 * 
 * /// <reference types="vite/client" />
 * 
 * 이 지시어는 TypeScript에게 Vite 클라이언트 라이브러리의 타입 정의를 포함하도록 지시합니다.
 * Vite 클라이언트는 다음과 같은 기능을 위한 타입 정보를 제공합니다:
 * 
 * 1. 환경 변수 타입: `import.meta.env` 객체와 그 안의 `VITE_` 접두사가 붙은 사용자 정의 환경 변수들에 대한 타입 정의를 제공합니다.
 *    이를 통해 TypeScript는 코드에서 환경 변수를 사용할 때 자동 완성 및 타입 체크를 할 수 있습니다.
 * 
 * 2. 에셋 import 타입: `.svg`, `.png`, `.jpg` 등과 같은 정적 에셋을 import할 때, TypeScript가 이를 모듈로 인식하고 URL 문자열로 처리하도록 합니다.
 *    예: `import logoUrl from './logo.svg'` 에서 `logoUrl`이 문자열 타입임을 알게 됩니다.
 * 
 * 3. HMR (Hot Module Replacement) API 타입: `import.meta.hot` API에 대한 타입 정보를 제공하여, 개발 중에 모듈이 교체될 때 특정 로직을 실행할 수 있도록 돕습니다.
 * 
 * 간단히 말해, 이 한 줄은 Vite 프로젝트에서 TypeScript를 사용할 때 개발 경험을 향상시키고 타입 안정성을 높여주는 중요한 역할을 합니다.
 * 이 파일은 보통 직접 수정할 필요가 없습니다.
 */
/// <reference types="vite/client" />
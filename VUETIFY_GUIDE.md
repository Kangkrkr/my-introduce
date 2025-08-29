# Vuetify.js 빠른 시작 가이드

이 문서는 현재 프로젝트에서 Vuetify.js를 효과적으로 사용하기 위한 기본 가이드를 제공합니다.

## 1. 소개

Vuetify는 Vue.js를 위한 머티리얼 디자인(Material Design) 컴포넌트 프레임워크입니다. 미리 만들어진 다양한 UI 컴포넌트(버튼, 카드, 폼 등)를 제공하여 아름답고 반응형인 웹 애플리케이션을 빠르게 개발할 수 있도록 돕습니다.

## 2. 프로젝트 설정

Vuetify는 이미 우리 프로젝트에 설치 및 설정되었습니다.
- `main.ts`: Vuetify 플러그인이 Vue 앱에 등록되었습니다.
- `vite.config.ts`: `vite-plugin-vuetify`가 설정되어 컴포넌트를 자동으로 가져올 수 있습니다(Tree-shaking).

## 3. 핵심: `<v-app>` 컴포넌트

**가장 중요한 규칙입니다.** 모든 Vuetify 컴포넌트는 `<v-app>` 컴포넌트 안에서 렌더링되어야 합니다. 일반적으로 프로젝트의 메인 컴포넌트인 `src/App.vue`의 최상단에 `<v-app>`을 배치합니다.

**예시: `src/App.vue`**
```vue
<template>
  <v-app>
    <!-- 여기에 다른 컴포넌트와 라우터 뷰가 위치합니다 -->
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>
```

## 4. 컴포넌트 사용하기

Vuetify 컴포넌트는 템플릿에 바로 사용할 수 있습니다. `vite-plugin-vuetify` 덕분에 별도로 import 할 필요가 없습니다.

**예시: 버튼 사용**
```vue
<template>
  <v-btn color="primary">
    클릭하세요
  </v-btn>
</template>
```
- `v-` 접두사는 Vuetify 컴포넌트를 의미합니다.
- `color="primary"`와 같은 props를 사용하여 컴포넌트의 모양과 동작을 제어할 수 있습니다.

> **참고:** 사용 가능한 모든 컴포넌트와 props는 [Vuetify 공식 문서](https://vuetifyjs.com/en/components/all/)에서 확인할 수 있습니다.

## 5. 레이아웃 시스템

Vuetify는 애플리케이션의 구조를 쉽게 잡을 수 있는 레이아웃 컴포넌트를 제공합니다.

- `<v-app-bar>`: 상단 앱 바 (헤더)
- `<v-navigation-drawer>`: 사이드 네비게이션 메뉴
- `<v-main>`: 메인 콘텐츠 영역
- `<v-footer>`: 하단 푸터

**예시: 기본 레이아웃**
```vue
// src/App.vue
<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title>My App</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container>
        <p>여기에 페이지 콘텐츠가 표시됩니다.</p>
      </v-container>
    </v-main>

    <v-footer app>
      <span>&copy; 2025</span>
    </v-footer>
  </v-app>
</template>
```

## 6. 그리드 시스템

Vuetify의 그리드 시스템은 12개의 컬럼으로 이루어져 있으며, 반응형 레이아웃을 만드는 데 사용됩니다.

- `<v-container>`: 콘텐츠를 감싸고 중앙에 배치합니다.
- `<v-row>`: 컬럼들을 감싸는 행입니다.
- `<v-col>`: 실제 콘텐츠가 들어가는 컬럼입니다. `cols`, `sm`, `md`, `lg`, `xl` props를 사용하여 다양한 화면 크기에 맞게 컬럼 크기를 조절할 수 있습니다.

**예시: 2단 컬럼 레이아웃**
```vue
<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6">
        <p>이 컬럼은 중간(md) 크기 이상 화면에서는 50% 너비를, 작은 화면에서는 100% 너비를 차지합니다.</p>
      </v-col>
      <v-col cols="12" md="6">
        <p>이 컬럼도 마찬가지입니다.</p>
      </v-col>
    </v-row>
  </v-container>
</template>
```

## 7. 아이콘 사용하기

프로젝트에 Material Design Icons(`@mdi/font`)가 설치되어 있습니다. `<v-icon>` 컴포넌트나 다른 컴포넌트의 `icon` prop을 통해 아이콘을 사용할 수 있습니다.

**예시:**
```vue
<v-icon icon="mdi-home"></v-icon>

<v-btn prepend-icon="mdi-check" color="success">
  저장
</v-btn>
```
> **참고:** 사용 가능한 아이콘은 [Material Design Icons 사이트](https://pictogrammers.com/library/mdi/)에서 찾아볼 수 있습니다.

## 8. 테마 (Theming)

Vuetify의 기본 색상(primary, secondary 등)을 변경하고 싶다면 `src/main.ts` 파일에서 `createVuetify` 함수의 설정을 수정하면 됩니다.

**예시: `src/main.ts` 에서 테마 색상 변경**
```typescript
// ...
const vuetify = createVuetify({
  components,
  directives,
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#1976D2',
          secondary: '#424242',
          accent: '#82B1FF',
          error: '#FF5252',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FFC107',
        },
      },
    },
  },
})
// ...
```

## 9. 다음 단계

이 가이드는 시작에 불과합니다. 더 많은 컴포넌트와 기능, 상세한 사용법은 [Vuetify 공식 문서](https://vuetifyjs.com/)를 참고하는 것이 가장 좋습니다.

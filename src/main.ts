

// Vue 애플리케이션을 생성하기 위한 createApp 함수를 vue 라이브러리에서 가져옵니다.
import { createApp } from 'vue'

// Pinia를 사용하기 위해 createPinia 함수를 pinia 라이브러리에서 가져옵니다. Pinia는 Vue의 상태 관리 라이브러리입니다.
import { createPinia } from 'pinia'

// Vue Query를 사용하기 위해 VueQueryPlugin을 @tanstack/vue-query 라이브러리에서 가져옵니다. Vue Query는 서버 상태를 관리하는 데 사용됩니다.
import { VueQueryPlugin } from '@tanstack/vue-query'

// 최상위 컴포넌트인 App.vue를 가져옵니다.
import App from './App.vue'

// 라우터 설정을 가져옵니다.
import router from './router'

// Vuetify 관련 모듈을 가져옵니다.
import 'vuetify/styles' // Vuetify 기본 스타일
import { createVuetify } from 'vuetify' // Vuetify 인스턴스 생성 함수
import * as components from 'vuetify/components' // Vuetify 모든 컴포넌트
import * as directives from 'vuetify/directives' // Vuetify 모든 디렉티브
import '@mdi/font/css/materialdesignicons.css' // Material Design Icons

// Vuetify 인스턴스를 생성합니다.
const vuetify = createVuetify({
  components,
  directives
})

// createApp 함수를 사용하여 Vue 애플리케이션 인스턴스를 생성합니다. App 컴포넌트를 최상위 컴포넌트로 사용합니다.
const app = createApp(App)

// app.use()를 사용하여 플러그인을 애플리케이션에 추가합니다.

// Pinia 플러그인을 추가하여 전역 상태 관리를 활성화합니다.
app.use(createPinia())

// 라우터 플러그인을 추가하여 페이지 네비게이션을 처리합니다.
app.use(router)

// Vue Query 플러그인을 추가하여 서버 상태 관리를 활성화합니다.
app.use(VueQueryPlugin)

// Vuetify 플러그인을 추가합니다.
app.use(vuetify)

// 애플리케이션을 index.html 파일의 '#app' 요소에 마운트합니다. 이로써 Vue 애플리케이션이 화면에 렌더링됩니다.
app.mount('#app')
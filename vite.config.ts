// node:url 모듈에서 fileURLToPath와 URL을 가져옵니다.
// import.meta.url을 파일 시스템 경로로 변환하는 데 사용됩니다.
import { fileURLToPath, URL } from 'node:url'

// Vite에서 defineConfig 함수를 가져옵니다.
// 이 함수는 설정 객체에 대한 타입 힌트를 제공하여 자동 완성과 타입 체크를 돕습니다.
import { defineConfig } from 'vite'

// Vite의 공식 Vue 플러그인을 가져옵니다.
// 이 플러그인은 Vite가 Vue 단일 파일 컴포넌트(.vue)를 처리할 수 있도록 해줍니다.
import vue from '@vitejs/plugin-vue'

// Vuetify Vite 플러그인을 가져옵니다.
import vuetify from 'vite-plugin-vuetify'

// Vite 설정에 대한 자세한 내용은 https://vitejs.dev/config/ 에서 확인할 수 있습니다.
export default defineConfig({
  // Vite에서 사용할 플러그인 배열입니다.
  plugins: [
    // Vue 플러그인을 활성화하여 .vue 파일 지원을 추가합니다.
    vue(),
    // Vuetify 플러그인을 추가합니다.
    vuetify({ autoImport: true })
  ],
  // 모듈 해석(resolve)에 대한 설정을 구성합니다.
  resolve: {
    // 경로 별칭(alias)을 설정합니다.
    // 별칭을 사용하면 특정 디렉토리에 대한 짧은 경로를 만들 수 있어 import 구문을 더 간결하게 작성할 수 있습니다.
    alias: {
      // '@' 별칭을 'src' 디렉토리의 절대 경로로 설정합니다.
      // import.meta.url은 현재 모듈의 URL을 나타내며, new URL('./src', import.meta.url)은
      // 이를 기준으로 './src'의 전체 URL을 생성합니다.
      // fileURLToPath는 이 URL을 파일 시스템 경로로 변환합니다.
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})

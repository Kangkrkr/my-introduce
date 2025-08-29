// axios 라이브러리와 관련 타입(AxiosInstance, AxiosError)을 가져옵니다. axios는 HTTP 통신을 위한 라이브러리입니다.
import axios, { type AxiosInstance, type AxiosError, type InternalAxiosRequestConfig } from 'axios'
// 알림 서비스를 가져옵니다. API 에러 발생 시 사용자에게 메시지를 표시하는 데 사용됩니다.
import { notificationService } from '@/services/notification.service'
// 인증 스토어를 가져옵니다. 현재 로그인한 사용자의 JWT를 가져오기 위해 사용됩니다.
import { useAuthStore } from '@/stores/auth'

// API 에러 발생 시 사용할 에러 객체의 인터페이스를 정의합니다.
export interface ApiError {
  code: string // 에러 코드 (예: 'INVALID_INPUT', 'UNAUTHORIZED')
  message: string // 에러 메시지
}

// axios 인스턴스를 생성합니다. 이 인스턴스는 애플리케이션 전체에서 HTTP 요청을 보낼 때 사용됩니다.
const http: AxiosInstance = axios.create({
  // 모든 요청의 기본 URL을 '/api'로 설정합니다.
  // 이렇게 하면 http.get('/todos')와 같이 호출했을 때 실제로는 '/api/todos'로 요청이 보내집니다.
  baseURL: '/api',
  // 요청 시간이 8초를 초과하면 타임아웃 에러를 발생시킵니다.
  timeout: 8000,
})

// 요청 인터셉터(interceptor)를 설정합니다.
// 인터셉터는 모든 요청이 서버로 보내지기 전에 가로채서 공통 로직을 수행하게 해줍니다.
http.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // 인증 스토어 인스턴스를 가져옵니다.
    const authStore = useAuthStore()
    // 스토어에 JWT가 존재하면 요청 헤더에 Authorization 토큰을 추가합니다.
    // 'Bearer' 스키마는 JWT를 포함하는 표준 방식입니다.
    if (authStore.token) {
      config.headers.Authorization = `Bearer ${authStore.token}`
    }
    return config
  },
  (error) => {
    // 요청 에러 발생 시 처리 로직
    return Promise.reject(error)
  }
)

// 응답 인터셉터(interceptor)를 설정합니다.
// 인터셉터는 모든 응답이 .then() 또는 .catch()로 처리되기 전에 가로채서 공통 로직을 수행하게 해줍니다.
http.interceptors.response.use(
  // 첫 번째 인자는 응답이 성공적일 때 실행되는 함수입니다.
  // 받은 응답(response)을 그대로 반환합니다.
  (response) => response,

  // 두 번째 인자는 응답이 실패(에러 발생)했을 때 실행되는 함수입니다.
  (error: AxiosError<any>) => {
    // 인증 스토어 인스턴스를 가져옵니다.
    const authStore = useAuthStore()

    // API 에러 객체를 우리가 정의한 ApiError 형태로 가공합니다.
    const apiError: ApiError = {
      // 백엔드에서 보낸 에러 코드가 있으면 사용하고, 없으면 'UNKNOWN'으로 설정합니다.
      code: error.response?.data?.code || 'UNKNOWN',
      // axios 에러 객체에 포함된 기본 메시지를 사용합니다.
      message: error.message,
    }

    // HTTP 상태 코드가 401 (Unauthorized)인 경우, 토큰이 만료되었거나 유효하지 않을 수 있습니다.
    // 이 경우 로그아웃 처리를 시도합니다.
    if (error.response?.status === 401) {
      notificationService.error('인증 정보가 만료되었거나 유효하지 않습니다. 다시 로그인해주세요.')
      authStore.logout() // 사용자 로그아웃 처리
      // TODO: 라우터 푸시를 통해 로그인 페이지로 강제 이동하는 로직 추가 (여기서는 직접 라우터에 접근하기 어려움)
      // router.push('/login'); // 실제 앱에서는 이렇게 처리할 수 있습니다.
    } else {
      // 그 외의 에러는 일반적인 에러 메시지를 표시합니다.
      notificationService.error('요청 처리 중 오류가 발생했습니다.')
    }
    console.error('API Error:', apiError) // 개발자 콘솔에 상세 에러 로깅

    // 가공된 에러 객체를 Promise.reject를 통해 반환하여, 이후 .catch() 블록에서 이 에러를 받을 수 있도록 합니다.
    return Promise.reject(apiError)
  },
)

// 설정이 완료된 axios 인스턴스를 다른 파일에서 import하여 사용할 수 있도록 내보냅니다.
export default http
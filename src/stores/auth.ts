// Pinia 라이브러리에서 스토어를 정의하는 defineStore 함수를 가져옵니다.
import { defineStore } from 'pinia'
// 인증 관련 API 호출을 시뮬레이션하는 서비스를 가져옵니다.
import * as authService from '@/services/auth.service'
// 알림 서비스를 가져옵니다. 로그인 실패 시 사용자에게 메시지를 표시하는 데 사용됩니다.
import { notificationService } from '@/services/notification.service'

// TypeScript 우선 접근 방식: 스토어에 사용될 타입들을 정의합니다.

/**
 * 사용자(User) 객체의 인터페이스를 정의합니다.
 * 사용자의 고유 ID, 이름, 이메일 정보를 포함합니다.
 */
export interface User {
  id: number // 사용자의 고유 식별자
  name: string // 사용자의 이름
  email: string // 사용자의 이메일 주소
}

/**
 * 인증 스토어의 상태(State) 인터페이스를 정의합니다.
 * 현재 로그인한 사용자 정보를 저장합니다. 사용자가 로그인하지 않은 경우 undefined입니다.
 */
export interface AuthState {
  user: User | undefined // 현재 로그인한 사용자 객체 또는 undefined
  token: string | undefined // 현재 사용자의 JWT 토큰 또는 undefined
}

/**
 * 'auth'라는 이름의 Pinia 스토어를 정의하고 내보냅니다.
 * defineStore의 첫 번째 인자는 스토어의 고유 ID입니다.
 * 두 번째 인자는 스토어의 옵션 객체로, state, getters, actions를 포함합니다.
 */
export const useAuthStore = defineStore('auth', {
  /**
   * state: 스토어의 상태를 정의하는 함수입니다.
   * 이 함수는 초기 상태 객체를 반환합니다.
   */
  state: (): AuthState => ({
    user: undefined, // 초기에는 로그인한 사용자가 없으므로 user는 undefined로 설정됩니다.
    token: undefined, // 초기에는 토큰이 없으므로 token은 undefined로 설정됩니다.
  }),

  /**
   * getters: 상태를 기반으로 계산된 값을 반환하는 함수들입니다.
   * 상태를 직접 변경하지 않고, 상태에서 파생된 데이터를 읽을 때 사용합니다.
   */
  getters: {
    /**
     * isLoggedIn: 사용자가 로그인했는지 여부를 반환합니다.
     * !!state.user는 state.user가 truthy(즉, undefined가 아닌 값)이면 true를, falsy이면 false를 반환합니다.
     */
    isLoggedIn: (state) => !!state.user,
  },

  /**
   * actions: 상태를 변경하거나 비동기 작업을 수행하는 함수들입니다.
   * 컴포넌트에서 호출하여 상태를 업데이트합니다.
   */
  actions: {
    /**
     * login: 사용자 로그인을 처리하는 비동기 액션입니다.
     * 실제 애플리케이션에서는 이메일과 비밀번호를 사용하여 백엔드 API에 로그인 요청을 보냅니다.
     * @param email - 사용자의 이메일 주소
     * @param password - 사용자의 비밀번호
     */
    async login(email: string, password?: string) {
      try {
        // authService의 login 함수를 호출하여 실제 로그인 로직을 수행합니다.
        // 이 함수는 성공 시 사용자 정보를, 실패 시 에러를 반환합니다.
        const { user, token } = await authService.login(email, password)
        // 로그인 성공 시, 스토어의 user 상태와 token을 업데이트합니다.
        this.user = user
        this.token = token
        // 성공 알림을 사용자에게 표시합니다.
        notificationService.success(`${user.name}님, 환영합니다!`)
      } catch (error: any) {
        // 로그인 실패 시 에러를 처리합니다.
        console.error('Login failed:', error)
        // 사용자에게 에러 메시지를 알림으로 표시합니다.
        // 백엔드에서 구체적인 에러 메시지를 제공한다면 error.message를 사용할 수 있습니다.
        notificationService.error(error.message || '로그인에 실패했습니다. 다시 시도해주세요.')
        // 에러를 다시 throw하여 컴포넌트에서도 에러를 처리할 수 있도록 합니다.
        throw error
      }
    },

    /**
     * logout: 사용자 로그아웃을 처리하는 액션입니다.
     * user 상태를 undefined로 설정하여 로그인 상태를 해제합니다.
     */
    async logout() {
      try {
        // authService의 logout 함수를 호출하여 실제 로그아웃 로직을 수행합니다.
        await authService.logout()
        // 로그아웃 성공 시, 스토어의 user 상태와 token을 undefined로 설정합니다.
        this.user = undefined
        this.token = undefined
        // 성공 알림을 사용자에게 표시합니다.
        notificationService.info('로그아웃 되었습니다.')
      } catch (error) {
        // 로그아웃 실패 시 에러를 처리합니다. (로그아웃은 보통 실패할 일이 적지만, 네트워크 문제 등 고려)
        console.error('Logout failed:', error)
        notificationService.error('로그아웃 중 오류가 발생했습니다.')
      }
    },
  },
})

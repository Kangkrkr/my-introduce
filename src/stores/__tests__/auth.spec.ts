// Vitest에서 테스트 관련 함수들을 가져옵니다.
// describe: 테스트 스위트(관련된 테스트들의 묶음)를 정의합니다.
// it (또는 test): 개별 테스트 케이스를 정의합니다.
// expect: 값을 테스트하고 예상하는 결과를 확인하는 데 사용됩니다.
import { describe, it, expect, beforeEach } from 'vitest'

// Pinia에서 스토어 초기화 및 활성화를 위한 함수들을 가져옵니다.
// createPinia: Pinia 인스턴스를 생성합니다.
// setActivePinia: 테스트 환경에서 Pinia 스토어가 올바르게 작동하도록 활성화합니다.
import { createPinia, setActivePinia } from 'pinia'

// 테스트할 인증 스토어를 가져옵니다.
import { useAuthStore } from '../auth'

// 'Auth Store'라는 이름의 테스트 스위트를 정의합니다.
describe('Auth Store', () => {
  // 각 테스트 케이스가 실행되기 전에 호출되는 훅입니다.
  // 이 훅을 사용하여 각 테스트가 독립적으로 실행될 수 있도록 환경을 초기화합니다.
  beforeEach(() => {
    // 새로운 Pinia 인스턴스를 생성하고 활성화합니다.
    // 이렇게 하면 각 테스트는 깨끗한 상태의 스토어에서 시작할 수 있습니다.
    setActivePinia(createPinia())
  })

  // '초기 상태는 user가 undefined이고 isLoggedIn이 false여야 한다'는 테스트 케이스를 정의합니다.
  it('initial state should have user as undefined and isLoggedIn as false', () => {
    // useAuthStore 훅을 호출하여 인증 스토어 인스턴스를 가져옵니다.
    const authStore = useAuthStore()

    // 스토어의 user 상태가 undefined인지 확인합니다.
    expect(authStore.user).toBeUndefined()
    // 스토어의 isLoggedIn getter가 false인지 확인합니다.
    expect(authStore.isLoggedIn).toBe(false)
  })

  // 'login 액션이 user를 설정하고 isLoggedIn을 true로 만들어야 한다'는 테스트 케이스를 정의합니다.
  it('login action should set user and make isLoggedIn true', async () => {
    const authStore = useAuthStore()
    const testEmail = 'test@example.com'

    // login 액션을 비동기적으로 호출합니다.
    // 이메일만 전달하고 비밀번호는 목업이므로 생략합니다.
    await authStore.login(testEmail)

    // login 액션이 완료된 후 user 상태가 설정되었는지 확인합니다.
    // user 객체가 존재하고, id가 1이고, name이 'Test User'이고, email이 testEmail과 일치하는지 확인합니다.
    expect(authStore.user).toEqual({ id: 1, name: 'Test User', email: testEmail })
    // isLoggedIn getter가 true인지 확인합니다.
    expect(authStore.isLoggedIn).toBe(true)
  })

  // 'logout 액션이 user를 undefined로 만들고 isLoggedIn을 false로 만들어야 한다'는 테스트 케이스를 정의합니다.
  it('logout action should set user to undefined and make isLoggedIn false', async () => {
    const authStore = useAuthStore()
    const testEmail = 'test@example.com'

    // 먼저 로그인 상태를 만듭니다.
    await authStore.login(testEmail)
    // 로그인 상태가 되었는지 확인합니다.
    expect(authStore.isLoggedIn).toBe(true)

    // logout 액션을 호출합니다.
    authStore.logout()

    // logout 액션이 완료된 후 user 상태가 undefined인지 확인합니다.
    expect(authStore.user).toBeUndefined()
    // isLoggedIn getter가 false인지 확인합니다.
    expect(authStore.isLoggedIn).toBe(false)
  })
})

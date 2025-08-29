// src/services/auth.service.ts

// 인증 관련 API 호출을 시뮬레이션하는 목업 서비스입니다.
// 실제 애플리케이션에서는 백엔드 API와 통신하여 사용자 인증을 처리합니다.

// 간단한 목업 JWT를 생성하는 함수입니다.
// 실제 JWT는 서버에서 암호화된 형태로 생성됩니다.
function generateMockJwt(email: string): string {
  // 실제 JWT는 헤더, 페이로드, 서명으로 구성되지만, 여기서는 간단한 문자열로 시뮬레이션합니다.
  // 페이로드에 사용자 이메일을 포함하여 나중에 검증할 수 있도록 합니다.
  const payload = { email: email, exp: Math.floor(Date.now() / 1000) + (60 * 60) }; // 1시간 유효
  const encodedPayload = btoa(JSON.stringify(payload)); // Base64 인코딩
  return `mock-jwt-token.${encodedPayload}.mock-signature`;
}

/**
 * 사용자 로그인 요청을 시뮬레이션합니다.
 * @param email - 로그인할 사용자의 이메일
 * @param password - 로그인할 사용자의 비밀번호
 * @returns Promise<{ user: { id: number; name: string; email: string }; token: string }>
 *          - 로그인 성공 시 사용자 정보와 JWT를 담은 객체를 반환하는 Promise.
 *          - 로그인 실패 시 에러를 reject하는 Promise.
 */
export async function login(email: string, password?: string): Promise<{ user: { id: number; name: string; email: string }; token: string }> {
  return new Promise((resolve, reject) => {
    // 실제 API 호출을 시뮬레이션하기 위해 1초 지연을 줍니다.
    setTimeout(() => {
      // 간단한 목업 로그인 로직: 이메일이 'test@example.com'이고 비밀번호가 'password'이면 성공으로 간주합니다.
      // 실제로는 백엔드에서 사용자 정보를 검증하고 토큰 등을 반환합니다.
      if (email === 'test@example.com' && password === 'password') {
        const user = { id: 1, name: 'Test User', email: email };
        const token = generateMockJwt(email); // 목업 JWT 생성
        resolve({ user, token });
      } else if (email === 'fail@example.com') {
        // 특정 이메일로 로그인 시도 시 실패를 시뮬레이션합니다.
        reject({ code: 'AUTH_FAILED', message: '로그인 정보가 올바르지 않습니다.' });
      } else {
        reject({ code: 'INVALID_CREDENTIALS', message: '이메일 또는 비밀번호를 확인해주세요.' });
      }
    }, 1000);
  });
}

/**
 * 사용자 로그아웃 요청을 시뮬레이션합니다.
 * @returns Promise<void> - 로그아웃 성공 시 resolve되는 Promise.
 */
export async function logout(): Promise<void> {
  return new Promise((resolve) => {
    // 실제 API 호출을 시뮬레이션하기 위해 500ms 지연을 줍니다.
    setTimeout(() => {
      console.log('User logged out (mock).')
      resolve()
    }, 500)
  })
}

/**
 * 목업 JWT의 유효성을 검증하는 함수입니다.
 * 실제 JWT 검증은 서버에서 서명을 확인하고 만료 시간을 검사하는 등 복잡한 과정을 거칩니다.
 * 여기서는 단순히 토큰이 존재하고, 페이로드에 이메일이 포함되어 있는지 확인합니다.
 * @param token - 검증할 JWT 문자열
 * @returns boolean - 유효하면 true, 그렇지 않으면 false
 */
export function verifyMockJwt(token: string | null): boolean {
  if (!token) {
    return false;
  }
  try {
    const parts = token.split('.');
    if (parts.length !== 3) {
      return false; // 유효하지 않은 JWT 형식
    }
    const payload = JSON.parse(atob(parts[1])); // Base64 디코딩 및 JSON 파싱
    // 페이로드에 이메일이 있고 만료되지 않았는지 확인 (간단한 검증)
    return typeof payload.email === 'string' && payload.exp > (Date.now() / 1000);
  } catch (e) {
    console.error("Failed to verify mock JWT:", e);
    return false;
  }
}
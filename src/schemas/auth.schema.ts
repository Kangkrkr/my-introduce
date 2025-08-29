// Zod 라이브러리를 가져옵니다. Zod는 TypeScript 우선 스키마 선언 및 유효성 검사 라이브러리입니다.
import { z } from 'zod'

/**
 * 로그인 폼의 유효성 검사를 위한 Zod 스키마를 정의합니다.
 * z.object()를 사용하여 객체 형태의 스키마를 생성합니다.
 */
export const loginSchema = z.object({
  /**
   * 'email' 필드에 대한 유효성 검사 규칙을 정의합니다.
   * z.string(): 이메일이 문자열이어야 함을 나타냅니다.
   * .email('유효한 이메일 주소를 입력해주세요.'): 문자열이 유효한 이메일 형식이어야 함을 검사합니다.
   *   유효하지 않을 경우 괄호 안의 메시지를 에러 메시지로 반환합니다.
   */
  email: z.string().email('유효한 이메일 주소를 입력해주세요.'),
  /**
   * 'password' 필드에 대한 유효성 검사 규칙을 정의합니다.
   * z.string(): 비밀번호가 문자열이어야 함을 나타냅니다.
   * .min(1, '비밀번호를 입력해주세요.'): 문자열의 최소 길이가 1이어야 함을 검사합니다.
   *   즉, 비밀번호 필드가 비어있지 않아야 합니다.
   */
  password: z.string().min(1, '비밀번호를 입력해주세요.'),
})

/**
 * loginSchema로부터 TypeScript 타입을 추론하여 LoginInput이라는 별칭으로 내보냅니다.
 * 이렇게 하면 폼 데이터의 타입을 명시적으로 정의하지 않고도 스키마를 기반으로 타입을 얻을 수 있어 편리합니다.
 * 예를 들어, LoginInput은 { email: string; password: string; } 형태의 타입이 됩니다.
 */
export type LoginInput = z.infer<typeof loginSchema>
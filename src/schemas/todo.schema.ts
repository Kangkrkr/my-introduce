// Zod 라이브러리를 가져옵니다. Zod는 TypeScript 우선 스키마 선언 및 유효성 검사 라이브러리입니다.
import { z } from 'zod'

/**
 * 새로운 할 일(Todo) 생성 폼의 유효성 검사를 위한 Zod 스키마를 정의합니다.
 * z.object()를 사용하여 객체 형태의 스키마를 생성합니다.
 */
export const createTodoSchema = z.object({
  /**
   * 'title' 필드에 대한 유효성 검사 규칙을 정의합니다.
   * z.string(): 제목이 문자열이어야 함을 나타냅니다.
   * .min(2, '두 글자 이상 입력해주세요.'): 문자열의 최소 길이가 2이어야 함을 검사합니다.
   *   즉, 할 일 제목은 최소 두 글자 이상이어야 합니다.
   *   유효하지 않을 경우 괄호 안의 메시지를 에러 메시지로 반환합니다.
   */
  title: z.string().min(2, '두 글자 이상 입력해주세요.'),
})

/**
 * createTodoSchema로부터 TypeScript 타입을 추론하여 CreateTodoInput이라는 별칭으로 내보냅니다.
 * 이렇게 하면 폼 데이터의 타입을 명시적으로 정의하지 않고도 스키마를 기반으로 타입을 얻을 수 있어 편리합니다.
 * 예를 들어, CreateTodoInput은 { title: string; } 형태의 타입이 됩니다.
 */
export type CreateTodoInput = z.infer<typeof createTodoSchema>
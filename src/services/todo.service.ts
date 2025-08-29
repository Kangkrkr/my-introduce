import type { Todo } from '@/types/todo'
// 인증 스토어를 가져옵니다. 현재 로그인한 사용자의 JWT를 가져오기 위해 사용됩니다.
import { useAuthStore } from '@/stores/auth'
// 목업 JWT 유효성 검증 함수를 가져옵니다.
import { verifyMockJwt } from '@/services/auth.service'

// Mock database
let todos: Todo[] = [
  { id: 1, title: 'Vue 3 학습하기', completed: true },
  { id: 2, title: 'Pinia 상태 관리 배우기', completed: true },
  { id: 3, title: 'TanStack Query로 서버 상태 관리하기', completed: false },
  { id: 4, title: '프로젝트 문서 작성하기', completed: false },
]

let nextId = 5

// Mock API service functions
const delay = (ms: number) => new Promise((res) => setTimeout(res, ms))

/**
 * API 요청을 수행하기 전에 JWT 유효성을 검사하는 헬퍼 함수입니다.
 * @returns Promise<void> - 토큰이 유효하면 resolve, 그렇지 않으면 reject.
 */
async function authenticateRequest(): Promise<void> {
  const authStore = useAuthStore()
  // 현재 스토어에 저장된 토큰을 가져옵니다.
  const token = authStore.token

  // 토큰이 없거나 유효하지 않으면 인증 실패 에러를 발생시킵니다.
  if (!token || !verifyMockJwt(token)) {
    // 실제 백엔드에서는 401 Unauthorized 응답을 보낼 것입니다.
    // 여기서는 Promise.reject를 사용하여 에러를 시뮬레이션합니다.
    return Promise.reject({
      code: 'UNAUTHORIZED',
      message: '인증되지 않았거나 토큰이 유효하지 않습니다. 로그인해주세요.',
      status: 401 // HTTP 상태 코드 시뮬레이션
    })
  }
  return Promise.resolve() // 토큰이 유효하면 계속 진행
}

/**
 * 모든 할 일 목록을 비동기적으로 가져오는 함수입니다.
 * 실제 API 호출을 시뮬레이션하기 위해 500ms 지연을 줍니다.
 * @returns Promise<Todo[]> - 할 일 목록 배열을 반환하는 Promise.
 */
export async function fetchTodos(token : string | undefined): Promise<Todo[]> {
  await authenticateRequest() // 요청 전 인증 확인
  await delay(500) // 0.5초 지연
  console.log('Fetched todos:', todos) // 현재 할 일 목록을 콘솔에 출력
  return [...todos] // todos 배열의 복사본을 반환하여 원본 배열의 외부 변경을 방지
}

/**
 * 새로운 할 일을 생성하는 함수입니다.
 * @param title - 생성할 할 일의 제목.
 * @returns Promise<Todo> - 생성된 할 일 객체를 반환하는 Promise.
 */
export async function createTodo(title: string, token : string | undefined): Promise<Todo> {
  await authenticateRequest() // 요청 전 인증 확인
  await delay(500) // 0.5초 지연
  const newTodo: Todo = {
    id: nextId++, // 현재 nextId를 사용하고 1 증가
    title,
    completed: false,
  }
  todos.push(newTodo) // 할 일 목록에 새 할 일 추가
  return newTodo // 생성된 할 일 반환
}

/**
 * 기존 할 일을 업데이트하는 함수입니다.
 * @param updatedTodo - 업데이트할 할 일 객체 (ID를 포함해야 함).
 * @returns Promise<Todo> - 업데이트된 할 일 객체를 반환하는 Promise.
 */
export async function updateTodo(updatedTodo: Todo, token : string | undefined): Promise<Todo> {
  await authenticateRequest() // 요청 전 인증 확인
  await delay(500) // 0.5초 지연
  // todos 배열을 순회하며, ID가 일치하는 할 일은 updatedTodo로 교체하고 나머지는 그대로 둡니다.
  todos = todos.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo))
  return updatedTodo // 업데이트된 할 일 반환
}

/**
 * 할 일을 삭제하는 함수입니다.
 * @param id - 삭제할 할 일의 ID.
 * @returns Promise<{ id: number }> - 삭제된 할 일의 ID를 포함하는 객체를 반환하는 Promise.
 */
export async function deleteTodo(id: number, token : string | undefined): Promise<{ id: number }> {
  await authenticateRequest() // 요청 전 인증 확인
  await delay(500) // 0.5초 지연
  // todos 배열에서 ID가 일치하지 않는 할 일만 필터링하여 남깁니다.
  todos = todos.filter((todo) => todo.id !== id)
  return { id } // 삭제된 할 일의 ID 반환
}

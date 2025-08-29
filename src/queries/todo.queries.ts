// Vue Query 라이브러리에서 쿼리와 뮤테이션을 생성하고 쿼리 클라이언트에 접근하기 위한 훅들을 가져옵니다.
import { useQuery, useMutation, useQueryClient } from '@tanstack/vue-query'
// 할 일(Todo) 관련 API 요청 함수들이 정의된 서비스를 가져옵니다.
import * as todoService from '@/services/todo.service'
// Todo 데이터의 타입을 정의한 파일을 가져옵니다.
import type { Todo } from '@/types/todo'
// Pinia로 만든 인증 관련 스토어를 가져옵니다. JWT 토큰을 가져오기 위해 필요합니다.
import { useAuthStore } from '@/stores/auth'

// 할 일 목록 쿼리를 식별하기 위한 고유한 키입니다.
// Vue Query는 이 키를 사용하여 데이터를 캐싱하고, 업데이트하며, 무효화합니다.
const TODO_QUERY_KEY = ['todos']

/**
 * 할 일 목록을 조회하는 커스텀 훅입니다.
 * 이 훅을 컴포넌트에서 사용하면 할 일 목록 데이터를 쉽게 가져오고,
 * 로딩 상태, 에러 상태 등을 관리할 수 있습니다.
 */
export function useTodosQuery() {
  // 인증 스토어에서 현재 사용자의 토큰을 가져옵니다.
  const authStore = useAuthStore()
  const token = authStore.token
  console.log('useTodosQuery: token from authStore:', token); // Debug log

  // useQuery 훅을 사용하여 쿼리를 생성합니다.
  return useQuery({
    // 이 쿼리의 고유 키를 설정합니다。
    queryKey: TODO_QUERY_KEY,
    // queryFn은 실제로 데이터를 가져오는 비동기 함수입니다.
    // todoService에 정의된 fetchTodos 함수를 호출하여 API로부터 할 일 목록을 가져옵니다.
    // 이제 fetchTodos 함수에 토큰을 인자로 전달합니다.
    queryFn: () => todoService.fetchTodos(token),
  })
}

/**
 * 새로운 할 일을 생성하는 뮤테이션(Mutation)을 위한 커스텀 훅입니다.
 * 뮤테이션은 데이터를 생성, 수정, 삭제하는 작업을 의미합니다.
 */
export function useCreateTodoMutation() {
  const queryClient = useQueryClient()
  // 인증 스토어에서 현재 사용자의 토큰을 가져옵니다。
  const authStore = useAuthStore()
  const token = authStore.token
  console.log('useCreateTodoMutation: token from authStore:', token); // Debug log

  // useMutation 훅을 사용하여 뮤테이션을 생성합니다.
  return useMutation({
    // mutationFn은 실제로 데이터 변경 작업을 수행하는 비동기 함수입니다.
    // 컴포넌트에서 mutate(title)을 호출하면 이 함수가 실행됩니다.
    // 이제 createTodo 함수에 토큰을 인자로 전달합니다.
    mutationFn: (title: string) => todoService.createTodo(title, token),
    // 뮤테이션이 성공적으로 완료되었을 때 실행되는 콜백 함수입니다.
    onSuccess: () => {
      // 새로운 할 일이 생성되었으므로, 기존의 할 일 목록 데이터는 더 이상 최신이 아닙니다.
      // queryClient.invalidateQueries를 사용하여 'todos' 쿼리를 무효화합니다.
      // 이렇게 하면 해당 쿼리가 자동으로 다시 실행(refetch)되어 최신 목록을 가져옵니다.
      queryClient.invalidateQueries({ queryKey: TODO_QUERY_KEY })
    },
  })
}

/**
 * 기존 할 일을 수정하는 뮤테이션을 위한 커스텀 훅입니다.
 */
export function useUpdateTodoMutation() {
  const queryClient = useQueryClient()
  // 인증 스토어에서 현재 사용자의 토큰을 가져옵니다。
  const authStore = useAuthStore()
  const token = authStore.token
  console.log('useUpdateTodoMutation: token from authStore:', token); // Debug log

  return useMutation({
    // 수정할 todo 객체를 인자로 받아 updateTodo 서비스를 호출합니다.
    // 이제 updateTodo 함수에 토큰을 인자로 전달합니다.
    mutationFn: (todo: Todo) => todoService.updateTodo(todo, token),
    // 수정이 성공하면 'todos' 쿼리를 무효화하여 목록을 새로고침합니다.
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: TODO_QUERY_KEY })
    },
  })
}

/**
 * 기존 할 일을 삭제하는 뮤테이션을 위한 커스텀 훅입니다.
 */
export function useDeleteTodoMutation() {
  const queryClient = useQueryClient()
  // 인증 스토어에서 현재 사용자의 토큰을 가져옵니다。
  const authStore = useAuthStore()
  const token = authStore.token
  console.log('useDeleteTodoMutation: token from authStore:', token); // Debug log

  return useMutation({
    // 삭제할 todo의 id를 인자로 받아 deleteTodo 서비스를 호출합니다.
    // 이제 deleteTodo 함수에 토큰을 인자로 전달합니다.
    mutationFn: (id: number) => todoService.deleteTodo(id, token),
    // 삭제가 성공하면 'todos' 쿼리를 무효화하여 목록을 새로고침합니다.
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: TODO_QUERY_KEY })
    },
  })
}
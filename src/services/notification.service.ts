// src/services/notification.service.ts

/**
 * 사용자에게 알림 메시지를 표시하는 목업 서비스입니다.
 * 실제 애플리케이션에서는 토스트(toast) 메시지 라이브러리(예: vue-toastification, primevue/toast)나
 * 모달(modal) 컴포넌트 등을 사용하여 사용자에게 시각적인 피드백을 제공합니다.
 * 이 서비스는 콘솔에 메시지를 로깅하는 방식으로 동작을 시뮬레이션합니다.
 */
export const notificationService = {
  /**
   * 성공 메시지를 표시합니다.
   * @param message - 표시할 성공 메시지 내용
   */
  success(message: string) {
    console.log('[SUCCESS]', message)
    // 실제 구현: 토스트 메시지 라이브러리.success(message)
  },

  /**
   * 에러 메시지를 표시합니다.
   * @param message - 표시할 에러 메시지 내용
   */
  error(message: string) {
    console.error('[ERROR]', message)
    // 실제 구현: 토스트 메시지 라이브러리.error(message)
  },

  /**
   * 정보 메시지를 표시합니다.
   * @param message - 표시할 정보 메시지 내용
   */
  info(message: string) {
    console.info('[INFO]', message)
    // 실제 구현: 토스트 메시지 라이브러리.info(message)
  },
}

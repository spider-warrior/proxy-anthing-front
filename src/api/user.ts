import type { ApiResponse } from '@/types/api'
import type { LoginResult } from '@/types/user'
import { mockLogin } from '@/mock/user'

const useMock = import.meta.env.VITE_USE_MOCK === 'true'

export function loginApi(username: string, password: string): Promise<ApiResponse<LoginResult>> {
  if (useMock) {
    return mockLogin(username, password)
  }
  // 真实 API 调用（后续替换）
  return import('@/utils/request').then((mod) =>
    mod.default.post('/api/login', { username, password })
  )
}

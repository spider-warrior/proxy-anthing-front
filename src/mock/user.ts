import type { ApiResponse } from '@/types/api'
import type { LoginResult } from '@/types/user'

export function mockLogin(username: string, _password: string): Promise<ApiResponse<LoginResult>> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        code: '200',
        data: {
          token: 'mock-token-' + Date.now(),
          user: {
            id: 'user-001',
            username,
          },
        },
        msg: '',
      })
    }, 300)
  })
}

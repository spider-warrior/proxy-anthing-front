import type { ApiResponse } from '@/types/api'
import type { LoginResult } from '@/types/user'

const MOCK_USERNAME = 'linuxdo'
const MOCK_PASSWORD = 'linuxdo'

export function mockLogin(username: string, password: string): Promise<ApiResponse<LoginResult>> {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (username !== MOCK_USERNAME || password !== MOCK_PASSWORD) {
        resolve({
          code: '401',
          data: null as unknown as LoginResult,
          msg: '用户名或密码错误',
        })
        return
      }
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

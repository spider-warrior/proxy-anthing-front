export interface UserInfo {
  id: string
  username: string
}

export interface LoginResult {
  token: string
  user: UserInfo
}

/** 统一响应数据格式 */
export interface ApiResponse<T = unknown> {
  /** 状态码，"200" 表示成功，其他表示错误 */
  code: string
  /** 业务数据 */
  data: T
  /** 异常信息内容 */
  msg: string
}

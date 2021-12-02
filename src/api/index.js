import request from '@/utils/request'
/**
 * 导出文件
 */
export function downLoadImg (data) {
  return request({
    url: '/api/download',
    method: 'get',
    params: data,
    responseType: 'blob'
  })
}
import { getApiPath } from '@/utils/getAPIPath'
import { ApiVersionEnum } from '@/enums/apiVersion'
import axiosConfig from '../config'
import { ApiServiceEnum } from '@/enums/apiService'
import { User } from '@/domain/user'

export const getProfile = async (): Promise<User> => {
  const response = await axiosConfig({
    url: getApiPath({
      version: ApiVersionEnum.V1,
      service: ApiServiceEnum.User,
      path: '/user',
    }),
    method: 'GET',
  })

  return response.data
}

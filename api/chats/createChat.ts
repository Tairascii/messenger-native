import { getApiPath } from '@/utils/getAPIPath'
import { ApiVersionEnum } from '@/enums/apiVersion'
import axiosConfig from '../config'

export const createChat = async (userID: string) => {
  const response = await axiosConfig({
    url: getApiPath({
      version: ApiVersionEnum.V1,
      service: '', //todo
      path: '/chats/',
    }),
    method: 'POST',
    data: {
      user_id: userID,
    },
  })

  return response.data
}

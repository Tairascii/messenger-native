import { getApiPath } from '@/utils/getAPIPath'
import { ApiVersionEnum } from '@/enums/apiVersion'
import axiosConfig from '../config'
import { ApiServiceEnum } from '@/enums/apiService'
import { Chat } from '@/domain/chats'

export const getChats = async (): Promise<Chat[]> => {
  const response = await axiosConfig({
    url: getApiPath({
      version: ApiVersionEnum.V1,
      service: ApiServiceEnum.Chats,
      path: '/chats',
    }),
    method: 'GET',
  })

  return response.data
}

import { Chat } from '@/domain/chat'
import { ApiServiceEnum } from '@/enums/apiService'
import { ApiVersionEnum } from '@/enums/apiVersion'
import { getApiPath } from '@/utils/getAPIPath'
import axiosConfig from '../config'

export const getChats = async (): Promise<Chat[]> => {
  const response = await axiosConfig({
    url: getApiPath({
      version: ApiVersionEnum.V1,
      service: ApiServiceEnum.Chats,
      path: '/chats',
    }),
    method: 'GET',
  })
  return response.data.chats
}

import { Message } from '@/domain/message'
import axiosConfig from '../config'
import { getApiPath } from '@/utils/getAPIPath'
import { ApiVersionEnum } from '@/enums/apiVersion'
import { ApiServiceEnum } from '@/enums/apiService'

export const getMessages = async (chatID: string): Promise<Message[]> => {
  const response = await axiosConfig({
    url: getApiPath({
      version: ApiVersionEnum.V1,
      service: ApiServiceEnum.Chats,
      path: `/messages/${chatID}`,
    }),
    method: 'GET',
  })

  return response.data.messages
}

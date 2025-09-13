import { getApiPath } from '@/utils/getAPIPath'
import { ApiVersionEnum } from '@/enums/apiVersion'
import { ApiServiceEnum } from '@/enums/apiService'
import axiosConfig from '../config'
import { SignInData, Tokens } from './types'
import { DataWrapper } from '../types'

//TODO change service name
export const signIn = async ({
  email,
  password,
}: SignInData): Promise<Tokens> => {
  const response = await axiosConfig({
    url: getApiPath({
      version: ApiVersionEnum.V1,
      service: ApiServiceEnum.User,
      path: '/auth/sign-in',
    }),
    method: 'POST',
    data: {
      email,
      password,
    },
  })

  return response.data
}

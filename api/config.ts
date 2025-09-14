//TODO uncomment after user service ready
import { accessTokenCookieKey } from '@/constants/keys'
import { URLEnum } from '@/enums/url'
import axios, { AxiosInstance } from 'axios'
import { router } from 'expo-router'
import * as SecureStore from 'expo-secure-store'
// import { refreshToken } from "@/api/auth";

// const refreshTokenUrl = '/v1/auth/refresh'

const axiosConfig: AxiosInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
  headers: {
    'Content-Type': 'application/json',
  },
})
// change to in memory storing
axiosConfig.interceptors.request.use((config) => {
  const accessToken = SecureStore.getItem(accessTokenCookieKey)

  if (accessToken) {
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = `Bearer ${accessToken}`
  }
  return config
})

axiosConfig.interceptors.response.use(
  (response) => response,
  async (err) => {
    const originalRequest = err.config
    if (err?.response?.status === 401) {
      // const isRefreshRequest = originalRequest.url.includes(refreshTokenUrl);
      // const refreshTokenFromLS = cookie.get("refreshToken");
      // if (!originalRequest._retry && !isRefreshRequest && refreshTokenFromLS) {
      //   originalRequest._retry = true;
      //   const newAccessToken = await refreshToken(refreshTokenFromLS);
      //   cookie.set("accessToken", newAccessToken.accessToken);
      //   cookie.set("refreshToken", newAccessToken.refreshToken);
      //   axiosConfig.defaults.headers.common.Authorization = `Bearer ${newAccessToken.accessToken}`;
      //   return axiosConfig(originalRequest);
      // }
      // SecureStore.deleteItemAsync(accessTokenCookieKey);
      router.replace(URLEnum.LOGIN)
    }
    return Promise.reject(err)
  }
)

export const setContentLanguageHeader = (locale?: string): void => {
  if (locale) {
    axiosConfig.defaults.headers.common['Content-Language'] = locale
  }
}

export default axiosConfig

import { getProfile } from '@/api/user/getProfile'
import { User } from '@/domain/user'
import { create } from 'zustand'

export type UserState = {
  profile: User
}

export type UserActions = {
  getProfile: () => Promise<void>
}

export type UserStore = UserState & UserActions

export const useUserStore = create<UserStore>()((set) => ({
  profile: {
    id: '',
    email: '',
  },
  getProfile: async () => {
    const res = await getProfile()
    set({ profile: res })
  },
}))

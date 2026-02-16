import { create } from "zustand";
import { fetchUsers } from "../api/usersApi";
import type { User } from "../types/user";

interface UserState {
  users: User[];
  selectedUser: User | null;
  skip: number;
  loading: boolean;
  fetchMoreUsers: () => Promise<void>;
  selectUser: (user: User | null) => void;
}

export const useUserStore = create<UserState>((set, get) => ({
  users: [],
  selectedUser: null,
  skip: 0,
  loading: false,

  fetchMoreUsers: async () => {
    const { skip, users, loading } = get();
    if (loading) return;

    set({ loading: true });
    const newUsers = await fetchUsers(20, skip);

    set({
      users: [...users, ...newUsers],
      skip: skip + 20,
      loading: false,
    });
  },

  selectUser: (user) => set({ selectedUser: user }),
}));

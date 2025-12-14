import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    likedUsers: [],
  },
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    updateUser: (state, action) => {
      const index = state.users.findIndex(user => user.id === action.payload.id);
      if (index !== -1) {
        state.users[index] = action.payload;
      }
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter(user => user.id !== action.payload);
      state.likedUsers = state.likedUsers.filter(id => id !== action.payload);
    },
    toggleLike: (state, action) => {
      const userId = action.payload;
      if (state.likedUsers.includes(userId)) {
        state.likedUsers = state.likedUsers.filter(id => id !== userId);
      } else {
        state.likedUsers.push(userId);
      }
    },
  },
});

export const { setUsers, updateUser, deleteUser, toggleLike } = userSlice.actions;
export default userSlice.reducer;
import { loginSuccess, logout, updateProfile, loadUserFromStorage } from '../store/slices/authSlice';
import { authAPI, usersAPI } from '../services/api';
import { type User } from '../types';
import { useAppDispatch, useAppSelector } from './redux';

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const { user, token, isAuthenticated } = useAppSelector((state) => state.auth);

  const login = async (username: string, password: string) => {
    try {
      const response = await authAPI.login(username, password);
      dispatch(loginSuccess({ user: response, token: response.token }));
      return { success: true };
    } catch (error: any) {
      const message = error.message || error.response?.data?.message || 'Login failed';
      return { success: false, error: message };
    }
  };

  const logoutUser = () => {
    dispatch(logout());
  };

  const updateUserProfile = async (userData: Partial<User>) => {
    if (!user || !token) return { success: false, error: 'Not authenticated' };
    
    try {
      const updatedUser = await usersAPI.updateUser(user.id, userData, token);
      dispatch(updateProfile(updatedUser));
      return { success: true };
    } catch (error: any) {
      return { success: false, error: error.response?.data?.message || 'Update failed' };
    }
  };

  const initializeAuth = () => {
    dispatch(loadUserFromStorage());
  };

  return {
    user,
    token,
    isAuthenticated,
    login,
    logout: logoutUser,
    updateProfile: updateUserProfile,
    initializeAuth,
  };
};
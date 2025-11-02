import React, { createContext, useState, useContext, useEffect } from 'react';
import api from './api';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // --- MOCK DATA FOR FRONTEND DEVELOPMENT ---
    // To work on the UI without a backend, you can uncomment this section.
    // This will simulate a logged-in user.
    const mockUser = {
      name: 'John Doe',
      email: 'john.doe@example.com',
      role: 'patient', // You can change this to 'donor', 'doctor', etc. to test different dashboards
    };
    setUser(mockUser);
    setLoading(false);

    // --- ORIGINAL CODE ---
    // const checkLoggedIn = async () => {
    //   try {
    //     const { data } = await api.get('/auth/me');
    //     setUser(data);
    //   } catch (err) {
    //     setUser(null);
    //   } finally {
    //     setLoading(false);
    //   }
    // };
    // checkLoggedIn();
  }, []);

  const login = async (credentials) => {
    try {
      const { data } = await api.post('/auth/login', credentials);
      setUser(data);
      return data;
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  };

  const register = async (userData) => {
    try {
      const { data } = await api.post('/auth/register', userData);
      setUser(data);
      return data;
    } catch (error) {
      console.error('Registration failed:', error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await api.post('/auth/logout');
      setUser(null);
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const value = {
    user,
    setUser,
    login,
    register,
    logout,
    loading,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
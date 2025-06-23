"use client"
import ApiManager from '@/config/api.config';
import { createContext, useContext, useEffect, useState } from 'react';


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');



    const fetchSession = async () => {
        try {
            const res = await ApiManager.get('/auth/session');
            setUser(res.data.user);
        } catch (e) {
            setUser(null);
        } finally {
            setLoading(false);
        }
    };


    const login = async (email, password) => {
        setLoading(true);
        try {
            const res = await ApiManager.post('/auth/login', { email, password });
            setUser(res.data.user);
            setMessage(res.data.message)
        } catch (error) {
            setError(error.response.data.error)
        } finally {
            setLoading(false);
        }
    };


    const signup = async (name, email, password) => {
        setLoading(true);
        try {
            const res = await ApiManager.post('/auth/signup', { name, email, password });
            setMessage(res.data.message)
        } catch (error) {
            setError(error.response.data.error)
        } finally {
            setLoading(false);
        }
    };

    const logout = async () => {
        setLoading(true);
        try {
            await ApiManager.get('/auth/logout');
            setUser(null);
            setMessage(res.data.message)

        } catch (error) {
            setError(error.response.data.error)
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchSession();
    }, []);

    return (
        <AuthContext.Provider value={{ user, loading, error, message, signup, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};


export const useAuth = () => useContext(AuthContext);

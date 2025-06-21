"use client"
import ApiManager from '@/config/api.config';
import { createContext, useContext, useEffect, useState } from 'react';


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');



    const fetchSession = async () => {
        try {
            const res = await ApiManager.get('/auth/session');
            setUser(res.data.user);
        } catch {
            setUser(null);
        } finally {
            setLoading(false);
        }
    };


    const login = async (email, password) => {
        try {
            const res = await ApiManager.post('/auth/login', { email, password });
            setUser(res.data.user);
            console.log(res.data)
        } catch (error) {
            setError(error.response.data.error)
        }
    };

    const logout = async () => {
        await ApiManager.post('/auth/logout');
        setUser(null);
    };

    useEffect(() => {
        fetchSession();
    }, []);

    return (
        <AuthContext.Provider value={{ user, loading, error, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};


export const useAuth = () => useContext(AuthContext);

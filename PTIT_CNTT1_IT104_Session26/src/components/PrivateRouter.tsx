import { useState, type ReactNode } from 'react';
import type { IAccount } from './LoginForm';
import { Navigate } from 'react-router-dom';

export const PrivateRouter = ({ children }: { children: ReactNode }) => {
    let isLogin: boolean = false;
    const [data] = useState<IAccount | null>(() => {
        const dataLocal = localStorage.getItem('account');
        if (dataLocal) return JSON.parse(dataLocal);
        return null;
    });
    if (data) isLogin = data.isLogin;

    return isLogin ? children : <Navigate to="/bai5/login"></Navigate>;
};

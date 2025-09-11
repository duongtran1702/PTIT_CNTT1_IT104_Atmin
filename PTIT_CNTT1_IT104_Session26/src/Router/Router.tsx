import { createBrowserRouter, Navigate } from 'react-router-dom';
import { ProductDetail } from '../components/ProductDetail';
import { StudentDetail } from '../components/StudentDetail';
import { Bai5 } from '../components/Bai5';
import { LoginForm } from '../components/LoginForm';
import { PrivateRouter } from '../components/PrivateRouter';
import App from '../App';
import { Account } from '../components/Account';
import { Teams } from '../components/Teams';
import { TeamsIndex } from '../components/TeamsIndex';
import { Team } from '../components/Team';
import { lazy, Suspense } from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const LazyLoadComp = lazy(() => import('../components/LazyLoadComp'));

export const routers = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/product/:id',
                element: <ProductDetail />,
            },
            {
                path: '/student/:name',
                element: <StudentDetail />,
            },
            {
                path: '/bai5',
                element: <Bai5 />,
                children: [
                    { index: true, element: <Navigate to="login" replace /> },
                    { path: 'login', element: <LoginForm /> },
                    {
                        path: 'account',
                        element: (
                            <PrivateRouter>
                                <Account />
                            </PrivateRouter>
                        ),
                    },
                ],
            },
            {
                path: '/teams',
                element: <Teams />,
                children: [
                    {
                        index: true,
                        element: <TeamsIndex />,
                    },
                    {
                        path: ':teamId',
                        element: <Team />,
                    },
                ],
            },
            {
                path: '/bai8',
                element: (
                    <Suspense
                        fallback={
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    height: '100vh',
                                }}
                            >
                                <Spin
                                    indicator={
                                        <LoadingOutlined
                                            style={{ fontSize: 40 }}
                                            spin
                                        />
                                    }
                                    tip="Đang tải dữ liệu..."
                                    size="large"
                                />
                            </div>
                        }
                    >
                        <LazyLoadComp />
                    </Suspense>
                ),
            },
        ],
    },
]);

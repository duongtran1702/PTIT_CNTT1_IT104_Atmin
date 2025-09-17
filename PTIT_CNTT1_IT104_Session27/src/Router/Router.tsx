import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom';
import App from '../App';
import Bai1 from '../components/Bai1';
import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { Contact } from '../pages/Contact';
import Bai2 from '../components/Bai2';
import ListProduct from '../pages/ListProduct';
import { ProductDetail } from '../pages/ProductDetail';
import { Bai3 } from '../components/Bai3';
import { TaskList } from '../pages/TaskList';
import { TaskDetail } from '../pages/TaskDetail';
import { Bai4 } from '../components/Bai4';
import Products from '../pages/Products';
import BlogLayout from '../pages/BlogLayout';
import Posts from '../pages/Posts';
import PostDetail from '../pages/PostDetail';
import { Bai6 } from '../components/Bai6';
import Home1 from '../pages/Home1';
import { Product } from '../pages/Product';
import { Detail } from '../pages/Detail';
import { Home2 } from '../pages/Home2';
import { About2 } from '../pages/About2';
import { NotFound } from '../pages/NotFound';
import { LoginForm } from '../pages/LoginForm';
import RegisterForm from '../pages/RegisterForm';

export const routers = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/bai1',
                element: <Bai1 />,
                children: [
                    { index: true, element: <Navigate to="home" replace /> },
                    {
                        path: 'home',
                        element: <Home />,
                    },
                    {
                        path: 'about',
                        element: <About />,
                    },
                    {
                        path: 'contact',
                        element: <Contact />,
                    },
                ],
            },
            {
                path: '/bai2',
                element: <Bai2 />,
                children: [
                    {
                        index: true,
                        element: <Navigate to="listProduct" replace />,
                    },
                    {
                        path: 'listProduct',
                        element: <ListProduct />,
                    },
                    {
                        path: 'productDetail/:idProduct',
                        element: <ProductDetail />,
                    },
                ],
            },
            {
                path: '/bai3',
                element: <Bai3 />,
                children: [
                    {
                        index: true,
                        element: <Navigate to="tasklist" replace />,
                    },
                    {
                        path: 'tasklist',
                        element: <TaskList />,
                    },
                    {
                        path: 'taskDetail/:id',
                        element: <TaskDetail />,
                    },
                ],
            },
            {
                path: '/bai4',
                element: <Bai4 />,
                children: [
                    {
                        index: true,
                        element: <Navigate to="products" replace />,
                    },
                    {
                        path: 'products',
                        element: <Products />,
                    },
                ],
            },
            {
                path: '/blog',
                element: <BlogLayout />,
                children: [
                    {
                        index: true,
                        element: <Navigate to="posts" replace />,
                    },
                    {
                        path: 'posts',
                        element: <Posts />,
                    },
                    {
                        path: 'posts/:id',
                        element: <PostDetail />,
                    },
                ],
            },
            {
                path: '/bai6',
                element: <Bai6 />,
                children: [
                    {
                        index: true,
                        element: <Navigate to="home" replace />,
                    },
                    {
                        path: 'home',
                        element: <Home1 />,
                    },
                    {
                        path: 'product',
                        element: <Product />,
                    },
                    {
                        path: 'detail',
                        element: <Detail />,
                    },
                ],
            },
            {
                path: '/bai7',
                element: <Outlet />,
                children: [
                    {
                        index: true,
                        element: <Navigate to="home" replace />,
                    },
                    {
                        path: 'home',
                        element: <Home2 />,
                    },
                    {
                        path: 'about',
                        element: <About2 />,
                    },
                    {
                        path: '*',
                        element: <NotFound />,
                    },
                ],
            },
            {
                path: '/bai8',
                element: <Outlet />,
                children: [
                    {
                        index: true,
                        element: <Navigate to="register" replace />,
                    },
                    {
                        path: 'login',
                        element: <LoginForm />,
                    },
                    {
                        path: 'register',
                        element: <RegisterForm />,
                    },
                ],
            },
        ],
    },
]);

import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Bai1 from './components/Bai1';
import Bai2 from './components/Bai2';
import { Bai3 } from './components/Bai3';
import { LoginForm } from './components/LoginForm';
import { Bai4 } from './components/Bai4';
import RegisterForm from './components/RegisterForm';
import { Bai5 } from './components/Bai5';
import NotFound from './pages/NotFound';
import { Product } from './pages/Product';
import { Detail } from './pages/Detail';
import { Bai6 } from './components/Bai6';
import { CustomLink } from './pages/CustomLink';
import { ListUser } from './pages/ListUser';
import { UserDetail } from './pages/UserDetail';

function App() {
    return (
        <>
            <nav style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                <NavLink
                    to="/bai1"
                    style={({ isActive }) => ({
                        color: isActive ? 'red' : 'black',
                        fontWeight: isActive ? 'bold' : 'normal',
                        textDecoration: 'none',
                    })}
                >
                    Bai 1
                </NavLink>

                <NavLink
                    to="/bai2"
                    style={({ isActive }) => ({
                        color: isActive ? 'red' : 'black',
                        fontWeight: isActive ? 'bold' : 'normal',
                        textDecoration: 'none',
                    })}
                >
                    Bai 2
                </NavLink>

                <NavLink
                    to="/bai3"
                    style={({ isActive }) => ({
                        color: isActive ? 'red' : 'black',
                        fontWeight: isActive ? 'bold' : 'normal',
                        textDecoration: 'none',
                    })}
                >
                    Bai 3
                </NavLink>

                <NavLink
                    to="/bai4"
                    style={({ isActive }) => ({
                        color: isActive ? 'red' : 'black',
                        fontWeight: isActive ? 'bold' : 'normal',
                        textDecoration: 'none',
                    })}
                >
                    Bai 4
                </NavLink>

                <NavLink
                    to="/bai5"
                    style={({ isActive }) => ({
                        color: isActive ? 'red' : 'black',
                        fontWeight: isActive ? 'bold' : 'normal',
                        textDecoration: 'none',
                    })}
                >
                    Bai 5
                </NavLink>

                <NavLink
                    to="/bai6"
                    style={({ isActive }) => ({
                        color: isActive ? 'red' : 'black',
                        fontWeight: isActive ? 'bold' : 'normal',
                        textDecoration: 'none',
                    })}
                >
                    Bai 6
                </NavLink>

                <NavLink
                    to="/custom-link"
                    style={({ isActive }) => ({
                        color: isActive ? 'red' : 'black',
                        fontWeight: isActive ? 'bold' : 'normal',
                        textDecoration: 'none',
                    })}
                >
                    Bai 7
                </NavLink>

                <NavLink
                    to="/list-user"
                    style={({ isActive }) => ({
                        color: isActive ? 'red' : 'black',
                        fontWeight: isActive ? 'bold' : 'normal',
                        textDecoration: 'none',
                    })}
                >
                    Bai 8
                </NavLink>
            </nav>
            <Routes>
                <Route path="/bai1" element={<Bai1 />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                </Route>

                <Route path="/bai2" element={<Bai2 />}>
                    <Route index element={<Contact />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                </Route>

                <Route path="/bai3" element={<Bai3 />}>
                    <Route index element={<Navigate to="login" replace />} />
                    <Route path="login" element={<LoginForm />} />
                    <Route path="register" element={<RegisterForm />} />
                </Route>

                <Route path="/bai4" element={<Bai4 />}>
                    <Route index element={<Navigate to="register" replace />} />
                    <Route path="register" element={<RegisterForm />} />
                    <Route path="login" element={<LoginForm />} />
                </Route>

                <Route path="/bai5" element={<Bai5 />}>
                    <Route
                        index
                        element={<Navigate to="not-found" replace />}
                    />
                    <Route path="not-found" element={<NotFound />} />
                </Route>

                <Route path="/bai6" element={<Bai6 />}>
                    <Route index element={<Home />} />
                    <Route path="product" element={<Product />} />
                    <Route path="detail" element={<Detail />} />
                </Route>

                <Route path="/custom-link" element={<CustomLink />}>
                    <Route path="home-page" element={<Home />} />
                    <Route path="*" element={<NotFound />} />
                </Route>

                <Route path="/list-user" element={<ListUser />}></Route>
                <Route path="/list-user/:id" element={<UserDetail />} />
            </Routes>
        </>
    );
}

export default App;

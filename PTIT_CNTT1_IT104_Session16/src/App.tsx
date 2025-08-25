import Bai1 from './components/SubjectList';
import Bai2 from './components/LoginStatus';
import ClickCounter from './components/ClickCounter';
import Main from './components/shoppingcart/Main';
import ThemeSwitcher from './components/ThemeSwitcher';
import UserForm from './components/UserForm';

function App() {
    return (
        <>
            <Bai1 />
            <Bai2 />
            <ClickCounter />
            <UserForm />
            <ThemeSwitcher/>
            <Main />
        </>
    );
}

export default App;

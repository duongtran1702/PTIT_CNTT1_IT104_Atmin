import './App.css';
import Counter from './components/Counter';
import FeedBackApp from './components/feedbackapp/FeedBackApp';
import FocusInput from './components/FocusInput';
import InputField from './components/InputField';
import PageTitle from './components/PageTitle';
import Timer from './components/Timer';
import UserForm from './components/UserForm';
import UserProfile from './components/UserProfile';
import Welcome from './components/Welcome';

function App() {
    return (
        <>
            <InputField />
            <UserProfile />
            <Welcome />
            <PageTitle />
            <Timer />
            <FocusInput />
            <Counter />
            <UserForm />
            <FeedBackApp/>
        </>
    );
}

export default App;

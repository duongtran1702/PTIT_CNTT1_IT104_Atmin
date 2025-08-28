import GetQuote from './components/GetQuote';
import KeyTracker from './components/KeyTracker';
import LoginForm from './components/LoginForm';
import RegisterInformation from './components/RegisterInformation';
import RenderCount from './components/RenderCount';
import ScrollToSection from './components/ScrollToSection';
import ShoppingCart from './components/ShoppingCart';
import LanguageProvider from './context/LanguageProvider';
import ThemeProvider from './context/ThemeProvider';

function App() {
    return (
        <>
            <ShoppingCart />
            <ThemeProvider />
            <RenderCount />
            <RegisterInformation />
            <GetQuote />
            <KeyTracker />
            <ScrollToSection />
            <LoginForm />
            <LanguageProvider />
        </>
    );
}

export default App;

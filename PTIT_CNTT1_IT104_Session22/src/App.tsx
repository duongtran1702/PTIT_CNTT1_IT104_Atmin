import AlertTypes from './components/AlertTypes';
import Cards from './components/Cards';
import DropDown from './components/Dropdown';
import InputTypes from './components/InputTypes';
import SpinnerTypes from './components/SpinnerTypes';
import TypesExample from './components/TypesExample';

function App() {
    return (
        <>
            <TypesExample />
            <InputTypes/>
            <Cards/>
            <DropDown/>
            <AlertTypes/>
            <SpinnerTypes/>
        </>
    );
}

export default App;

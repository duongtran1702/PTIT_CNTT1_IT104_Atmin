import Bai1 from './components/Bai1';
import Bai2 from './components/Bai2';
import ChangeColor from './components/ChangeColor';
import CheckBox from './components/CheckBox';
import CountText from './components/CountText';
import Form from './components/Form';
import Select from './components/Select';
import ToDoList from './components/todolist/ToDoList';
import Toggle from './components/Toggle';

function App() {
    return (
        <>
            <Bai1 />
            <Bai2 />
            <ChangeColor />
            <Toggle />
            <Form />
            <CountText />
            <Select />
            <CheckBox />
            <ToDoList />
        </>
    );
}

export default App;

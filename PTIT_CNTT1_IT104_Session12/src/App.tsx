import './App.css';
import { Buttons_bai8 } from './components/Buttons_bai8';
import { TableHead_bai8 } from './components/TableHead_bai8';
import { TodoListIndex } from "./pages/TodoListIndex";
// import UserLayout1 from './components/UserLayout1';
const data = [
  {
    stt: 1,
    name: "Nguyễn Văn A",
    dob: "01/01/2000",
    gender: "Nam",
    address: "Hà Nội",
  },
  {
    stt: 2,
    name: "Trần Thị B",
    dob: "02/02/2001",
    gender: "Nữ",
    address: "HCM",
  },
];
function App() {
    return (
        <>
            <table className="infoTable">
                <TableHead_bai8 />
                {data.map((d, index) => {
                    return (
                        <tr key={index}>
                            <td>{d.stt}</td>
                            <td>{d.name}</td>
                            <td>{d.dob}</td>
                            <td>{d.gender}</td>
                            <td>{d.address}</td>
                            <Buttons_bai8 />
                        </tr>
                    );
                })}
            </table>
            <TodoListIndex />
        </>
    );
}

export default App;

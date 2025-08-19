
import { Tasks_bai9 } from "../components/Tasks_bai9";
import { Search_bai9 } from "../components/Search_bai9";
import { Nav_bai9 } from "../components/Nav_bai9";
export const TodoListIndex = () => {
  return (
    <div className="col col-xl-10" style={{marginTop: "150px"}}>
      <div className="card">
        <div className="card-body p-5">
            <Search_bai9/>
            <Nav_bai9/>
            <Tasks_bai9/>
        </div>
      </div>
    </div>
  );
};

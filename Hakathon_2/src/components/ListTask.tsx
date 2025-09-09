import TaskRender from "./TaskRender";
import type {Task} from './StickyNote'
interface TasksProp{
    data:Task[]
    onDelete:(id:number)=>void
}
export default function ListTask({data,onDelete}:TasksProp) {

    return (
        <div
            className=" w-[400px] h-[505px] overflow-auto bg-[#202020] flex flex-col items-center gap-[10px] pt-4"
            style={{
                boxSizing: 'border-box',
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
            }}
        >
            {data.map((t) => (
                <TaskRender key={t.id} data={t} onDelete={onDelete}/>
            ))}
        </div>
    );
}

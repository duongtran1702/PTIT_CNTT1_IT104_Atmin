export default function Bai5() {
    return (
        <div className="bg-[#D7F2FE] rounded-[8px] w-[300px] h-[200px] flex justify-center items-center">
            <div className="bg-[#B7E8FD] rounded-[8px] relative size-[75%] p-[10px]">
                Relative parent
                <div className="absolute bottom-2 left-2 bg-[#0EA5E9] p-[5px] rounded-[8px] text-[12px] text-white font-[500]">
                    Absolute child
                </div>
            </div>
        </div>
    );
}

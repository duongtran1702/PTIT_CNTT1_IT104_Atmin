export default function Bai8() {
    return (
        <div className=" flex flex-col gap-[10px] w-[500px]">
            <div className="flex justify-start gap-[10px] ">
                {[...Array(3)].map((_, i) => (
                    <div
                        key={i + 1}
                        className="bg-[#3B82F6] font-[500] text-white size-10 flex justify-center items-center rounded-[5px]"
                    >
                        0{i + 1}
                    </div>
                ))}
            </div>

            <div className="flex justify-end gap-[10px]">
                {[...Array(3)].map((_, i) => (
                    <div
                        key={i + 1}
                        className="bg-[#3B82F6] font-[500] text-white size-10 flex justify-center items-center rounded-[5px]"
                    >
                        0{i + 1}
                    </div>
                ))}
            </div>

            <div className="flex justify-around gap-[10px]">
                {[...Array(3)].map((_, i) => (
                    <div
                        key={i + 1}
                        className="bg-[#3B82F6] font-[500] text-white size-10 flex justify-center items-center rounded-[5px]"
                    >
                        0{i + 1}
                    </div>
                ))}
            </div>

            <div className="flex justify-between gap-[10px]">
                {[...Array(3)].map((_, i) => (
                    <div
                        key={i + 1}
                        className="bg-[#3B82F6] font-[500] text-white size-10 flex justify-center items-center rounded-[5px]"
                    >
                        0{i + 1}
                    </div>
                ))}
            </div>

            <div className="flex justify-evenly gap-[10px]">
                {[...Array(3)].map((_, i) => (
                    <div
                        key={i + 1}
                        className="bg-[#3B82F6] font-[500] text-white size-10 flex justify-center items-center rounded-[5px]"
                    >
                        0{i + 1}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function Bai7() {
    return (
        <div className="grid gap-[10px] grid-cols-3 w-125 m-[20px]">
            {[...Array(9)].map((_, i) => (
                <div
                    key={i + 1}
                    className="w-40 h-12 bg-[rgb(217,70,239)] font-[500] text-white flex justify-center items-center rounded-[8px]"
                >
                    0{i + 1}
                </div>
            ))}
        </div>
    );
}

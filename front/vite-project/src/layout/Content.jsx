export default function Content({ children }) {
    //main의 className="w-[ ??? px]" main 레이아웃 너비를 지정
    return (
        <main className="shrink-0 mx-auto w-[1600px]">
            <div className="py-4  h-full w-full">
                <div className=" rounded-md border-gray-600 h-full w-full overflow-auto">
                    {children}
                </div>
            </div>
        </main>
    );
}

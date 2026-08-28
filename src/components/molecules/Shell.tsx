import ParentProps from "@/types/common/ParentProps";
import Header from "@/components/organisms/Header";

function Shell({ children }: Readonly<ParentProps>) {
    return (
        <div className="w-screen h-screen flex flex-col">
            <Header />

            <div className="w-full grow overflow-auto">
                {children}
            </div>
        </div>
    );
}

export default Shell;
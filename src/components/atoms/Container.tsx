import ParentProps from "@/types/common/ParentProps";

function Container({ children }: Readonly<ParentProps>) {
    return (
        <div className="w-full h-fit max-w-180 mx-auto overflow-auto">
            {children}
        </div>
    );
}

export default Container;
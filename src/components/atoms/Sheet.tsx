import ParentProps from "@/types/common/ParentProps";

function Sheet({ children }: Readonly<ParentProps>) {
    return (
        <div className="__Sheet">
            {children}
        </div>
    );
}

export default Sheet;
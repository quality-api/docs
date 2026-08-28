import ParentProps from "@/types/common/ParentProps";

type AsideProps = {

} & ParentProps;

function Aside({ children }: Readonly<AsideProps>) {
    return (
        <aside className="w-50 h-full p-4 bg-(--color-dark-8)">
            {children}
        </aside>
    );
}

export default Aside;
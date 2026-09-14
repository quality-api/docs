import { ReactNode } from "react";
import ParentProps from "@/types/common/ParentProps";
import Aside from "@/components/organisms/Aside";
import Footer from "@/components/organisms/Footer";

type AsideShellProps = {
    asideChildren: ReactNode;
} & ParentProps;

function AsideShell({ asideChildren, children }: Readonly<AsideShellProps>) {
    return (
        <div className="h-full flex">
            <Aside>
                {asideChildren}
            </Aside>

            <div className="h-full grow flex flex-col overflow-auto">
                <main className="h-fit grow p-4">
                    {children}
                </main>

                <Footer />
            </div>
        </div>
    );
}

export default AsideShell;
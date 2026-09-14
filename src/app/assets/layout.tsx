import AsideAnchor from "@/components/molecules/AsideAnchor";
import AsideFolder from "@/components/molecules/AsideFolder";
import AsideShell from "@/components/molecules/AsideShell";
import ParentProps from "@/types/common/ParentProps";

function Layout({ children }: Readonly<ParentProps>) {
    return (
        <AsideShell
            asideChildren={
                <nav aria-label="Sidebar navigation">
                    <AsideFolder
                        defaultOpen
                        name="Logo">
                        <AsideAnchor href="/assets/logo">
                            Downloads
                        </AsideAnchor>

                        {/* <AsideAnchor href="/assets/logo/usage">
                            Usage
                        </AsideAnchor> */}
                    </AsideFolder>
                </nav>
            }>
            {children}
        </AsideShell>
    );
}

export default Layout;
import AsideFolder from "@/components/molecules/AsideFolder";
import AsideAnchor from "@/components/molecules/AsideAnchor";
import ParentProps from "@/types/common/ParentProps";
import { Metadata } from "next";
import AsideShell from "@/components/molecules/AsideShell";

export const metadata: Metadata = {
    description: "Read the official documentation here"
};

function Layout({ children }: Readonly<ParentProps>) {
    return (
        <AsideShell
            asideChildren={
                <nav aria-label="Sidebar navigation">
                    <AsideFolder
                        defaultOpen
                        name="Quick start">
                        <AsideAnchor href="/docs">
                            Introduction
                        </AsideAnchor>

                        <AsideAnchor href="/docs/prerequisites">
                            Prerequisites
                        </AsideAnchor>

                        <AsideAnchor href="/docs/quick-start">
                            Quick start
                        </AsideAnchor>
                    </AsideFolder>

                    <AsideFolder name="More">
                        <AsideAnchor href="/docs/builder-pattern">
                            Builder pattern
                        </AsideAnchor>
                    </AsideFolder>
                </nav>
            }>
            {children}
        </AsideShell>
    );
}

export default Layout;
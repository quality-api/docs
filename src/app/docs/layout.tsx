import Aside from "@/components/organisms/Aside";
import AsideFolder from "@/components/molecules/AsideFolder";
import AsideAnchor from "@/components/molecules/AsideAnchor";
import ParentProps from "@/types/common/ParentProps";
import { Metadata } from "next";
import Container from "@/components/atoms/Container";

export const metadata: Metadata = {
    description: "Read the official documentation here"
};

function Layout({ children }: Readonly<ParentProps>) {
    return (
        <div className="h-full flex">
            <Aside>
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
            </Aside>

            <main className="h-full p-4 grow overflow-auto">
                <Container>
                    {children}
                </Container>
            </main>
        </div>
    );
}

export default Layout;
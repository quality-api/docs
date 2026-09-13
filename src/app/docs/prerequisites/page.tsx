import { Metadata } from "next";
import SheetPageTemplate from "@/components/templates/SheetPageTemplate";

export const metadata: Metadata = { title: "Prerequisites" };

function Page() {
    return (
        <SheetPageTemplate title="Prerequisites">
            <p>
                As mentioned, Quality API doesn't have any dependencies.
                Nor does it require any prerequisites other than you and your Next.js codebase.
                <br />
                Due to the incredible flexibility, you decide the dependencies entirely.
            </p>
        </SheetPageTemplate>
    );
}

export default Page;
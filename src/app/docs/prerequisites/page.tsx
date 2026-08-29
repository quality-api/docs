import { Metadata } from "next";
import Heading from "@/components/atoms/Heading";

export const metadata: Metadata = { title: "Prerequisites" };

function Page() {
    return (
        <div className="flex flex-col gap-2">
            <Heading>Prerequisites</Heading>

            <p>
                As mentioned, Quality API doesn't have any dependencies.
                Nor does it require any prerequisites other than you and your Next.js codebase.
                <br />
                Due to the incredible flexibility, you decide the dependencies entirely.
            </p>
        </div>
    );
}

export default Page;
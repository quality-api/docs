import type { Metadata } from 'next';
import Heading from "@/components/atoms/Heading";
import CliTable from "@/components/organisms/CliTable";

export const metadata: Metadata = { title: "Quick start" };

function Page() {
    return (
        <div className="flex flex-col gap-2">
            <Heading>Quick start</Heading>

            <p>To install and setup Quality API, simply run the following command in your command line:</p>

            <CliTable
                commands={{
                    npm: "npm install @quality-api/core",
                    pnpm: "pnpm add @quality-api/core",
                    yarn: "yarn add @quality-api/core",
                    bun: "bun add @quality-api/core"
                }}
            />
        </div>
    );
}

export default Page;
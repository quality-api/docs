import type { Metadata } from 'next';
import Heading from "@/components/atoms/Heading";
import CliTable from "@/components/organisms/CliTable";
import Codeblock from "@/components/molecules/Codeblock";

const yourFirstEndpointCodeSnippet = `
import QualityApi from "@quality-api/core";
import authenticate from "@/middleware/authenticate";

export const GET =
    QualityApi.start()
        .add(authenticate)
        .end(request => {
            return Response.json({ message: "The quick brown fox" });
        });
`.trimStart();

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

            <Heading variant="h2">Your first endpoint</Heading>

            <p>
                Quality API follows the <a className="_outline-on-focus" href="/docs/builder-pattern">builder pattern</a>.
                This makes adding middleware easy, and makes the code easier to structure.
                <br />
                A simple endpoint, with a middleware, would look something like this:
            </p>

            <Codeblock code={yourFirstEndpointCodeSnippet} />

            <p>
                The middleware is, naturally, added in chronological order, meaning added first means executed first.
            </p>
        </div>
    );
}

export default Page;
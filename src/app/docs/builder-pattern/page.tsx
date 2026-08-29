import type { Metadata } from 'next';
import Heading from "@/components/atoms/Heading";
import Codeblock from "@/components/molecules/Codeblock";

const theWrongWayCodeSnippet = `
import QualityApi from "@quality-api/core";

const middleware = QualityApi.createMiddleware(request => {
    const parseResult = schema.parse(request.body);
    
    request.setBody(parseResult.data);
    
    return request;
});

export default middleware;
`.trimStart();

const theRightWayCodeSnippet = `
import QualityApi from "@quality-api/core";

const middleware = QualityApi.createMiddleware(request => {
    const parseResult = schema.parse(request.body);
    
    return request.setBody(parseResult.data);
});

export default middleware;
`.trimStart();

export const metadata: Metadata = { title: "Builder pattern" };

function Page() {
    return (
        <div className="flex flex-col gap-2">
            <Heading>Builder pattern</Heading>

            <p>
                Quality API follows a half-traditional builder pattern.
                <br />
                Whenever a builder function is run, the original object isn't mutated, but rather cloned with new type parameters.
                This means that simply running a builder function, and then later returning the original object, will <i>not</i> return the new object.
                <br />
                See examples below.
            </p>

            <Heading variant="h2">
                The wrong way
            </Heading>

            <Codeblock code={theWrongWayCodeSnippet} />

            <Heading variant="h2">
                The right way
            </Heading>

            <Codeblock code={theRightWayCodeSnippet} />
        </div>
    );
}

export default Page;
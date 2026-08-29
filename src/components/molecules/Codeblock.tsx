import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import CopyButton from "@/components/atoms/CopyButton";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

type CodeblockProps = {
    code: string;
};

function Codeblock({ code }: Readonly<CodeblockProps>) {
    return (
        <div className="w-full h-fit relative">
            <SyntaxHighlighter language="typescript" style={vscDarkPlus}>
                {code}
            </SyntaxHighlighter>

            <CopyButton value={code} className="absolute top-4 right-4" />
        </div>
    );
}

export default Codeblock;
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import SyntaxHighlighter from "react-syntax-highlighter";
import CopyButton from "@/components/atoms/CopyButton";

type CodeblockProps = {
    code: string;
};

function Codeblock({ code }: Readonly<CodeblockProps>) {
    return (
        <div className="w-full h-fit relative">
            <SyntaxHighlighter language="JavaScript1.5" style={atomOneDark}>
                {code}
            </SyntaxHighlighter>

            <CopyButton value={code} className="absolute top-4 right-4" />
        </div>
    );
}

export default Codeblock;
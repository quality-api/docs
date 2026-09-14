import ParentProps from "@/types/common/ParentProps";
import Divider from "../atoms/Divider";
import clsx from "clsx";

type PageTemplateProps = {
    withMargin?: boolean;
    title: string;
} & ParentProps;

function PageTemplate({ withMargin, title, children }: Readonly<PageTemplateProps>) {
    
    const className = clsx({ "p-4": withMargin });

    return (
        <div className={className}>
            <h1 className="text-[3rem]">
                {title}
            </h1>

            <Divider />

            <div className="">
                {children}
            </div>
        </div>
    );
}

export default PageTemplate;
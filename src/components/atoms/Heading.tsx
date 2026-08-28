import { ComponentProps, ElementType } from "react";
import HashButton from "@/components/atoms/Hash";
import clsx from "clsx";

type Variant =
    "h1" |
    "h2" |
    "h3";

type HeadingProps = {
    hash?: string | null;
    variant?: Variant;
} & Omit<ComponentProps<"p">, "id">;

function Heading({
    hash = null,
    variant = "h1",
    className: _className,
    children,
    ...restProps
}: Readonly<HeadingProps>) {

    const Component = variant as ElementType<ComponentProps<"p">>;

    const className = clsx("flex items-center gap-4 group", {
        "text-[3rem] mt-8": variant === "h1",
        "text-[2rem] mt-6": variant === "h2",
        "text-[1.5rem] mt-3": variant === "h3"
    }, _className);

    return (
        <Component id={hash || undefined} className={className} {...restProps}>
            {children}

            {hash && <HashButton hash={hash} />}
        </Component>
    );
}

export default Heading;
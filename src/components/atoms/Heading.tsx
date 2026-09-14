import { ComponentProps, ElementType } from "react";
import HashButton from "@/components/atoms/Hash";
import clsx from "clsx";
import { headingToHash } from "@/functions/misc.functions";

type Variant =
    "h1" |
    "h2" |
    "h3";

type TextProps = ComponentProps<"p">;

type HeadingProps = {
    variant?: Variant;
    children: string;
} & Omit<Omit<TextProps, "id">, "children">;

function Heading({
    variant = "h1",
    className: _className,
    children,
    ...restProps
}: Readonly<HeadingProps>) {

    const Component = variant as ElementType<TextProps>;

    const className = clsx("flex items-center gap-4 group", _className);

    const hash = headingToHash(children);

    return (
        <Component id={hash} className={className} {...restProps}>
            {children}

            <HashButton hash={hash} />
        </Component>
    );
}

export default Heading;
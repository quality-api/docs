import { IconCopy } from "@tabler/icons-react";
import clsx from "clsx";
import React, { ComponentProps } from "react";

type CopyButtonProps = {
    value: string;
} & ComponentProps<"button">;

function CopyButton({ value, className: _className, onClick: _onClick, ...restProps }: Readonly<CopyButtonProps>) {

    const className = clsx(
        "w-fit h-fit p-2 bg-(--color-dark-9) rounded-sm cursor-pointer",
        _className
    );

    function onClick(e: React.MouseEvent<HTMLButtonElement>) {
        navigator.clipboard.writeText(value)
            .then(() => console.log("Copied to clipboard!"))
            .catch(error => console.log(`Could not copy to clipboard!\n${error}`));

        _onClick?.(e);
    }

    return (
        <button className={className} onClick={onClick} {...restProps}>
            <span className="sr-only">Copy code snippet</span>

            <IconCopy aria-hidden className="w-[1em] h-[1em]" />
        </button>
    );
}

export default CopyButton;
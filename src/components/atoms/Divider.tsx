import clsx from "clsx";
import { ComponentProps } from "react";

type Color = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

type DividerProps = {
    color?: Color;
} & Omit<ComponentProps<"hr">, "color">;

function Divider({ color = 5, style, className: _className, ...restProps }: Readonly<DividerProps>) {

    const className = clsx(
        "py-4",
        _className
    );

    return (
        <hr
            {...restProps}
            style={{
                borderTop: `1px solid var(--color-dark-${color})`,
                ...style
            }}
            className={className}
        />
    );
}

export default Divider;
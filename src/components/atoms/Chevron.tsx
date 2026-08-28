"use client";

import { useMemo } from "react";
import { IconChevronRight } from "@tabler/icons-react";

type Direction =
    "up" |
    "right" |
    "down" |
    "left";

type ChevronProps = {
    direction?: Direction;
};

function Chevron({ direction = "right" }: Readonly<ChevronProps>) {

    const transform = useMemo(() => {
        switch (direction) {
            case "up": return "rotate(-90deg)";
            case "right": return "none";
            case "down": return "rotate(90deg)";
            case "left": return "rotate(180deg)";
        }
    }, [direction]);

    return (
        <span>
            <IconChevronRight
                className="w-[1em] h-[1em] transition-all"
                style={{ transform }}
            />
        </span>
    );
}

export default Chevron;
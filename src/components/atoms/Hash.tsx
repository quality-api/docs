"use client";

import Link from "next/link";
import { IconLink } from "@tabler/icons-react";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

type HashButtonProps = {
    hash: string;
};

function HashButton({ hash }: Readonly<HashButtonProps>) {

    const pathname = usePathname();

    const href = useMemo(() => `${pathname}#${hash}`, [hash, pathname]);

    return (
        <Link
            replace
            href={href}
            className="w-fit opacity-0 group-hover:opacity-100 focus-visible:opacity-100 transition-all inline _outline-on-focus">
            <IconLink className="w-[1em] h-[1em]" />

            <span className="sr-only">
                Link to heading
            </span>
        </Link>
    );
}

export default HashButton;
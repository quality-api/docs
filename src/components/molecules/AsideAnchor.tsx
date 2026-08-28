"use client";

import { usePathname } from "next/navigation";
import ParentProps from "@/types/common/ParentProps";
import Link from "next/link";

type AsideAnchorProps = {
    href: string;
} & ParentProps;

function AsideAnchor({ href, children }: Readonly<AsideAnchorProps>) {

    const pathname = usePathname();

    const isActive = pathname === href;

    return (
        <Link
            href={href}
            className="p-2 font-medium block _outline-on-focus _darken-on-hover transition-all"
            style={{ color: isActive ? "var(--color-primary)" : undefined }}>
            {children}
        </Link>
    );
}

export default AsideAnchor;
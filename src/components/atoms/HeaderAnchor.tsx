"use client";

import ParentProps from "@/types/common/ParentProps";
import { usePathname } from "next/navigation";
import Link from "next/link";

type HeaderAnchorProps = {
    href: string;
} & ParentProps;

function HeaderAnchor({ href, children }: Readonly<HeaderAnchorProps>) {

    const pathname = usePathname();

    const active =
        pathname === href ||
        pathname.startsWith(`${href}/`);

    return (
        <Link
            href={href}
            className="text-md font-medium _darken-on-hover _outline-on-focus transition-all"
            style={{ color: active ? "var(--color-primary)" : undefined }}>
            {children}
        </Link>
    );
}

export default HeaderAnchor;
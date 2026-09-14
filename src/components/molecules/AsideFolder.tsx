"use client";

import ParentProps from "@/types/common/ParentProps";
import { useId, useState } from "react";
import Chevron from "@/components/atoms/Chevron";
import AsideFolderContextProvider from "@/contexts/anchor-folder-context/AsideFolderContextProvider";

type AsideFolderProps = {
    defaultOpen?: boolean;
    name: string;
} & ParentProps;

function AsideFolder({ defaultOpen = false, name, children }: Readonly<AsideFolderProps>) {

    const [show, setShow] = useState<boolean>(defaultOpen);

    function toggle() {
        setShow(prev => !prev);
    }

    const id = useId();
    const collapsibleId = `${id}-collapsible`;

    return (
        <div className="w-full">
            <button
                onClick={() => toggle()}
                aria-controls={collapsibleId}
                aria-expanded={show}
                className="w-full p-2 font-medium flex items-center gap-2 cursor-pointer _outline-on-focus _darken-on-hover transition-all truncate">
                {name}

                <Chevron direction={show ? "down" : "right"} />
            </button>

            <div
                id={collapsibleId}
                className="w-full h-fit ml-2"
                style={{ display: show ? "block" : "none" }}>
                <AsideFolderContextProvider setShow={setShow}>
                    {children}
                </AsideFolderContextProvider>
            </div>
        </div>
    );
}

export default AsideFolder;
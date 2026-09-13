"use client";

import { createContext, Dispatch, SetStateAction } from "react";

type AsideFolderContextValue = {
    setShow: Dispatch<SetStateAction<boolean>>;
};

const AsideFolderContext = createContext<AsideFolderContextValue | null>(null);

export default AsideFolderContext;
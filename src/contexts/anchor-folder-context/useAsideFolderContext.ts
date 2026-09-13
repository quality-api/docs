"use client";

import { useContext } from "react";
import AsideFolderContext from "./AsideFolderContext";

function useAsideFolderContext() {
    const context = useContext(AsideFolderContext);

    if (!context) throw new Error("Context provider missing!");

    return context;
}

export default useAsideFolderContext;
"use client";

import PackageManager from "@/types/common/PackageManager";
import { createContext, Dispatch, SetStateAction } from "react";

type CliTableContextValue = {
    packageManager: PackageManager;
    setPackageManager: Dispatch<SetStateAction<PackageManager>>;
}

const CliTableContext = createContext<CliTableContextValue | null>(null);

export default CliTableContext;
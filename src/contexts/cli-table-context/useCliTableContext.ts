"use client";

import { useContext } from "react";
import CliTableContext from "@/contexts/cli-table-context/CliTableContext";

function useCliTableContext() {
    const context = useContext(CliTableContext);

    if (!context) throw new Error("Context provider missing!");

    return context;
}

export default useCliTableContext;
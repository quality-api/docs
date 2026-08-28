"use client";

import PackageManager from "@/types/common/PackageManager";
import { useState } from "react";
import CliTableButton from "@/components/atoms/CliTableButton";
import CliTableContextProvider from "@/contexts/cli-table-context/CliTableContextProvider";
import { IconCopy } from "@tabler/icons-react";
import CopyButton from "@/components/atoms/CopyButton";

type CliTableProps = {
    commands: Record<PackageManager, string>;
};

function CliTable({ commands }: Readonly<CliTableProps>) {

    const [packageManager, setPackageManager] = useState<PackageManager>("npm");

    return (
        <div className="w-full group bg-(--color-dark-8)">
            <fieldset className="flex _outline-on-focus">
                <legend className="sr-only">
                    Select your package manager and display its command variant
                </legend>

                <CliTableContextProvider
                    packageManager={packageManager}
                    setPackageManager={setPackageManager}>
                    <CliTableButton packageManager="npm" displayName="npm" />
                    <CliTableButton packageManager="pnpm" displayName="pnpm" />
                    <CliTableButton packageManager="yarn" displayName="Yarn" />
                    <CliTableButton packageManager="bun" displayName="Bun" />
                </CliTableContextProvider>
            </fieldset>

            <div className="relative">
                <code className="block p-2">
                    {commands[packageManager]}
                </code>

                <CopyButton
                    value={commands[packageManager]}
                    className="absolute top-1 right-1"
                />
            </div>
        </div>
    );
}

export default CliTable;
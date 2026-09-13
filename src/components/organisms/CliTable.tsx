"use client";

import PackageManager from "@/types/common/PackageManager";
import { useEffect, useState } from "react";
import CliTableButton from "@/components/atoms/CliTableButton";
import CliTableContextProvider from "@/contexts/cli-table-context/CliTableContextProvider";
import CopyButton from "@/components/atoms/CopyButton";
import s_packageManager from "@/zod-schemas/s_packageManager";

type CliTableProps = {
    commands: Record<PackageManager, string>;
};

function CliTable({ commands }: Readonly<CliTableProps>) {

    const [hasSyncedWithLocalStorage, setHasSyncedWithLocalStorage] = useState<boolean>(false);
    const [packageManager, setPackageManager] = useState<PackageManager>("npm");

    useEffect(() => {
        const localStorageValue = localStorage.getItem("platform-manager");

        const parseResult = s_packageManager.safeParse(localStorageValue);

        if (parseResult.success) setPackageManager(parseResult.data);

        setHasSyncedWithLocalStorage(true);
    }, []);

    useEffect(() => {
        if (!hasSyncedWithLocalStorage) return;

        localStorage.setItem("platform-manager", packageManager);
    }, [packageManager]);

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
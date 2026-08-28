"use client";

import PackageManager from "@/types/common/PackageManager";
import useCliTableContext from "@/contexts/cli-table-context/useCliTableContext";

type CliTableButtonProps = {
    packageManager: PackageManager;
    displayName: string;
};

function CliTableButton({ packageManager, displayName }: Readonly<CliTableButtonProps>) {

    const {
        packageManager: currentPackageManager,
        setPackageManager: setCurrentPackageManager
    } = useCliTableContext();

    function onChange() {
        setCurrentPackageManager(packageManager);
    }

    const isChecked = currentPackageManager === packageManager;

    return (
        <>
            <input
                checked={isChecked}
                id={packageManager}
                type="radio"
                value={packageManager}
                className="sr-only _outline-on-focus"
                onChange={onChange}
            />

            <label
                htmlFor={packageManager}
                className="w-fit p-2 block grow cursor-pointer border-solid border-b-2! transition-all _outline-on-focus _darken-on-hover"
                style={{ borderBottomColor: isChecked ? "var(--color-primary)" : "var(--color-dark-7)" }}>
                {displayName}
            </label>
        </>
    );
}

export default CliTableButton;
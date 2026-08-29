import PackageManager from "@/types/common/PackageManager";
import { Dispatch, SetStateAction } from "react";
import CliTableContext from "@/contexts/cli-table-context/CliTableContext";
import ParentProps from "@/types/common/ParentProps";

type CliTableContextProviderProps = {
    packageManager: PackageManager;
    setPackageManager: Dispatch<SetStateAction<PackageManager>>;
} & ParentProps;

function CliTableContextProvider({ packageManager, setPackageManager, children }: Readonly<CliTableContextProviderProps>) {
    return (
        <CliTableContext.Provider value={{ packageManager, setPackageManager }}>
            {children}
        </CliTableContext.Provider>
    );
}

export default CliTableContextProvider;
import { Dispatch, SetStateAction } from "react";
import AsideFolderContext from "./AsideFolderContext";
import ParentProps from "@/types/common/ParentProps";

type AsideFolderContextProviderProps = {
    setShow: Dispatch<SetStateAction<boolean>>;
} & ParentProps;

function AsideFolderContextProvider({ setShow, children }: Readonly<AsideFolderContextProviderProps>) {
    return (
        <AsideFolderContext.Provider value={{ setShow }}>
            {children}
        </AsideFolderContext.Provider>
    );
}

export default AsideFolderContextProvider;
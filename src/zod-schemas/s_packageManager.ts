import PackageManager from "@/types/common/PackageManager";
import z from "zod";

const s_packageManager = z.literal(["npm", "pnpm", "yarn", "bun"]).transform(pm => pm as PackageManager);

export default s_packageManager;
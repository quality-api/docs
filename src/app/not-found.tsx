import NotFoundPage from "@/components/pages/NotFoundPage";
import { Metadata } from "next";

export const metadata: Metadata = { title: "Page not found" };

function Page() {
    return <NotFoundPage />;
}

export default Page;
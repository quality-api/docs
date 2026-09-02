import type { Metadata } from 'next';
import ComingSoonPage from "@/components/pages/ComingSoonPage";

export const metadata: Metadata = { title: "Coming soon" };

function Page() {
    return <ComingSoonPage />;
}

export default Page;
import type { Metadata } from 'next';
import ReleaseNotesPage from "@/components/pages/ReleaseNotesPage";

export const metadata: Metadata = { title: "Release notes" };

function Page() {
    return <ReleaseNotesPage />;
}

export default Page;
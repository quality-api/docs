import ImageDownload from "@/components/molecules/ImageDownload";
import PageTemplate from "@/components/templates/PageTemplate";
import { Metadata } from "next";

export const metadata: Metadata = { title: "Logo downloads" };

function Page() {
    return (
        <PageTemplate title="Logo downloads">
            <div className="mt-4 flex gap-4">
                <ImageDownload src="/media/logo.png" alt="Quality API logo" name="logo.png" />
                <ImageDownload src="/media/logo.svg" alt="Quality API logo" name="logo.svg" />
            </div>
        </PageTemplate>
    );
}

export default Page;
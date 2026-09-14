import ParentProps from "@/types/common/ParentProps";
import Sheet from "../atoms/Sheet";
import PageTemplate from "./PageTemplate";
import Container from "../atoms/Container";

type SheetPageTemplateProps = {
    title: string;
} & ParentProps;

function SheetPageTemplate({ title, children }: Readonly<SheetPageTemplateProps>) {
    return (
        <PageTemplate title={title}>
            <Container>
                <Sheet>
                    {children}
                </Sheet>
            </Container>
        </PageTemplate>
    );
}

export default SheetPageTemplate;
import ParentProps from "@/types/common/ParentProps";
import Container from "../atoms/Container";
import Heading from "../atoms/Heading";
import Divider from "../atoms/Divider";
import Sheet from "../atoms/Sheet";

type SheetPageTemplateProps = {
    title: string;
} & ParentProps;

function SheetPageTemplate({ title, children }: Readonly<SheetPageTemplateProps>) {
    return (
        <Container>
            <Heading>
                {title}
            </Heading>

            <Divider />

            <Sheet>
                {children}
            </Sheet>
        </Container>
    );
}

export default SheetPageTemplate;
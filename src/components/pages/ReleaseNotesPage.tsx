import ReleaseNoteList from "@/components/organisms/ReleaseNoteList";
import PageTemplate from "../templates/PageTemplate";
import Container from "../atoms/Container";

type ReleaseNotesPageProps = {

};

function ReleaseNotesPage({ }: Readonly<ReleaseNotesPageProps>) {
    return (
        <PageTemplate withMargin title="Release notes">
            <Container>
                <ReleaseNoteList />
            </Container>
        </PageTemplate>
    );
}

export default ReleaseNotesPage;
import Container from "@/components/atoms/Container";
import Heading from "@/components/atoms/Heading";
import ReleaseNoteList from "@/components/organisms/ReleaseNoteList";

type ReleaseNotesPageProps = {

};

function ReleaseNotesPage({ }: Readonly<ReleaseNotesPageProps>) {
    return (
        <Container>
            <Heading>Release notes</Heading>

            <ReleaseNoteList />
        </Container>
    );
}

export default ReleaseNotesPage;
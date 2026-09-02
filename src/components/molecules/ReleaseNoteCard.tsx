type ReleaseNoteCardProps = {
    title: string;
    body?: string | null;
    url: string;
};

function ReleaseNoteCard({
    title,
    body = null,
    url
}: Readonly<ReleaseNoteCardProps>) {
    return (
        <li className="p-4 flex flex-col gap-2 bg-(--color-dark-8)">
            <h2 className="text-2xl">
                {title}
            </h2>

            <hr className="border-t! border-(--color-dark-7)! border-solid" />

            {body ? (
                <pre className="">{body}</pre>
            ) : (
                <p className="italic text-(--color-foreground-darker)!">No description given</p>
            )}

            <hr className="border-t! border-(--color-dark-7)! border-solid" />

            <a
                href={url}
                target="_blank"
                className="w-fit text-(--color-primary)! _outline-on-focus">
                View on GitHub
            </a>
        </li>
    );
}

export default ReleaseNoteCard;
import ParentProps from "@/types/common/ParentProps";

type HeaderSocialAnchorProps = {
    href: string;
    screenreaderName: string;
} & ParentProps;

function HeaderSocialAnchor({ href, screenreaderName, children }: Readonly<HeaderSocialAnchorProps>) {
    return (
        <a
            href={href}
            title={screenreaderName}
            target="_blank"
            className="w-fit h-fit text-3xl _outline-on-focus">
            <span className="sr-only">{screenreaderName}</span>

            {children}
        </a>
    );
}

export default HeaderSocialAnchor;
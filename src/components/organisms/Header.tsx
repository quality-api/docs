import Logo from "@/components/atoms/Logo";
import HeaderAnchor from "@/components/atoms/HeaderAnchor";
import HeaderSocialAnchor from "@/components/atoms/HeaderSocialAnchor";
import { IconBrandGithub, IconBrandNpm } from "@tabler/icons-react";

type HeaderProps = {

};

function Header({ }: Readonly<HeaderProps>) {
    return (
        <header className="w-full h-fit p-4 flex justify-between items-center bg-(--color-dark-7)">
            <Logo />

            <nav
                aria-label="Header navigation"
                className="pl-8 flex items-center gap-8">
                <HeaderAnchor href="/docs">
                    Docs
                </HeaderAnchor>

                <HeaderAnchor href="/assets">
                    Assets
                </HeaderAnchor>

                <HeaderAnchor href="/">
                    GitHub
                </HeaderAnchor>
            </nav>

            <nav
                aria-label="Socials"
                className="h-fit ml-auto flex gap-8">
                <HeaderSocialAnchor
                    href="https://github.com/quality-api"
                    screenreaderName="GitHub">
                    <IconBrandGithub className="w-[1em] h-[1em]" />
                </HeaderSocialAnchor>

                <HeaderSocialAnchor
                    href="https://www.npmjs.com/package/@quality-api/core"
                    screenreaderName="npm">
                    <IconBrandNpm className="w-[1em] h-[1em]" />
                </HeaderSocialAnchor>
            </nav>
        </header>
    );
}

export default Header;
import Logo from "@/components/atoms/Logo";
import HeaderAnchor from "@/components/atoms/HeaderAnchor";

type HeaderProps = {

};

function Header({ }: Readonly<HeaderProps>) {
    return (
        <header className="w-full h-fit p-4 flex bg-(--color-dark-7)">
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
        </header>
    );
}

export default Header;
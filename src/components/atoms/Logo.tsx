type LogoProps = {

};

function Logo({ }: Readonly<LogoProps>) {
    return (
        <a
            href="/"
            className="w-fit h-fit block _outline-on-focus"
            aria-label="Home">
            <img
                alt="Quality API logo"
                src="/media/logo.svg"
                title="Quality API logo"
                className="w-12 h-12"
            />
        </a>
    );
}

export default Logo;
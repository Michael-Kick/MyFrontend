import NavLink from "./NavLink";

const Navbar = () => {
    // Links für die Navigation
    const navLinks = [
        {href: "/", label: "Home"},
        {href: "/projects", label: "Projects"},
        {href: "/resume", label: "Resume"},
        {href: "/about", label: "About"},
        {href: "/settings", label: "Settings"},
    ];

    return (
        <div className="
            bg-background
            border-b
            border-contrast">
            <nav
                className="
            w-full
            z-50
            top-0
            px-6
            max-w-screen-xl
            m-auto
            text-text
            flex
            justify-between
            items-stretch
            h-20"
            >
                {/* Logo */}
                <div className="flex text-3xl">
                    <NavLink href="/public" label="MyBrand"/>
                </div>

                {/* Desktop Menu */}
                <div className="flex text-xl">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.href}
                            href={link.href}
                            label={link.label}/>
                    ))}
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
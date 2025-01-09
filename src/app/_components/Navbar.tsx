import NavLink from "./NavLink";

const Navbar = () => {
    // Links für die Navigation
    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/projects", label: "Projects" },
        { href: "/about", label: "About" },
        { href: "/settings", label: "Settings" },
    ];

    return (

        <nav className="bg-background border-b border-contrast w-full z-50 top-0 text-text">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <NavLink href="/" label="MyBrand" />
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-6">
                        {navLinks.map((link) => (
                            <NavLink key={link.href} href={link.href} label={link.label} />
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
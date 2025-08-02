import {Link} from "react-router-dom";
import {Menu, X, ChevronDown} from "lucide-react";
import {useState} from "react";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [aboutOpen, setAboutOpen] = useState(false);

    const toggleAbout = () => {
        setProductsOpen(false);
        setAboutOpen((prev) => !prev);
    }

    const [productsOpen, setProductsOpen] = useState(false);

    const toggleProducts = () => {
        setAboutOpen(false);
        setProductsOpen(!productsOpen);
    };

    return (
        <nav className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo and title */}
                    <div className="flex items-center space-x-2">
                        <div className="w-12 h-12 flex items-center justify-center">
                            <img
                                src="/enjosack_logo.png"
                                alt="Modern Agricultural Technology"
                                className="mix-blend-multiply"
                            />
                        </div>
                        <span className="font-bold text-sm sm:text-xl text-foreground">
                          ENJO-SAK GLOBAL PRIVATE LIMITED
                        </span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 relative">
                        {/* Home (optional if already in logo) */}
                        <Link
                            to="/"
                            className="text-muted-foreground hover:text-primary transition-colors font-medium"
                        >
                            Home
                        </Link>

                        {/* About Dropdown */}
                        <div className="relative">
                            <button
                                onClick={toggleAbout}
                                className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors font-medium"
                            >
                                About
                                <ChevronDown
                                    size={16}
                                    className={`transition-transform duration-300 ${aboutOpen ? "rotate-180" : ""}`}
                                />
                            </button>

                            {aboutOpen && (
                                <div
                                    className="absolute top-full mt-2 left-0 bg-white shadow-lg rounded-md w-64 z-50 py-2 space-y-1 border border-muted"
                                    onMouseLeave={() => setAboutOpen(false)} // Optional for better UX
                                >
                                    <Link
                                        to="/about/company-overview"
                                        className="block px-4 py-2 text-sm text-muted-foreground hover:bg-muted/30 hover:text-primary"
                                        onClick={() => setAboutOpen(false)}
                                    >
                                        Company Overview
                                    </Link>
                                    <Link
                                        to="/about/vision-mission"
                                        className="block px-4 py-2 text-sm text-muted-foreground hover:bg-muted/30 hover:text-primary"
                                        onClick={() => setAboutOpen(false)}
                                    >
                                        Vision and Mission
                                    </Link>
                                    <Link
                                        to="/about/leadership"
                                        className="block px-4 py-2 text-sm text-muted-foreground hover:bg-muted/30 hover:text-primary"
                                        onClick={() => setAboutOpen(false)}
                                    >
                                        Leadership
                                    </Link>
                                    <Link
                                        to="/about/awards-certifications"
                                        className="block px-4 py-2 text-sm text-muted-foreground hover:bg-muted/30 hover:text-primary"
                                        onClick={() => setAboutOpen(false)}
                                    >
                                        Awards and Certifications
                                    </Link>
                                </div>
                            )}
                        </div>

                        {/* Products Dropdown */}
                        <div className="relative">
                            <button
                                onClick={toggleProducts}
                                className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors font-medium"
                            >
                                Products
                                <ChevronDown
                                    size={16}
                                    className={`transition-transform duration-300 ${productsOpen ? "rotate-180" : ""}`}
                                />
                            </button>

                            {productsOpen && (
                                <div
                                    className="absolute top-full mt-2 left-0 bg-white shadow-lg rounded-md w-64 z-50 py-2 space-y-1 border border-muted"
                                    onMouseLeave={() => setProductsOpen(false)} // Optional UX improvement
                                >
                                    <Link
                                        to="/products/vegetables"
                                        className="block px-4 py-2 text-sm text-muted-foreground hover:bg-muted/30 hover:text-primary"
                                        onClick={() => setProductsOpen(false)}
                                    >
                                        Vegetables
                                    </Link>
                                    <Link
                                        to="/products/fruits"
                                        className="block px-4 py-2 text-sm text-muted-foreground hover:bg-muted/30 hover:text-primary"
                                        onClick={() => setProductsOpen(false)}
                                    >
                                        Fruits
                                    </Link>
                                    <Link
                                        to="/spices"
                                        className="block px-4 py-2 text-sm text-muted-foreground hover:bg-muted/30 hover:text-primary"
                                        onClick={() => setProductsOpen(false)}
                                    >
                                        Spices
                                    </Link>
                                    <Link
                                        to="/products/pulses"
                                        className="block px-4 py-2 text-sm text-muted-foreground hover:bg-muted/30 hover:text-primary"
                                        onClick={() => setProductsOpen(false)}
                                    >
                                        Pulses
                                    </Link>
                                    <Link
                                        to="/products/grains"
                                        className="block px-4 py-2 text-sm text-muted-foreground hover:bg-muted/30 hover:text-primary"
                                        onClick={() => setProductsOpen(false)}
                                    >
                                        Millets
                                    </Link>
                                    <Link
                                        to="/products/dryfruits-nuts"
                                        className="block px-4 py-2 text-sm text-muted-foreground hover:bg-muted/30 hover:text-primary"
                                        onClick={() => setProductsOpen(false)}
                                    >
                                        Dry Fruits & Nuts
                                    </Link>

                                    <Link
                                        to="/dehydrated-foods"
                                        className="block px-4 py-2 text-sm text-muted-foreground hover:bg-muted/30 hover:text-primary"
                                        onClick={() => setProductsOpen(false)}
                                    >
                                        Dehydrated Foods
                                    </Link>

                                    <Link
                                        to="/engineering-solutions"
                                        className="block px-4 py-2 text-sm text-muted-foreground hover:bg-muted/30 hover:text-primary"
                                        onClick={() => setProductsOpen(false)}
                                    >
                                        Engineering Solutions
                                    </Link>
                                </div>
                            )}
                        </div>

                        <Link
                            to="/gallery"
                            className="text-muted-foreground hover:text-primary transition-colors font-medium"
                        >
                            Gallery
                        </Link>

                        <Link
                            to="/contact"
                            className="text-muted-foreground hover:text-primary transition-colors font-medium"
                        >
                            Contact
                        </Link>
                    </div>


                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button onClick={() => setOpen(!open)}
                                className="text-muted-foreground hover:text-primary transition-colors">
                            <Menu className="h-6 w-6"/>
                        </button>
                    </div>
                </div>
            </div>

            {/* Drawer / Mobile Menu */}
            {open && (
                <div className="md:hidden bg-white border-t px-4 py-4 space-y-4 shadow-lg z-40">
                    <div className="flex justify-end">
                        <button onClick={() => setOpen(false)} className="text-muted-foreground">
                            <X className="h-6 w-6"/>
                        </button>
                    </div>
                    <a href="#about" onClick={() => setOpen(false)}
                       className="block text-muted-foreground hover:text-primary font-medium">
                        About
                    </a>
                    <a href="#products" onClick={() => setOpen(false)}
                       className="block text-muted-foreground hover:text-primary font-medium">
                        Products
                    </a>
                    <Link to="/spices" onClick={() => setOpen(false)}
                          className="block text-muted-foreground hover:text-primary font-medium">
                        Spices
                    </Link>
                    <a href="#sustainability" onClick={() => setOpen(false)}
                       className="block text-muted-foreground hover:text-primary font-medium">
                        Sustainability
                    </a>
                    <a href="#contact" onClick={() => setOpen(false)}
                       className="block text-muted-foreground hover:text-primary font-medium">
                        Contact
                    </a>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
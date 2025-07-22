import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const aboutItems = [
    { title: "Company Overview", href: "/about" },
    { title: "Vision and Mission", href: "/about#vision-mission" },
    { title: "Leadership", href: "/about#leadership" },
    { title: "Awards and Certifications", href: "/about#certifications" },
  ];

  const productItems = [
    { title: "Vegetables", href: "/products#vegetables" },
    { title: "Fruits", href: "/products#fruits" },
    { title: "Spices", href: "/spices" },
    { title: "Millets", href: "/products#millets" },
    { title: "Pulses", href: "/products#pulses" },
    { title: "Grains and Cereals", href: "/products#grains" },
    { title: "Dry Fruits and Nuts", href: "/products#dry-fruits" },
    { title: "Dehydrated Products", href: "/products#dehydrated" },
    { title: "Engineering Goods", href: "/products#engineering" },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and title */}
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 flex items-center justify-center">
              <img
                src="./enjosack_logo.png"
                alt="ENJO-SAK GLOBAL"
                className="mix-blend-multiply"
              />
            </div>
            <Link to="/" className="font-bold text-sm sm:text-xl text-foreground">
              ENJO-SAK GLOBAL PRIVATE LIMITED
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-muted-foreground hover:text-primary transition-colors font-medium ${
                location.pathname === '/' ? 'text-primary' : ''
              }`}
            >
              Home
            </Link>

            {/* About Dropdown */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-muted-foreground hover:text-primary font-medium">
                    About
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      {aboutItems.map((item) => (
                        <li key={item.title}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={item.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">{item.title}</div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Products Dropdown */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-muted-foreground hover:text-primary font-medium">
                    Products
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[500px] gap-3 p-4 md:grid-cols-2">
                      {productItems.map((item) => (
                        <li key={item.title}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={item.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">{item.title}</div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link 
              to="/gallery" 
              className={`text-muted-foreground hover:text-primary transition-colors font-medium ${
                location.pathname === '/gallery' ? 'text-primary' : ''
              }`}
            >
              Gallery
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setOpen(!open)}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Menu className="h-6 w-6"/>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t px-4 py-4 space-y-4 shadow-lg z-40">
          <div className="flex justify-end">
            <button onClick={() => setOpen(false)} className="text-muted-foreground">
              <X className="h-6 w-6"/>
            </button>
          </div>
          
          <Link 
            to="/" 
            onClick={() => setOpen(false)}
            className="block text-muted-foreground hover:text-primary font-medium"
          >
            Home
          </Link>

          {/* Mobile About Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center text-muted-foreground hover:text-primary font-medium">
              About <ChevronDown className="h-4 w-4 ml-1" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {aboutItems.map((item) => (
                <DropdownMenuItem key={item.title} asChild>
                  <Link to={item.href} onClick={() => setOpen(false)}>
                    {item.title}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Mobile Products Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center text-muted-foreground hover:text-primary font-medium">
              Products <ChevronDown className="h-4 w-4 ml-1" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {productItems.map((item) => (
                <DropdownMenuItem key={item.title} asChild>
                  <Link to={item.href} onClick={() => setOpen(false)}>
                    {item.title}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link 
            to="/gallery" 
            onClick={() => setOpen(false)}
            className="block text-muted-foreground hover:text-primary font-medium"
          >
            Gallery
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
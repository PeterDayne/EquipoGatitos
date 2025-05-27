import reactLogo from "./assets/react.svg";
import logoGato from "./assets/pngegg.png";
import { Link,useNavigate } from "react-router-dom";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { BellIcon } from "@heroicons/react/24/outline";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

var navigation = [
  { title: "Home", href: "/Home", ComponentName: true },
  { title: "Products", href: "/ProductGrid", ComponentName: true },
  { title: "About", href: "/About", ComponentName: false },
  { title: "CRUD", href: "/CRUD", ComponentName: false },
  { title: "Team", href: "/Team", ComponentName: false },
  { title: "Contact", href: "/Contact", ComponentName: false },
];
function Nav({ onLogout }) {
  const navigate = useNavigate();
  const handleSignOut = (e) => {
    e.preventDefault();
    onLogout();
    navigate("/login");
  };
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        {/* Logo */}
        <a
          href="/Home"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={logoGato} className="h-8" alt="Logo" />
          <span className="self-center text-2xl whitespace-nowrap dark:text-white">
            Gatitos Shop
          </span>
        </a>

        {/* Menu de navegación */}
        <div className="hidden md:flex space-x-8 rtl:space-x-reverse">
          {navigation.map((e) => (
            <a
              key={e.title}
              href={e.href}
              className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              {e.title}
            </a>
          ))}
        </div>

        {/* Notificaciones y perfil */}
        <div className="flex items-center space-x-4">
          {/* Botón de notificaciones */}
          <button
            type="button"
            className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
          >
            <span className="sr-only">View notifications</span>
            <BellIcon className="size-6" aria-hidden="true" />
          </button>

          <Link
            to="/checkout"
            className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
            <span className="sr-only">Cart</span>
            <ShoppingCartIcon className="size-6" aria-hidden="true" />
          </Link>

          {/* Menú del perfil */}
          <Menu as="div" className="relative">
            <div>
              <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                <span className="sr-only">Open user menu</span>
                <img
                  className="size-8 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?...&q=80"
                  alt=""
                />
              </MenuButton>
            </div>
            <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none">
              <MenuItem>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Your Profile
                </a>
              </MenuItem>
              <MenuItem>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Settings
                </a>
              </MenuItem>
              <MenuItem>
                <a
                  href="#"
                  onClick={handleSignOut}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Sign out
                </a>
              </MenuItem>
            </MenuItems>
          </Menu>
        </div>
      </div>
    </nav>
  );
}

export default Nav;

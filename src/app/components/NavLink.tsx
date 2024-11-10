
// export default NavLink;
import Link from "next/link";

// Define props for NavLink
interface NavLinkProps {
  href: string;
  title: string;
}

// NavLink functional component
const NavLink: React.FC<NavLinkProps> = ({ href, title }) => {
  return (
    <Link href={href} className="block py-2 pl-2 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white">
      {title}
    </Link>
  );
};

export default NavLink;

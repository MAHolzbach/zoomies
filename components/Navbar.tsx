import Image from "next/image";
import Link from "next/link";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <nav className="flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
      <Link href="/" className="flex items-center gap-1">
        <Image alt="Logo" src="/icons/logo.svg" width={32} height={32} className="max-sm:size-10" />
        <h1 className="text-white text-[26px] font-extrabold max-sm:hidden">YOOM</h1>
      </Link>
      <div className="flex-between gap-5">
        <MobileNav />
      </div>
      {/* <Login /> */}
    </nav>
  );
};

export default Navbar;

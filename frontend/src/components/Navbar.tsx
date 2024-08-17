import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-black rounded-tr-[10px] rounded-tl-[10px] text-white p-4 flex justify-center md:gap-[650px] items-center">
      <div className="flex items-center space-x-4">
        <div className="">
          <img src="/logo.png" alt="Logo" className="h-8 mr-4" />
        </div>
        <Link href="/" className="text-lg font-semibold">
          Abstract
        </Link>
        <span className="text-gray-500">|</span>
        <a href="#" className="text-lg">
          Help Center
        </a>
      </div>
      <div>
        <button className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-md">
          Submit a request
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

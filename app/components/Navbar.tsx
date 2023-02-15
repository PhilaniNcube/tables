import Link from "next/link";

const Navbar = () => {
  return (
    <header className="max-w-screen-2xl m-auto bg-white">
      <nav className="bg-white p-2 flex justify-between">
        <Link href="/" className="font-bold text-gray-700 text-2xl">
          {" "}
          OpenTable{" "}
        </Link>
        <div>
          <div className="flex">
            <Link
              href="/sign-in"
              className="bg-blue-400 text-white border p-1 px-4 rounded mr-3"
            >
              Sign in
            </Link>
            <Link href="/sign-up" className="border p-1 px-4 rounded">
              Sign up
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;

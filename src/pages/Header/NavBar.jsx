import usericon from "../../assets/user.png";

const navOption = (
  <>
    <li>
      <ul className="p-2">
        <li>
          <a className="hover:text-orange-500">Home</a>
        </li>
        <li>
          <a className="hover:text-orange-500">Details</a>
        </li>
        <li>
          <a className="hover:text-orange-500">Category</a>
        </li>
        <li>
          <a className="hover:text-orange-500 ">My Favorites</a>
        </li>
        <li>
          <a className="hover:text-orange-500">Profile</a>
        </li>
        <li>
          <a className="hover:text-orange-500">Log in/Sign Up</a>
        </li>
      </ul>
    </li>
  </>
);

const NavBar = () => {
  return (
    <div>
      <div className="navbar fixed z-10 bg-opacity-30 bg-white text-black max-w-full max-auto px-4 md:px-8 lg:px-24">
        <div className="max-w-screen-lg mx-auto navbar-start">
          <div className="dropdown lg:hidden"></div>
          <a className="btn btn-ghost text-xl md:text-2xl lg:text-3xl">pti.</a>
        </div>
        <div className="navbar-center lg:flex">
          <label className="relative block">
            <span className="sr-only">Search</span>
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </span>
            <input
              className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm md:text-base lg:text-lg"
              placeholder="Search Audiobook"
              type="text"
              name="search"
            />
          </label>
          <ul className="menu menu-horizontal px-1 bg-white rounded-xl mx-2">
            <li>
              <details>
                <summary>MENU</summary>
                <ul className="p-2 text-black">{navOption}</ul>
              </details>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle bg-orange-500 hidden lg:block">
            <div className="indicator">
              <div className="w-5 rounded-full">
                <img alt="User Icon" src={usericon} />
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

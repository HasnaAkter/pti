const navOption = (
  <>
    <li>
      
      <ul className="p-2">
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>Details</a>
        </li>
        <li>
          <a>Category</a>
        </li>
        <li>
          <a>My Favorites</a>
        </li>
        <li>
          <a>Profile</a>
        </li>
        <li>
          <a>Log in/Sign Up</a>
        </li>
      </ul>
    </li>
   
  </>
);

const NavBar = () => {
  return (
    <div>
      <div className="navbar fixed z-10 bg-opacity-30 text-black max-w-full max-auto px-24">
        <div className="max-w-screen-lg mx-auto navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOption}
            </ul>
          </div>
         
          <a className="btn btn-ghost text-xl">PTI.</a>
        </div>
        <div className="navbar-center hidden lg:flex">
        <div className="relative">
            <input
              type="text"
              placeholder="Search Audio Books"
              className="input input-bordered"
            />
            <button className="absolute top-0 right-0 rounded-l-none btn btn-square btn-ghost">
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
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </button>
          </div>
          <ul className="menu menu-horizontal px-1 bg-white rounded-xl mx-2">
            <li>
              <details>
                <summary>MENU</summary>
                <ul className="p-2 text-black">
                  {navOption}
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle bg-orange-500">
            <div className="indicator">
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
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

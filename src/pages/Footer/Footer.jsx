
import footerimg from '../../assets/Image2.png';
//import './Footer.css'; // Import your CSS file for styling

const Footer = () => {
  return (
    <div>
      <footer className="footer px-4 sm:px-8 md:px-16 lg:px-24 pt-5 bg-orange-500 text-neutral-content">
        <aside className="mb-4 sm:mb-8">
          <div className="flex flex-col sm:flex-row items-center bg-white p-2 rounded-[25px]">
            <input
              type="email"
              placeholder="Enter your email"
              className="input mb-2 sm:mb-0"
            />
            <button className="btn bg-orange-500 rounded-[25px] ">
              Subscribe
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2 sm:ml-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>
          <p className="py-4 sm:py-8 text-black font-bold">
            pti.
            <br />
            Copyright © 2024 - All rights reserved{' '}
            <span>
              <button className="btn btn-ghost btn-circle bg-white">
                <div className="indicator">
                  <a className="text-orange-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="fill-current"
                    >
                      {/* SVG path for the first button */}
                    </svg>
                  </a>
                </div>
              </button>
              {/* Add similar buttons for the other icons */}
            </span>
          </p>
        </aside>
        <nav className="mb-4 sm:mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-4 sm:py-8">
            {/* Add your navigation buttons here */}
          </div>
        </nav>
        <nav>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <img
              src={footerimg}
              alt="Footer Logo"
              className="w-full h-auto"
            />
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;

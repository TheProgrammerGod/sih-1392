const Footer = () => {
  return (
    <footer className="text-[#ffffff] body-font">
      <div className="bg-gray-800 ">
        <div className="container pb-4 sm:pt-4 pt-4 mx-auto flex items-center sm:flex-row flex-col ">
          <p className="text-sm text-[#ffffff] sm:ml-6 sm:mt-0 mt-4">
            © 2023 TRIVAS —
            <a
              href="/"
              title="footer-link"
              rel="noopener noreferrer"
              className="text-[#ffffff] ml-1"
            >
              @TRIVAS
            </a>
          </p>
          <p className="text-base my-1 items-center mx-auto text-[#ffffff] ">
            Coded with 💖 and ☕ by Team Trivas
          </p>
          <span className="inline-flex  sm:mt-0 mt-2 mb-2 sm:mb-0 justify-center items-center sm:justify-start mr-[1.5rem]">
            <a
              target="_blank"
              title="facebook-link"
              rel="noopener noreferrer"
              // href={footerData.facebookLink}
              href="https://www.facebook.com/iot.lab.kiit"
              className="text-[#ffffff]"
            >
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a
              target="_blank"
              title="twitter-link"
              rel="noopener noreferrer"
              // href={footerData.twitterLink}
              href="/"
              className="ml-3 text-[#ffffff]"
            >
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            <a
              target="_blank"
              title="instagram-link"
              rel="noopener noreferrer"
              href="/"
              className="ml-3 text-[#ffffff]"
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
              </svg>
            </a>
            <a
              target="_blank"
              title="email-link"
              rel="noopener noreferrer"
              // href={`mailto:${footerData.mailID}`}
              href="mailto:iot.lab@kiit.ac.in"
              className="ml-3 bg-[#ffffff]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="#101010"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <path d="M24 21h-24v-18h24v18zm-23-16.477v15.477h22v-15.477l-10.999 10-11.001-10zm21.089-.523h-20.176l10.088 9.171 10.088-9.171z" />
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

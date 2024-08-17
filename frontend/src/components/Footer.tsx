const Footer = () => {
  return (
    <div className="bg-black text-white py-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mx-20 mr-60">
        <div>
          <h3 className="text-lg font-semibold mb-4">Abstract</h3>
          <ul>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Branches
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Resources</h3>
          <ul>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Release Notes
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Status
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Community</h3>
          <ul>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Dribbble
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Podcast
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Legal
              </a>
            </li>
          </ul>
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <p>
              <a
                href="mailto:info@abstract.com"
                className="text-gray-400 hover:text-white"
              >
                info@abstract.com
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="text-center">
        <div className="flex justify-end pr-20">
          <img src="/logo.png" alt="Logo" className="h-8 mr-4" />
          <p className="text-gray-400">&copy; Copyright 2022</p>
        </div>
        <p className="text-gray-400 mt-2 flex justify-end pr-20">
          Abstract Studio Design, Inc. <br /> All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;

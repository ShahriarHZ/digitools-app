import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content">
      <div className="footer p-10 sm:footer-horizontal">
        <aside>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent cursor-pointer">
            DigiTools
          </h1>
          <p className="mt-2">
            Premium digital tools for creators,<br /> 
            professionals, and businesses. <br />
            Work smarter with our suite of powerful tools.
          </p>
        </aside>

        <nav>
          <h6 className="footer-title opacity-100 font-bold text-primary">Products</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>

        <nav>
          <h6 className="footer-title opacity-100 font-bold text-primary">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>

        <nav>
          <h6 className="footer-title opacity-100 font-bold text-primary">Social Links</h6>
          <div className="flex gap-4 mt-2">
            <a href="#" className="hover:scale-110 transition-transform">
              <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="20" fill="white" />
                <path d="M23.4916 11.6667H16.5083C13.475 11.6667 11.6666 13.4751 11.6666 16.5084V23.4834C11.6666 26.5251 13.475 28.3334 16.5083 28.3334H23.4833C26.5166 28.3334 28.325 26.5251 28.325 23.4917V16.5084C28.3333 13.4751 26.525 11.6667 23.4916 11.6667ZM20 23.2334C18.2166 23.2334 16.7666 21.7834 16.7666 20.0001C16.7666 18.2167 18.2166 16.7667 20 16.7667C21.7833 16.7667 23.2333 18.2167 23.2333 20.0001C23.2333 21.7834 21.7833 23.2334 20 23.2334Z" fill="#101727" />
              </svg>
            </a>
            
            <a href="#" className="hover:scale-110 transition-transform">
              <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="20" fill="white" />
                <path d="M28.3333 23.4917C28.3333 26.5251 26.525 28.3334 23.4916 28.3334H22.5C22.0416 28.3334 21.6666 27.9584 21.6666 27.5001V22.6918C21.6666 22.4668 21.85 22.2751 22.075 22.2751L23.5416 22.2501C23.6583 22.2418 23.7583 22.1584 23.7833 22.0418L24.075 20.4501C24.1 20.3001 23.9833 20.1584 23.825 20.1584L22.05 20.1834C21.8166 20.1834 21.6333 20.0001 21.625 19.7751L21.5916 17.7334C21.5916 17.6001 21.7 17.4834 21.8416 17.4834L23.8416 17.4501C23.9833 17.4501 24.0916 17.3418 24.0916 17.2001L24.0583 15.2001C24.0583 15.0584 23.95 14.9501 23.8083 14.9501L21.5583 14.9834C20.175 15.0084 19.075 16.1417 19.1 17.5251L19.1416 19.8167C19.15 20.0501 18.9666 20.2334 18.7333 20.2418L17.7333 20.2584C17.5916 20.2584 17.4833 20.3667 17.4833 20.5084L17.5083 22.0918C17.5083 22.2334 17.6166 22.3417 17.7583 22.3417L18.7583 22.3251C18.9916 22.3251 19.175 22.5084 19.1833 22.7334L19.2583 27.4834C19.2666 27.9501 18.8916 28.3334 18.4249 28.3334H16.5083C13.475 28.3334 11.6666 26.5251 11.6666 23.4834V16.5084C11.6666 13.4751 13.475 11.6667 16.5083 11.6667H23.4916C26.525 11.6667 28.3333 13.4751 28.3333 16.5084V23.4917Z" fill="#101727" />
              </svg>
            </a>

            <a href="#" className="hover:scale-110 transition-transform">
              <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="20" fill="white" />
                <path d="M21.5222 19.1831L27.4785 12.4082H26.0671L20.8952 18.2908L16.7644 12.4082H12L18.2466 21.3037L12 28.4082H13.4115L18.8732 22.196L23.2356 28.4082H28L21.5218 19.1831H21.5222Z" fill="#101727" />
              </svg>
            </a>
          </div>
        </nav>
      </div>

      <div className="border-t border-base-300 px-10 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-90">
          <aside>
            <p>© 2026 Digitools. All rights reserved.</p>
          </aside>

          <nav className="flex gap-6">
            <a href="#" className="link link-hover">Privacy Policy</a>
            <a href="#" className="link link-hover">Terms of Service</a>
            <a href="#" className="link link-hover">Cookies</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
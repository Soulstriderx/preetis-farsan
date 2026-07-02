import { Link, NavLink } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const touchStartX = useRef(0);
  const touchStartY = useRef(0);

  const handleGlobalTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleGlobalTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;
    const endY = e.changedTouches[0].clientY;

    const diffX = touchStartX.current - endX;
    const diffY = touchStartY.current - endY;

    if (Math.abs(diffY) > Math.abs(diffX)) return;

    if (diffX > 80) {
      setMobileOpen(false);
    }
  };

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = ({ isActive }) =>
    isActive ?
      "underline text-[#fffced] underline-offset-4 decoration-2"
    : "text-[#fffced] hover:scale-110 hover:text-[#fffced]/90 transition-transform inline-block";

  return (
    <div
      className={`sticky top-0 z-50 w-full transition-colors duration-0 ${scrolled ? "bg-[#800000]" : "bg-transparent"}`}
      onTouchStart={handleGlobalTouchStart}
      onTouchEnd={handleGlobalTouchEnd}
    >
      <div className="lg:flex hidden justify-between lg:justify-around gap-4 py-4 text-white font-bold items-center">
        <div className="">
          <Link to="/">
            <img src={import.meta.env.BASE_URL + "Logo/Preeti's Farsan_OfficialLogo_Cropped_Trans.png"} alt="Logo" className="h-10 px-10 my-2" />
          </Link>
        </div>
        <div className="flex gap-4 items-center">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>
          <p className="text-xl">|</p>
          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>
          <p className="text-xl">|</p>
          <NavLink to="/menu" className={linkClass}>
            Menu
          </NavLink>
          <p className="text-xl">|</p>
          <NavLink to="/more" className={linkClass}>
            More Offerings
          </NavLink>
          <p className="text-xl">|</p>
          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>
        </div>
        <div className="">
          <button
            className="bg-[#fffced] text-[#800000] font-bold py-2 px-4 hover:bg-[#fffced]/90 transition mx-5 my-2 rounded-2xl shadow-2xl"
            onClick={() => window.open("https://r.grab.com/g/6-20251109_184714_AAB6FC7989EE46D4940061D0EE8D35AF_MEXMPS-1-C7UEA3TBGZL1LT", "_blank")}
          >
            Order Now
          </button>
        </div>
      </div>
      <div className="lg:hidden flex justify-between items-center py-4 px-5 text-white font-bold relative">
        <button onClick={() => setMobileOpen(true)} className="">
          <Menu />
        </button>

        <Link to="/">
          <img src={import.meta.env.BASE_URL + "Logo/Preeti's Farsan_OfficialLogo_Cropped_Trans.png"} alt="Logo" className="h-10" />
        </Link>

        <div className="w-6 h-6" />

        <div
          className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 z-40 ${
            mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setMobileOpen(false)}
        />

        <div
          className={`fixed top-0 left-0 h-full w-72 bg-[#800000] text-white z-50 transform transition-transform duration-300 ease-in-out shadow-2xl ${
            mobileOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center p-5 border-b border-white/20">
            <span className="font-bold text-lg">Menu</span>

            <button onClick={() => setMobileOpen(false)}>
              <X />
            </button>
          </div>

          <div className="flex flex-col gap-6 p-6 text-lg font-semibold">
            <NavLink to="/" onClick={() => setMobileOpen(false)} className={linkClass}>
              Home
            </NavLink>

            <NavLink to="/about" onClick={() => setMobileOpen(false)} className={linkClass}>
              About
            </NavLink>

            <NavLink to="/menu" onClick={() => setMobileOpen(false)} className={linkClass}>
              Menu
            </NavLink>

            <NavLink to="/more" onClick={() => setMobileOpen(false)} className={linkClass}>
              More Offerings
            </NavLink>

            <NavLink to="/contact" onClick={() => setMobileOpen(false)} className={linkClass}>
              Contact
            </NavLink>

            <button
              className="bg-[#fffced] text-[#800000] font-bold py-2 px-4 rounded-2xl shadow-2xl mt-4"
              onClick={() => window.open("https://r.grab.com/g/6-20251109_184714_AAB6FC7989EE46D4940061D0EE8D35AF_MEXMPS-1-C7UEA3TBGZL1LT", "_blank")}
            >
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

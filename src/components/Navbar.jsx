import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`sticky top-0 z-50 w-full flex justify-between lg:justify-around gap-4 py-4 text-white font-bold transition-colors duration-300 ${
      scrolled ? "bg-[#800000]" : "bg-transparent"
    }`}>
      <div className="">
        <img src={import.meta.env.BASE_URL + "Logo/Preeti's Farsan_OfficialLogo_Cropped_Trans.png"} alt="Logo" className="h-10 px-10 my-2" />
      </div>
      <div className="flex gap-4 items-center">
        <Link to="/">Home</Link>
        <p className='text-xl'>|</p>
        <Link to="/about">About</Link>
        <p className='text-xl'>|</p>
        <Link to="/contact">Contact</Link>
        <p className='text-xl'>|</p>
        <Link to="/menu">Menu</Link>
        <p className='text-xl'>|</p>
        <Link to="/stories">Stories</Link>
      </div>
      <div className="">
        <button
        className="bg-[#fffced] text-[#800000] font-bold py-2 px-4 hover:bg-[#fffced]/90 transition mx-5 my-2 rounded-2xl"
        onClick={() => window.open("https://r.grab.com/g/6-20251109_184714_AAB6FC7989EE46D4940061D0EE8D35AF_MEXMPS-1-C7UEA3TBGZL1LT", "_blank")}
        >
          Order Now
        </button>
      </div>
    </div>
  );
}
  
export default Navbar;

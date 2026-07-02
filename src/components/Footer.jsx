import Facebook from "./socmed/Facebook";
import Insta from "./socmed/Insta";
import Tiktok from "./socmed/Tiktok";
import Whatsapp from "./socmed/Whatsapp";

export default function Footer() {
  return (
    <footer className="bg-[#800000] text-white mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-5 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 text-center">
        <div className="md:border-r md:border-white/20 md:px-8">
          <h3 className="font-bold text-lg mb-3">Opening Hours</h3>
          <p className="text-white/80 leading-relaxed">
            Monday to Sunday
            <br />
            11.30am – 10.00pm
            <br />
            <span className="text-white/50">Closed on Wednesday</span>
          </p>
        </div>

        <div className="md:border-r md:border-white/20 md:px-8">
          <h3 className="font-bold text-lg mb-3">Find Us</h3>
          <p className="text-white/80 leading-relaxed">
            Preeti's Farsan Vegetarian &amp; Vegan
            <br />
            92B, Lebuh Gereja
            <br />
            10200 George Town, Pulau Pinang
            <br />
            Malaysia
          </p>
        </div>

        <div className="md:px-8">
          <h3 className="font-bold text-lg mb-3">Follow Us</h3>
          <div className="flex justify-center gap-4">
            <Facebook />
            <Insta />
            <Tiktok />
          </div>
          <h3 className="font-bold text-lg md:mt-3 mt-8">Contact Us</h3>
          <p className="mb-2 text-white/80 leading-relaxed">+60 17 4029 801</p>
          <div className="flex justify-center gap-4">
            <Whatsapp />
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-white/40 text-sm">
        &copy; {new Date().getFullYear()} Preeti's Farsan. All rights reserved.
      </div>
    </footer>
  );
}

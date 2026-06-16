import { Link } from "react-router-dom";
import features from "../data/features";

export default function AboutUs() {
  return (
    <div className="px-15">
      <h1 className="text-[#800000] font-bold">About Us</h1>
      <p className="text-[#969695] py-5 font-semibold">
        Rooted in family tradition, Preeti’s Farsan serves authentic vegetarian Gujarati and North Indian street snacks & 
        dishes prepared with fresh ingredients and no artificial additives. Every dish carries the warmth of home and the joy of sharing.
      </p>
      <div className="flex justify-around items-center flex-wrap lg:flex-nowrap flex-col md:flex-row gap-10 my-10">
        {features.map((item, index) => (
          <div key={index} className="flex flex-col gap-5 max-w-50">
            <img
              src={import.meta.env.BASE_URL + item.img}
              alt="Logo"
              className="h-30 mx-auto"
              />
            <p className="text-wrap">{item.text}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-15">
        <Link to="/about">
          <button className="bg-[#fffced] font-semibold border-[#800000] border-2 
          rounded-lg text-[#800000] py-2 px-6 hover:text-[#fffced] hover:bg-[#800000]/90 transition shadow-lg">
            Learn More
          </button>
        </Link>
      </div>
    </div>
  )
}
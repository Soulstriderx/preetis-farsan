import Hero from "../components/Hero";
import Carousel from "../components/Carousel";
import { Link } from "react-router-dom";

function Home() {
  const foodImages = [
    { src: "Food Pictures/IMG_6233.jpeg", alt: "Pav Bhaji" },
    { src: "Food Pictures/IMG_6221.jpeg", alt: "Vada Pav" },
    { src: "Food Pictures/IMG_6201.jpeg", alt: "Samosa Chat" },
    { src: "Food Pictures/IMG_6124.jpeg", alt: "Dabeli" },
    { src: "Food Pictures/IMG_4746.jpeg", alt: "Kachori" },
    { src: "Food Pictures/IMG_3921.jpeg", alt: "Dhokla" },
    { src: "Food Pictures/IMG_5238.jpeg", alt: "Chai" },
    { src: "Food Pictures/IMG_5208.jpeg", alt: "Mixed Platter" },
  ];

  const features = [
    {
      img: "Icons/No_garlic_vector_bg.png",
      text: "Happy to accommodate no onion, no garlic (Jain-friendly) requests",
    },
    {
      img: "Icons/No_garlic_vector_bg.png",
      text: "Vegan-friendly options available.",
    },
    {
      img: "Icons/No_garlic_vector_bg.png",
      text: "Street-style chaats, just like the roadside bites in Mumbai.",
    },
    {
      img: "Icons/No_garlic_vector_bg.png",
      text: "Masala chai, cutting chai, and desi coffee brewed strong and aromatic.",
    },
  ];

  return (
    <div>
      <Hero>
        <img
          src={import.meta.env.BASE_URL + "Food Pictures/IMG_3569.jpeg"}
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
      </Hero>
      <section className="bg-[#fffced] py-10">
        <div className="px-15">
          <h1 className="text-[#800000] font-bold">About Us</h1>
          <p className="text-[#969695] py-5 font-semibold">
            Rooted in family tradition, Preeti’s Farsan serves authentic vegetarian Gujarati and North Indian street snacks & 
            dishes prepared with fresh ingredients and no artificial additives. Every dish carries the warmth of home and the joy of sharing.
          </p>
          <div className="flex justify-center flex-col md:flex-row gap-10 my-10">
            {features.map((item, index) => (
              <div key={index} className="flex flex-col gap-5 max-w-55">
                <img
                  src={import.meta.env.BASE_URL + item.img}
                  alt="Logo"
                  className="h-30 aspect-square mx-auto"
                  />
                <p className="text-wrap">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-15">
            <Link to="/about">
              <button className="bg-[#fffced] border-[#800000] border-2 rounded-lg text-[#800000] py-2 px-6 hover:bg-[#f0edde]">
                Learn More
              </button>
            </Link>
          </div>
          </div>
        <hr className="my-10 border-[#800000]" />
        <div className="mb-10 mt-20 px-15">
          <h1 className="text-[#800000] font-bold">Popular Favourites</h1>
        </div>
        <div className="py-10">
          <Carousel images={foodImages} />
        </div>
      </section>
    </div>
  );
}

export default Home;
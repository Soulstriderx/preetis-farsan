import Hero from "../components/Hero";
import AboutUs from "../components/home/parts/AboutUs";
import Reviews from "../components/home/parts/Review";
import Food from "../components/home/parts/Food";
import Customers from "../components/home/parts/Customers";

function Home() {
  return (
    <div>
      <Hero>
        <img
          src={import.meta.env.BASE_URL + "Food Pictures/IMG_3569.jpeg"}
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
      </Hero>
      <section className="bg-[#fffced] py-10 shadow-2xl">
        <AboutUs />
        <hr className="my-10 border-[#800000]" />
        <Food />
        <hr className="my-10 border-[#800000]" />
        <Reviews />
        <hr className="my-10 border-[#800000]" />
        <Customers />
      </section>
    </div>
  );
}

export default Home;
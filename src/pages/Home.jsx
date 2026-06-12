import Hero from "../components/Hero";

function Home() {
  return (
    <div>
      <Hero>
        <img
          src="/Food Pictures/IMG_3569.jpeg"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
      </Hero>
      <div className="bg-[#fffced] py-10">
        <h1 className="text-[#800000] font-bold">About Us</h1>
      </div>
    </div>
  );
}

export default Home;
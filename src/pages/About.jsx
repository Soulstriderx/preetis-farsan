import { useState } from "react";
import features from "../components/about/data/features";
import faqItems from "../components/about/data/faq";

function About() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div>
      <section className="bg-[#fffced] py-10 shadow-2xl">
        <div className="px-15 flex flex-col lg:flex-row gap-5">
          <div className="lg:w-1/2">
            <h1 className="text-[#800000] font-bold lg:pb-10 pb-3">Our Story</h1>
            <p className="text-[#969695] py-5 lg:px-5 xl:px-20 font-semibold  lg:text-start h-auto">
              Our story began in a humble home kitchen, where the real Preeti, lovingly known as Preetiben, began preparing and selling homemade
              vegetarian Gujarati and North Indian snacks within the close-knit Gujarati community in Penang.
              <br />
              <br />
              Rooted in family traditions, her recipes bring generations of authenticity to every dish we serve.
              <br />
              <br />​ In 2020, we took a leap of faith and brought Preeti’s Farsan online, allowing us to reach beyond our immediate community. We’re
              grateful that our food has since found its way to the tables of both locals and expats.
              <br />
              <br />
              What started as simple home-cooked meals soon became food that reminded people of home, comfort, and togetherness.
            </p>
          </div>
          <div className="h-auto lg:w-1/2 flex items-center justify-center">
            <img
              className="object-contain w-full"
              src={import.meta.env.BASE_URL + "Customers Picture/Owners.jpg"}
              alt="Image of owner and his mother"
            />
          </div>
        </div>
        <hr className="my-10 border-[#800000]" />
        <div className="px-15">
          <h1 className="text-[#800000] font-bold">Our Values</h1>
          <p className="text-[#969695] py-5 font-semibold">
            We believe in cooking with intention and care, preparing every dish just like it would be at home.
            <br /><br />
            From our humble beginnings to our cozy café in George Town, we’ve stayed true to what matters most!
            <br />
            <strong>Tradition</strong>, <strong>Taste</strong> & <strong>Togetherness</strong>.
          </p>
          <div className="flex justify-around items-center flex-col md:flex-row gap-10 my-10 lg:px-25">
            {features.map((item, index) => (
              <div key={index} className="flex flex-col gap-5">
                <img src={import.meta.env.BASE_URL + item.img} alt="Logo" className="h-30 mx-auto" />
                <p className="text-wrap">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
        <hr className="my-10 border-[#800000]" />
        <div className="px-15">
          <h1 className="text-[#800000] font-bold pb-5">FAQ</h1>
          <div className="mt-5 space-y-2">
            {faqItems.map((item, index) => (
              <div key={index} className="border border-[#800000] rounded">
                <button
                  onClick={() => setOpenIndex(index === openIndex ? null : index)}
                  className="w-full text-left px-5 py-4 bg-[#800000] text-white font-semibold flex justify-between items-center"
                >
                  {item.question}
                  <span>{openIndex === index ? "\u2212" : "+"}</span>
                </button>
                {openIndex === index && (
                  <div className="px-5 py-4 text-[#969695]">{item.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;

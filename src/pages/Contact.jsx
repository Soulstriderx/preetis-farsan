import Map from "../components/Map";
import Facebook from "../components/socmed/Facebook";
import Insta from "../components/socmed/Insta";
import Tiktok from "../components/socmed/Tiktok";
import Whatsapp from "../components/socmed/Whatsapp";

function Contact() {
  return (
    <div>
      <section className="bg-[#fffced] py-10 shadow-2xl">
        <div className="sm:px-15 px-5 py-10">
          <div className="border border-[#800000] flex flex-col lg:flex-row rounded-2xl overflow-hidden gap-5 lg:gap-0">
            <div className="lg:w-1/2 lg:text-left p-2 lg:p-5">
              <p className="text-[#800000] text-4xl font-bold">GET IN TOUCH</p>
              <br />
              <p className="text-[#969695]">Preeti's Farsan conveniently nestled smack in the heart of Penang Island.</p>
              <br />
              <p className="text-[#969695]">92B, Lebuh Gereja 10200 George Town, Pulau Pinang Malaysia</p>
              <br />
              <p className="text-[#969695]">
                Monday to Sunday <br /> 11.30am – 10.00pm Closed on Wednesday <br />
                Last call 9.00pm
              </p>
              <br />
              <p className="text-[#969695]">preetisfarsan@gmail.com</p>
              <p className="text-[#969695]">+60 17 4029 801</p>
              <br />
              <div className="flex justify-center gap-4">
                <Whatsapp color="#800000"/>
                <Facebook color="#800000"/>
                <Insta color="#800000"/>
                <Tiktok color="#800000"/>
              </div>
            </div>
            <div
              className="h-64 md:h-80 lg:h-auto lg:w-1/2 bg-cover bg-center"
              style={{
                backgroundImage: `url(${import.meta.env.BASE_URL}Customers%20Picture/IMG_3543.jpeg)`,
              }}
            ></div>
          </div>
        </div>
        <hr />
        <div className="px-5 md:px-15 pt-10">
          <Map />
        </div>
      </section>
    </div>
  );
}

export default Contact;

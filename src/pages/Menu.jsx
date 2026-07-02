import Foodname from "../components/Foodname";

function Menu() {
  return (
    <div>
      <section className="bg-[#fffced] py-10 md:px-15 px-5">
        <h1 className="text-[#800000] font-bold">RESTAURANT MENU</h1>
        <div className="flex items-center text-black gap-1">
          <img src={import.meta.env.BASE_URL + "Icons/Vegan_icon.png"} alt="Vegan" className="w-10 h-10" />
          <p className="font-text">Available Vegan</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="flex flex-col text-left space-y-6 order-2 lg:order-1">
            <h2 className="text-4xl font-bold text-[#800000]">CLASSIC CHAAT</h2>
            <Foodname
              name="PANI PURI"
              description="Crisp-fried 5 Puris filled with potatoes, black chickpeas
            and mint-coriander-spicy water served with our signature Chutneys."
              vegan={true}
            />
            <Foodname
              name="BHEL MIX"
              description="A mixture of puffed rice, sev, potatoes, onion and tomatoes topped with our signature chutneys and garnishes."
              vegan={true}
            />

            <Foodname
              name="ALOO TIKKI CHAAT"
              description="Delicious bite size pieces of potato patties topped with our signature chutneys and garnishes."
              vegan={true}
            />

            <Foodname
              name="KACHORI CHAAT"
              description="2pcs of kachoris (large hard shelled puri stuffed with green peas) topped with yoghurt, chutneys and garnishes."
              vegan={true}
            />

            <Foodname
              name="ROYAL DAHI PURI"
              description="6 pcs crisp-fried puris filled with potatoes, black chickpeas and yogurt, garnished with our signature chutneys."
            />

            <Foodname
              name="DAHI VADA"
              description="A savoury bed of 6pcs vada (soft lentil dumplings) topped with yoghurt, chutneys and garnishes."
            />

            <Foodname
              name="PAPDI CHAAT"
              description="Crispy flour crackers topped with potatoes, black chickpeas, chutneys, yogurt and signature masalas."
              vegan={true}
            />

            <Foodname
              name="SAMOSA CHAAT"
              description="A mouthwatering base of peas curry with non-spicy potato filled samosas, topped with our signature chutneys and garnishes."
              vegan={true}
            />
          </div>
          <div className="grid grid-cols-2 grid-rows-3 gap-3 h-150 lg:h-200 order-1 lg:order-2">
            <div className="col-span-2 row-span-1 rounded-2xl overflow-hidden relative shadow-lg">
              <img src={import.meta.env.BASE_URL + "Food Pictures/PANI PURI MENU IMAGE.png"} className="w-full h-full object-cover" alt="collage-1" />
            </div>

            <div className="rounded-2xl overflow-hidden relative shadow-md">
              <img src={import.meta.env.BASE_URL + "Food Pictures/BHEL MIX.png"} className="w-full h-full object-cover" alt="collage-2" />
            </div>

            <div className="rounded-2xl overflow-hidden relative shadow-md">
              <img src={import.meta.env.BASE_URL + "Food Pictures/DAHI VADA.png"} className="w-full h-full object-cover" alt="collage-3" />
            </div>

            <div className="col-span-2 row-span-1 rounded-2xl overflow-hidden relative shadow-lg">
              <img src={import.meta.env.BASE_URL + "Food Pictures/IMG_6217.jpeg"} className="w-full h-full object-cover" alt="collage-4" />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#fffced] py-10 md:px-15 px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          <div className="grid grid-cols-3 text-left grid-rows-[auto_auto_auto_1fr] gap-3 lg:grid-rows-4 lg:h-full">
            <div className="rounded-2xl h-40 md:h-56 lg:h-auto col-span-2 overflow-hidden relative shadow-md">
              <img src={import.meta.env.BASE_URL + "Food Pictures/ALOO TIKKI.png"} className="w-full h-full object-cover" alt="collage-2" />
            </div>

            <div className="rounded-2xl lg:h-auto lg:hidden block row-span-2 overflow-hidden relative shadow-lg">
              <img src={import.meta.env.BASE_URL + "Food Pictures/IMG_3983.jpeg"} className="w-full h-full object-cover" />
            </div>

            <div className="rounded-2xl h-40 md:h-56 lg:h-auto col-span-2 lg:col-span-1 overflow-hidden relative shadow-md">
              <img src={import.meta.env.BASE_URL + "Food Pictures/PAV BHAJI.png"} className="w-full h-full object-cover" alt="collage-2" />
            </div>
            <div className="col-span-3 row-span-2 lg:row-span-3 flex flex-col space-y-6">
              <h2 className="text-4xl font-bold text-[#800000]">HOT BITES SPECIAL</h2>
              <Foodname
                name="ALOO TIKKI"
                description="2 pcs of delicious bite size pieces of Bombay potato patties served with our signature chutneys."
                vegan={true}
              />

              <Foodname
                name="PAV BHAJI"
                description="Meticulously crafted gravy with fresh vegetables, green peas, potatoes and cauliflower served with 3 authentic buns."
              />

              <Foodname
                name="PUNJABI SAMOSA"
                description="2 pcs of deep-fried medium sized samosa filled with non-spicy potatoes served with our signature chutneys."
                vegan={true}
              />

              <Foodname
                name="MATAR KACHORI"
                description="2 pcs of deep-fried pastry shell filled with matar (green peas) and spiced mixture with our signature chutneys."
                vegan={true}
              />

              <Foodname
                name="GUJARATI SAMOSA"
                description="7 pcs of spicy, tangy crispy samosas filled with spiced lentils, onion, mint and varieties of secret masala."
                vegan={true}
              />

              <Foodname
                name="VADA PAV"
                description="2 pcs deep fried potato patties in bread bun with chutneys and masala mixture with desi style garnishing."
              />

              <Foodname
                name="DABELI"
                description="2 pcs soft pav buns stuffed with spiced potato filling, tangy chutneys, crunchy peanuts, and sev (omapudi)."
              />

              <Foodname
                name="MIXED VEG PAKODA"
                description="Mix veg pakora is a crispy fried snack with a variety of vegetables topped with gram flour (besan) served with chutneys."
                vegan={true}
              />
            </div>
          </div>
          <div className="rounded-2xl lg:block hidden overflow-hidden relative shadow-lg">
            <img src={import.meta.env.BASE_URL + "Food Pictures/IMG_3983.jpeg"} className="w-full h-full object-cover" />
          </div>
        </div>
      </section>
      <section className="bg-[#fffced] py-10 md:px-15 px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          <div className="grid grid-cols-3 text-left grid-rows-[auto_auto_auto_1fr] gap-3 lg:grid-rows-4 lg:h-full">
            <div className="rounded-2xl h-40 md:h-56 lg:h-auto col-span-3 lg:col-span-2 overflow-hidden relative shadow-md">
              <img src={import.meta.env.BASE_URL + "Food Pictures/BIRYANI.png"} className="w-full h-full object-cover" alt="collage-2" />
            </div>

            <div className="rounded-2xl h-40 md:h-56 lg:h-auto lg:hidden col-span-2 block overflow-hidden relative shadow-lg">
              <img src={import.meta.env.BASE_URL + "Food Pictures/BUTTER PANEER.png"} className="w-full h-full object-cover" />
            </div>

            <div className="rounded-2xl h-40 md:h-56 lg:h-auto lg:hidden block overflow-hidden relative shadow-lg">
              <img src={import.meta.env.BASE_URL + "Food Pictures/CHAPATI.png"} className="w-full h-full object-cover" />
            </div>

            <div className="rounded-2xl h-40 md:h-56 lg:h-auto col-span-2 lg:col-span-1 lg:block hidden overflow-hidden relative shadow-md">
              <img src={import.meta.env.BASE_URL + "Food Pictures/BUTTER PANEER.png"} className="w-full h-full object-cover" alt="collage-2" />
            </div>
            <div className="col-span-3 row-span-2 lg:row-span-3 flex flex-col space-y-6">
              <h2 className="text-4xl font-bold text-[#800000]">PANEER & COMBO</h2>
              <Foodname
                name="MIX VEGETABLE BIRYANI"
                description="Fresh mixed veg biryani with fragrant basmati rice served with vegetables, pickle, fresh curd & papadom."
              />

              <Foodname name="BUTTER PANEER" description="Paneer cottage cubes simmered in a rich, buttery tomato-cashew gravy." />

              <Foodname
                name="GUJRATI CHAPATI SET"
                description="2 pcs of soft chapati served with comforting moong dal and tangy pickle."
                vegan={true}
              />

              <Foodname
                name="PLAIN PARATHA SET"
                description="2 pcs of soft parathas served with comforting moong dal and tangy pickle."
                vegan={true}
              />

              <Foodname
                name="ALOO PARATHA SET"
                description="1 pc of fluffy stuffed paratha filled with spiced potato, served with fresh yoghurt and pickle."
                vegan={true}
              />

              <Foodname name="PANEER PARATHA SET" description="1 pc of stuffed paneer paratha served with cooling fresh yoghurt and pickle." />

              <Foodname name="PALAK PANEER" description="Fresh paneer cubes cooked in a creamy spinach gravy with aromatic spices." />

              <Foodname
                name="CHILI PANEER"
                description="Crispy paneer tossed in a spicy, tangy chili sauce with peppers, capsicum, onions and more."
              />

              <Foodname
                name="ROYAL PANEER BIRYANI"
                description="Homemade-style paneer biryani with fragrant basmati rice served with vegetables, pickle and fresh curd."
              />
            </div>
          </div>
          <div className="rounded-2xl lg:block hidden overflow-hidden relative shadow-lg lg:h-265">
            <img src={import.meta.env.BASE_URL + "Food Pictures/CHAPATI.png"} className="w-full h-full object-cover" />
          </div>
        </div>
      </section>
      <section className="bg-[#fffced] py-10 md:px-15 px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          <div className="grid grid-cols-3 text-left grid-rows-[auto_auto_auto_1fr] gap-3 lg:grid-rows-2 lg:h-full">
            <div className="rounded-2xl h-40 md:h-56 col-span-2 lg:col-span-3 overflow-hidden relative shadow-md">
              <img src={import.meta.env.BASE_URL + "Food Pictures/Rasmalai.jpg"} className="w-full h-full object-cover" alt="collage-2" />
            </div>
            <div className="rounded-2xl h-40 md:h-56 lg:hidden block overflow-hidden relative shadow-lg">
              <img src={import.meta.env.BASE_URL + "Food Pictures/GulabJamun.jpg"} className="w-full h-full object-cover" />
            </div>
            <div className="col-span-3 flex flex-col space-y-6">
              <h2 className="text-4xl font-bold text-[#800000]">SWEET TREATS</h2>
              <Foodname
                name="RASMALAI"
                description="A single piece of soft, sweet, and spongy delight soaked in aromatic flavored milk, topped with almond slivers and saffron."
              />

              <Foodname name="GULAB JAMUN" description="2 pieces of homemade, deep-fried milk dough balls soaked in rich and aromatic sugar syrup." />
            </div>
          </div>
          <div className="rounded-2xl lg:block hidden overflow-hidden relative shadow-lg lg:h-115">
            <img src={import.meta.env.BASE_URL + "Food Pictures/GulabJamun.jpg"} className="w-full h-full object-cover" />
          </div>
        </div>
      </section>
      <section className="bg-[#fffced] py-10 md:px-15 px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          <div className="grid grid-cols-3 text-left grid-rows-[auto_auto_auto_1fr] gap-3 lg:grid-rows-[auto_1fr] lg:h-auto">
            <div className="rounded-2xl h-40 md:h-80 col-span-2 lg:block hidden lg:col-span-3 overflow-hidden relative shadow-md">
              <img src={import.meta.env.BASE_URL + "Food Pictures/Chai1.jpg"} className="w-full h-full object-cover" alt="collage-2" />
            </div>
            <div className="rounded-2xl col-span-2 h-40 md:h-56 lg:hidden block overflow-hidden relative shadow-lg">
              <img src={import.meta.env.BASE_URL + "Food Pictures/Chai3.jpg"} className="w-full h-full object-cover object-bottom" />
            </div>
            <div className="rounded-2xl row-span-2  lg:hidden block overflow-hidden relative shadow-lg">
              <img src={import.meta.env.BASE_URL + "Food Pictures/Chai2.png"} className="w-full h-full object-cover" />
            </div>
            <div className="rounded-2xl col-span-2 h-40 md:h-56 lg:hidden block overflow-hidden relative shadow-lg">
              <img src={import.meta.env.BASE_URL + "Food Pictures/Chai1.jpg"} className="w-full h-full object-cover" />
            </div>
            <div className="col-span-3 flex flex-col space-y-6">
              <h2 className="text-4xl font-bold text-[#800000]">TEA-TIME SPECIALS</h2>
              <Foodname
                name="DESI MASALA CHAI"
                description="Brewed just like the ones you'd find on the bustling streets of India. Rich, aromatic, and spiced to perfection!"
              />

              <Foodname
                name="CUTTING CHAI"
                description="Popular for its strong, spiced tea served in half-glass portions for quick and energizing breaks!"
              />

              <Foodname
                name="DESI COFFEE"
                description="Brewed just like the ones you'd find on the bustling streets of India. Rich, aromatic, and spiced to perfection!"
              />

              <Foodname
                name="MASKA PAV SET"
                description="1 pc fluffy pav generously slathered with lots of cream and served with hot, aromatic cutting chai."
              />

              <Foodname
                name="CHAI PARLE G"
                description="Parle-G biscuits served with cutting chai, just like the streets of India — a nostalgic bite."
              />
            </div>
          </div>
          <div className="lg:grid grid-cols-1 grid-rows-2 hidden gap-3 h-150 lg:h-200">
            <div className="rounded-2xl overflow-hidden relative shadow-lg lg:h-auto">
              <img src={import.meta.env.BASE_URL + "Food Pictures/Chai2.png"} className="w-full h-full object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden relative shadow-lg lg:h-auto">
              <img src={import.meta.env.BASE_URL + "Food Pictures/Chai3.jpg"} className="w-full h-full object-cover object-bottom" />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#fffced] py-10 md:px-15 px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          <div className="grid grid-cols-3 lg:grid-cols-4 text-left grid-rows-[auto_auto_auto_1fr] gap-3 lg:grid-rows-[auto_1fr] lg:h-auto">
            <div className="rounded-2xl h-40 md:h-60 col-span-1 lg:col-span-2 overflow-hidden relative shadow-md">
              <img
                src={import.meta.env.BASE_URL + "Food Pictures/DrinkChaas.jpg"}
                className="w-full h-full object-cover object-top"
                alt="collage-2"
              />
            </div>
            <div className="rounded-2xl h-40 md:h-60 col-span-1 lg:col-span-2 overflow-hidden relative shadow-md">
              <img
                src={import.meta.env.BASE_URL + "Food Pictures/DrinkLassi.jpg"}
                className="w-full h-full object-cover object-top"
                alt="collage-2"
              />
            </div>
            <div className="rounded-2xl h-40 md:h-60 col-span-1 lg:hidden block lg:col-span-2 overflow-hidden relative shadow-md">
              <img src={import.meta.env.BASE_URL + "Food Pictures/DrinkOJ.jpg"} className="w-full h-full object-cover object-top" alt="collage-2" />
            </div>
            <div className="col-span-4 flex flex-col space-y-6">
              <h2 className="text-4xl font-bold text-[#800000]">DRINKS</h2>
              <Foodname
                name="CHAAS (MOORU)"
                description="Spiced buttermilk drink made from fresh yogurt known for its refreshing and cooling effect, especially during hot weather."
              />

              <Foodname
                name="CLASSIC SWEET LASSI"
                description="A rich, creamy and refreshing traditional drink made with yogurt and a touch of sweetness. Smooth, cooling, and satisfying in every sip."
              />

              <Foodname
                name="JUICE BOOST"
                description="Refreshing cordial-based fruit juices served chilled. Available in mango, orange, or apple flavors."
              />

              <Foodname
                name="COKE / 100 PLUS / SPRITE"
                description="Cool, refreshing, and perfect with any meal. Pick your favorite: Classic Coke, Sprite, or 100 Plus."
              />
            </div>
          </div>
          <div className="rounded-2xl h-40 lg:h-165 lg:block hidden overflow-hidden relative shadow-md">
            <img src={import.meta.env.BASE_URL + "Food Pictures/DrinkOJ.jpg"} className="w-full h-full object-cover" alt="collage-2" />
          </div>
        </div>
      </section>
      <section className="bg-[#fffced] py-10 md:px-15 px-5">
        <div className="flex justify-between">
          <button
            className="bg-[#fffced] font-semibold border-[#800000] border-2 
          rounded-lg text-[#800000] py-2 px-6 hover:text-[#fffced] hover:bg-[#800000]/90 transition shadow-lg font-title"
            onClick={() => window.open(import.meta.env.BASE_URL + "pdf/Menu.pdf", "_blank")}
          >
            Restaurant Menu
          </button>
          <button className="bg-[#fffced] font-semibold border-[#800000] border-2 
          rounded-lg text-[#800000] py-2 px-6 hover:text-[#fffced] hover:bg-[#800000]/90 transition shadow-lg font-title">
            Event Menu
          </button>
          <button
            className="bg-[#fffced] font-semibold border-[#800000] border-2 
          rounded-lg text-[#800000] py-2 px-6 hover:text-[#fffced] hover:bg-[#800000]/90 transition shadow-lg font-title"
            onClick={() => window.open("https://wa.me/60123456789", "_blank")}
          >
            WhatsApp Now
          </button>
        </div>
      </section>
    </div>
  );
}

export default Menu;

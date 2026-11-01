// Transcribed from all 16 images in new-menu, dated 31 October 2026.

// Width / height of each photo in public/menu, used to size photos without distortion.
export const imageAspect = {
  "pani-puri.jpg": 1.87, "bhel-mix.jpg": 1.24, "chaat.jpg": 0.47, "aloo-tikki.jpg": 1.93,
  "surti-samosa.jpg": 1.26, "mixed-veg-pakoda.jpg": 0.47,
  "raj-kachori.jpg": 1.93, "pav-bhaji.jpg": 1.26, "vada-pav.jpg": 0.47,
  "kadai-paneer.jpg": 1.93, "butter-paneer.jpg": 1.27, "chapati.jpg": 0.43,
  "mixed-vegetable-biryani.jpg": 1.93, "bombay-fold.jpg": 1.93,
  "chole-puri.jpg": 0.64, "gujarati-dhokla.jpg": 1.17, "gujarati-khandvi.jpg": 0.68,
  "rasmalai.jpg": 1.05, "gulab-jamun.jpg": 0.93,
  "chai.jpg": 0.64, "cutting-chai.jpg": 0.72, "thepla-set.jpg": 1.14,
  "chai-biskut-g.jpg": 0.55, "nashto-puri.jpg": 0.47, "maska-pav.jpg": 1.15,
  "chaas.jpg": 0.68, "lassi.jpg": 0.58, "badam-milk.jpg": 0.86,
  "lime-sherbet.jpg": 0.67, "juice-boost.jpg": 0.68, "soft-drinks.jpg": 0.47,
  "fresh-paneer.jpg": 1.25, "mango-pickle.jpg": 0.88,
};

// rows: how many photos sit in each row of the photo column, in order.
export const menuCategories = [
  {
    title: "CLASSIC CHAAT",
    rows: [1, 1, 2],
    images: [
      { file: "pani-puri.jpg", alt: "Pani Puri" },
      { file: "bhel-mix.jpg", alt: "Bhel Mix" },
      { file: "chaat.jpg", alt: "Chaat topped with yogurt and chutneys" },
      { file: "aloo-tikki.jpg", alt: "Aloo Tikki potato patties" },
    ],
    items: [
      { name: "PANI PURI", price: 15.90, vegan: true, description: "Crisp-fried 5 Puris filled with potatoes, black chickpeas and mint-coriander-spicy water served with our signature chutneys." },
      { name: "BHEL MIX", price: 17.90, vegan: true, description: "A mixture of puffed rice, sev, potatoes, onion and tomatoes topped with our signature chutneys and garnishes." },
      { name: "ALOO TIKKI CHAAT", price: 18.90, vegan: true, description: "Delicious bite size pieces of 2 Bombay potato patties topped with our signature chutneys and garnishes." },
      { name: "ROYAL DAHI PURI", price: 18.90, description: "6 pcs crisp-fried Puris filled with potatoes, black chickpeas and yogurt, garnished with our signature chutneys." },
      { name: "PAPDI CHAAT", price: 19.90, vegan: true, description: "6 pcs crispy flour crackers topped with potatoes, black chickpeas, chutneys, yogurt, and signature masalas." },
      { name: "PALAK CHAAT", price: 19.90, vegan: true, description: "5 pcs of crispy spinach leaves topped with yogurt, 3 types of chutneys & a burst of tangy spices." },
      { name: "DAHI VADA", price: 20.90, description: "A savoury bed of 6 pcs Vada (soft lentil dumplings) topped with yoghurt, chutneys and garnishes." },
      { name: "SAMOSA CHAAT", price: 21.90, vegan: true, description: "A mouthwatering base of peas curry with 2 non-spicy potato filled samosas, topped with our signature chutneys and garnishes." },
    ],
  },
  {
    title: "HOT BITES SPECIAL",
    rows: [1, 2],
    images: [
      { file: "aloo-tikki.jpg", alt: "Aloo Tikki" },
      { file: "surti-samosa.jpg", alt: "Surti Samosa" },
      { file: "mixed-veg-pakoda.jpg", alt: "Mixed Veg Pakoda" },
    ],
    items: [
      { name: "ALOO TIKKI", price: 14.90, vegan: true, description: "2 pcs of delicious bite size pieces of Bombay Potato Patties a.k.a Indian Masala Hashbrowns served with our signature chutneys." },
      { name: "SURTI SAMOSA", price: 18.90, vegan: true, description: "7 pcs of spicy, tangy crispy samosas filled with spiced lentils, onion, mint and varieties of secret masala." },
      { name: "PUNJABI SAMOSA", price: 13.90, vegan: true, description: "2 pcs of deep-fried medium sized samosa filled with non-spicy potatoes served with our signature chutneys." },
      { name: "MATAR KACHORI", price: 14.90, vegan: true, description: "2 pcs of deep-fried pastry shell filled with Matar (green peas) and spiced mixture with our signature chutneys." },
      { name: "ROYALE MIRCHI PAKODA", price: 18.90, vegan: true, description: "3 pcs of stuffed green chilies coated in spiced gram flour batter and fried until golden and crispy. Served with pudina chutney." },
      { name: "CAULIFLOWER 65", price: 21.90, vegan: true, description: "Golden-fried cauliflower tossed in bold, spicy North Indian masala." },
      { name: "MIXED VEG PAKODA", price: 21.90, vegan: true, description: "Mix Veg Pakoda is a crispy fried snack with variety of vegetables topped with gram flour (besan) served with chutneys." },
      { name: "CHILI PANEER", price: 23.90, description: "Crispy paneer tossed in a spicy, tangy chili sauce with peppers, capsicum, onions and more." },
    ],
  },
  {
    title: "D'STREET SPECIAL",
    rows: [1, 2],
    images: [
      { file: "raj-kachori.jpg", alt: "Raj Kachori" },
      { file: "pav-bhaji.jpg", alt: "Pav Bhaji" },
      { file: "vada-pav.jpg", alt: "Vada Pav" },
    ],
    items: [
      { name: "RAJ KACHORI", price: 19.90, description: "A giant crispy shell filled with chaat goodness, fresh homemade yogurt, with 3 types of chutneys & crunch into your mouth." },
      { name: "PAV BHAJI", price: 21.90, description: "Meticulously crafted gravy with fresh vegetables, green peas, potatoes and cauliflower served with 3 authentic buns." },
      { name: "CHANA CHAAT", price: 15.90, vegan: true, description: "A wholesome mix of fresh veggies, chickpea & with balanced and satisfying signature chutneys." },
      { name: "MISAL PAV", price: 19.90, description: "Spicy sprout curry topped with farsan, onions & served with 3 pcs of soft buns." },
      { name: "RAGDA PATTICE", price: 20.90, vegan: true, description: "3 pcs of crispy potato patties topped with flavourful white pea curry, chutneys, onions & a burst of tangy spices." },
      { name: "VADA PAV", price: 21.90, description: "2 pcs deep fried potato patties in bread bun in addition of chutneys and masala mixture with desi style garnishing." },
      { name: "GUJARATI DABELI", price: 23.90, description: "2 pcs soft pav buns stuffed with spiced potato filling, tangy chutneys, crunchy peanuts, and sev (omapudi - crunchy)." },
      { name: "ALOO TIKKI BURGER COMBO", price: 26.90, description: "Crispy spiced aloo tikki potato patty layered with cheese, mayonnaise veggies and a soft toasted bun served with fries with a cordial juice (orange, mango or apple)." },
    ],
  },
  {
    title: "DESI CORNER",
    rows: [1, 2],
    images: [
      { file: "kadai-paneer.jpg", alt: "Kadai Paneer" },
      { file: "butter-paneer.jpg", alt: "Butter Paneer" },
      { file: "chapati.jpg", alt: "Gujarati Capati Set" },
    ],
    items: [
      { name: "KADAI PANEER", price: 27.90, description: "Paneer cubes cooked in a bold, spiced kadai gravy with capsicum, onions, and rich Indian masalas." },
      { name: "BUTTER PANEER", price: 25.90, description: "Paneer cottage cubes simmered in a rich, buttery tomato-cashew gravy." },
      { name: "GUJARATI CAPATI SET", price: 12.90, vegan: true, description: "2 pcs of soft chapati served with comforting moong dal and tangy pickle." },
      { name: "PLAIN PARATHA SET", price: 15.90, vegan: true, description: "2 pcs of soft parathas served with comforting moong dal and tangy pickle." },
      { name: "ALOO PARATHA SET", price: 15.90, vegan: true, description: "1 pc of fluffy, stuffed paratha filled with spiced potato, served with fresh yogurt and pickle." },
      { name: "PANEER PARATHA SET", price: 16.90, description: "1 pc of stuffed paneer paratha served with cooling fresh yoghurt and pickle." },
      { name: "ALOO GOBI", price: 19.90, vegan: true, description: "Classic recipe of potatoes and cauliflower cooked with aromatic spices, herbs, and a touch of freshness." },
      { name: "BHINDI MASALA", price: 23.90, vegan: true, description: "Fresh okra cooked with onions, tomatoes & traditional Indian spices in a flavorful homestyle masala gravy." },
      { name: "PALAK PANEER", price: 25.90, description: "Fresh paneer cubes cooked in a creamy spinach gravy with aromatic spices." },
    ],
  },
  {
    title: "D'BIRYANI & FRIED RICE CORNER",
    rows: [1],
    images: [{ file: "mixed-vegetable-biryani.jpg", alt: "Mixed Vegetable Biryani" }],
    items: [
      { name: "MIXED VEGETABLE BIRYANI", price: 21.90, description: "Fragrant Basmati Biryani Rice served with vegetables, pickle, fresh curd & papadom." },
      { name: "DAL CHAWAL", price: 12.90, vegan: true, description: "Your favourite lentils cooked and served with aromatic steamed quality rice, pickle & papadom." },
      { name: "MIXED VEGETABLE FRIED RICE", price: 15.90, vegan: true, description: "Fragrant rice stir-fried with fresh mixed vegetables and light soy seasoning, cucumber & sauce." },
      { name: "SCHEZWAN MIXED VEGETABLE FRIED RICE", price: 17.90, description: "A spicy upgraded fried rice loaded with veggies and coated in rich, tangy Schezwan flavours." },
      { name: "SOY CHUNK MIX VEGETABLE BIRYANI", price: 23.90, description: "Protein filled fragrant Basmati Biryani Rice served with vegetables, pickle, fresh curd & papadom." },
      { name: "ROYALE PANEER MIX VEGETABLE BIRYANI", price: 25.90, description: "Paneer filled fragrant Basmati Biryani Rice served with vegetables, pickle, fresh curd & papadom." },
    ],
  },
  {
    title: "FRIES & SANDWICH",
    rows: [1],
    images: [{ file: "bombay-fold.jpg", alt: "Bombay Fold" }],
    items: [
      { name: "BOMBAY FOLD", price: 23.90, vegan: true, description: "2 pcs of crispy grilled fold stuffed with onion, capsicum, paneer, & cheese." },
      { name: "BOMBAY GRILL SANDWICH", price: 14.90, description: "2 pcs of Mumbai-style grilled sandwich with veggies, chutney & potato." },
      { name: "BUTTER SPICY SWEET CORN", price: 8.90, vegan: true, description: "Preeti's home butter-tossed sweet corn with mild spices." },
      { name: "BOMBAY FRENCH FRIES", price: 11.90, vegan: true, description: "Tray of desi masala fries with mild spices served with mayonnaise/sauce." },
      { name: "THE CURLY FRIES", price: 14.90, vegan: true, description: "Crispy curly fries seasoned with mild spices served with mayonnaise/sauce." },
      { name: "POTATO WEDGES", price: 14.90, vegan: true, description: "Golden wedges topped with mild spices served with mayonnaise/sauce." },
    ],
  },
  {
    title: "SAVER SET & GUJARATI SPECIALS",
    rows: [3],
    images: [
      { file: "chole-puri.jpg", alt: "Chole Puri saver set" },
      { file: "gujarati-dhokla.jpg", alt: "Gujarati Dhokla" },
      { file: "gujarati-khandvi.jpg", alt: "Gujarati Khandvi" },
    ],
    items: [
      { name: "CHOLE PURI", price: 18.90, vegan: true, description: "2 deep-fried Puris served with flavourful chickpea curry, raita, pickle and onions." },
      { name: "GUJARATI DHOKLA", price: 25.90, vegan: true, description: "7 pcs of steamed Gujarati savory cake made from fermented gram flour, tempered with mustard seeds, curry leaves & green chilies, & tamarind chutney." },
      { name: "GUJARATI KHANDVI", price: 27.90, vegan: true, description: "7 pcs of soft and silky Gujarati gram flour rolls delicately seasoned with mustard seeds, curry leaves & fresh coconut." },
    ],
  },
  {
    title: "SWEET TREATS",
    rows: [2],
    images: [
      { file: "rasmalai.jpg", alt: "Rasmalai" },
      { file: "gulab-jamun.jpg", alt: "Gulab Jamun" },
    ],
    items: [
      { name: "RASMALAI", price: 18.90, description: "A dual piece of soft, sweet, and spongy delight soaked in aromatic flavored milk, topped with almond slivers and saffron." },
      { name: "GULAB JAMUN", price: 9.90, description: "2 pieces of homemade, deep-fried milk dough balls soaked in rich and aromatic sugar syrup." },
    ],
  },
  {
    title: "TEA-TIME SPECIALS",
    rows: [3, 3],
    images: [
      { file: "chai.jpg", alt: "Desi-style Gujarati Chai" },
      { file: "cutting-chai.jpg", alt: "Cutting Chai" },
      { file: "thepla-set.jpg", alt: "Thepla Set with Cutting Chai" },
      { file: "chai-biskut-g.jpg", alt: "Chai Biskut G" },
      { file: "nashto-puri.jpg", alt: "Nashto Puri with Cutting Chai" },
      { file: "maska-pav.jpg", alt: "Maska Pav with Cutting Chai" },
    ],
    items: [
      { name: "CHAI/COFFEE", price: 5.90, description: "Our desi-style Gujarati chai or coffee, brewed just like the ones you'd find on the bustling streets of India. Rich, aromatic, and spiced to perfection!" },
      { name: "CUTTING CHAI", price: 2.50, description: "Our cutting chai is popular for its strong, spiced tea served in half-glass portions for quick and energizing breaks!" },
      { name: "THEPLA SET", price: 13.90, description: "Our trending soft, 2 pcs of authentic Gujarati thepla served with our hot, aromatic cutting chai." },
      { name: "CHAI BISKUT G", price: 4.90, description: "Cutting chai, just like the streets of India - perfectly paired with 2 pcs Parle-G / Tiger biscuits for a nostalgic bite." },
      { name: "NASHTO PURI", price: 10.90, description: "5 authentic Gujarati breakfast handmade Puri (Methi Puri) served with our best selling hot cutting chai." },
      { name: "MASKA PAV", price: 7.90, description: "Our trending soft, 2 pcs medium sized fluffy pav with lots of cream and served with our hot, aromatic cutting chai." },
    ],
  },
  {
    title: "DRINKS",
    rows: [3, 3],
    images: [
      { file: "chaas.jpg", alt: "Chaas (Mooru)" },
      { file: "lassi.jpg", alt: "Classic Home Lassi" },
      { file: "badam-milk.jpg", alt: "Badam Milk" },
      { file: "lime-sherbet.jpg", alt: "Lime Sherbet" },
      { file: "juice-boost.jpg", alt: "Juice Boost" },
      { file: "soft-drinks.jpg", alt: "Coke / 100 Plus / Sprite" },
    ],
    items: [
      { name: "CHAAS (MOORU)", price: 12.90, description: "Spiced buttermilk drink made from fresh yogurt known for its refreshing and cooling effect especially during hot weather." },
      { name: "CLASSIC HOME LASSI", price: 13.90, description: "A rich, creamy, and refreshing traditional drink made with yogurt and a touch of sweetness, smooth. Available flavours: original, mango, strawberry, apple." },
      { name: "BADAM MILK", price: 14.90, description: "Creamy chilled milk blended with almonds, saffron & aromatic Indian spices for a rich traditional taste." },
      { name: "LIME SHERBET", price: 10.90, vegan: true, description: "Refreshing chilled lime drink (Limbu Paani) with the perfect balance of sweet, salty & tangy flavours." },
      { name: "JUICE BOOST", price: 5.90, description: "Refreshing fruit juices served chilled. A light and fruity choice to complement your meal - available in mango, orange, or apple flavors." },
      { name: "COKE/100 PLUS/SPRITE", price: 4.90, description: "Refreshing chilled drinks to complement your meal. Available in three favorites: classic Coke, zesty Sprite, and energizing 100 Plus." },
    ],
  },
  {
    title: "FRESH PANEER & PICKLE",
    rows: [2],
    images: [
      { file: "fresh-paneer.jpg", alt: "Fresh Paneer" },
      { file: "mango-pickle.jpg", alt: "Preeti's Mango Pickle" },
    ],
    items: [
      { name: "FRESH PANEER", price: 79.90, description: "Freshmade authentic Indian paneer (cottage cheese), soft in texture and rich in creamy flavour. 1 serving - 900 gm." },
      { name: "PREETI'S MANGO PICKLE", price: 18.90, vegan: true, description: "Homemade sour & spicy mango pickle prepared with traditional Indian spices for a bold, tangy & flavorful taste. Serving - 200 gm." },
    ],
  },
];

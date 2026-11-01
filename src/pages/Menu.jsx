import Foodname from "../components/Foodname";
import { menuCategories, imageAspect } from "./menuData";

function MenuPhotos({ category, eager }) {
  const rows = category.rows.map((count, rowIndex) => {
    const start = category.rows.slice(0, rowIndex).reduce((sum, n) => sum + n, 0);
    return category.images.slice(start, start + count);
  });
  const rowAspects = rows.map((row) => row.reduce((sum, image) => sum + imageAspect[image.file], 0));
  // On small screens the block has no menu column beside it, so its shape comes from the photos.
  const blockAspect = 1 / rowAspects.reduce((sum, aspect) => sum + 1 / aspect, 0);

  // Rows and photos grow in proportion to their aspect ratios, so each photo fills its
  // cell with minimal cropping and the whole block fills the height of the menu column.
  return (
    <div
      className="relative min-w-0 order-1 lg:order-2 aspect-(--photos-aspect) lg:aspect-auto"
      style={{ "--photos-aspect": blockAspect.toFixed(3) }}
    >
      <div className="absolute inset-0 flex flex-col gap-3">
        {rows.map((row, rowIndex) => (
          <div
            key={row[0].file}
            className="flex gap-3 min-h-0"
            style={{ flex: `${100 / rowAspects[rowIndex]} 1 0%` }}
          >
            {row.map((image) => (
              <div
                key={image.file}
                className="relative min-w-0 overflow-hidden rounded-3xl shadow-lg"
                style={{ flex: `${imageAspect[image.file] * 100} 1 0%` }}
              >
                <img
                  src={import.meta.env.BASE_URL + "menu/" + image.file}
                  className="absolute inset-0 w-full h-full object-cover"
                  alt={image.alt}
                  loading={eager ? "eager" : "lazy"}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function Menu() {
  return (
    <div>
      {menuCategories.map((category, categoryIndex) => {
        const isClassic = categoryIndex === 0;
        return (
          <section key={category.title} className="bg-[#fffced] py-6 md:px-15 px-5">
            {isClassic && (
              <>
                <h1 className="text-[#800000] font-bold">RESTAURANT MENU</h1>
                <div className="flex items-center text-black gap-1">
                  <img src={import.meta.env.BASE_URL + "Icons/Vegan_icon.png"} alt="Vegan" className="w-10 h-10" />
                  <p className="font-text">Available Vegan</p>
                </div>
              </>
            )}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
              <div className="flex flex-col text-left space-y-4 order-2 lg:order-1">
                <h2 className="text-4xl font-bold text-[#800000]">{category.title}</h2>
                {category.items.map((item) => <Foodname key={item.name} {...item} />)}
              </div>
              <MenuPhotos category={category} eager={isClassic} />
            </div>
          </section>
        );
      })}
      <section className="bg-[#fffced] py-6 md:px-15 px-5">
        <p className="font-text text-black mb-6">All food and drink items are subject to a 10% service charge.</p>
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

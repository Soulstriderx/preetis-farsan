import Carousel from "../../Carousel";
import foodImages from "../data/foodImages";

export default function Food() {
  return (
    <div className="">
      <div className="mb-10 mt-20 px-15">
        <h1 className="text-[#800000] font-bold">Popular Favourites</h1>
      </div>
      <div className="py-10">
        <Carousel images={foodImages} />
      </div>
    </div>
  )
}
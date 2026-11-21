import Carousel from "../../Carousel";
import customerImages from "../data/customers";

export default function Customers() {
  return (
    <div className="sm:px-15 px-5">
      <div className="mb-10 mt-20 px-0 sm:px-15">
        <h1 className="text-[#800000] font-bold leading-tight text-center">OUR CUSTOMERS</h1>
      </div>
      <div className="py-10">
        <Carousel images={customerImages} fullw={true} />
      </div>
    </div>
  )
}

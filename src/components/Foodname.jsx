export default function Foodname({ name, description, price, vegan = false }) {
  return (
    <div className="">
      <div className="flex items-center text-black gap-1">
        <p className="font-title">{name}</p>
        {vegan && (
          <img src={import.meta.env.BASE_URL + "Icons/Vegan_icon.png"} alt="Vegan" className="w-7 h-7" />
        )}
        {price !== undefined && <span className="font-title ml-auto pl-2 whitespace-nowrap">{`RM${price.toFixed(2)}`}</span>}
      </div>
      <p className="font-text">{description}</p>
    </div>
  );
}

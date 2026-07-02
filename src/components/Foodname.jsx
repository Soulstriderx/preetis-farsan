export default function Foodname({ name, description, vegan = false }) {
  return (
    <div className="">
      <div className="flex items-center text-black gap-1">
        <p>{name}</p>
        {vegan && (
          <img src={import.meta.env.BASE_URL + "Icons/Vegan_icon.png"} alt="Vegan" className="w-7 h-7" />
        )}
      </div>
      <p>{description}</p>
    </div>
  );
}

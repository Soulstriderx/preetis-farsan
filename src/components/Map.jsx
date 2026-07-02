export default function Map() {
  return (
    <div className="w-full border border-[#800000] bg-[#800000] mx-auto rounded-xl text-center overflow-hidden shadow-lg">
      <iframe
        src="https://www.google.com/maps?q=Preeti's+Farsan+Vegetarian+%26+Vegan+Penang&output=embed"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <p className="text-[#fffced] font-semibold py-4">
        92B, Lebuh Gereja, 10200 George Town, Pulau Pinang
      </p>
    </div>
  );
}

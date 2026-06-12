export default function Map() {
  return (
    <div className="w-full max-w-6xl mx-auto rounded-xl overflow-hidden shadow-md">
      <iframe
        src="https://www.google.com/maps?q=Preeti's+Farsan+Vegetarian+%26+Vegan+Penang&output=embed"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}

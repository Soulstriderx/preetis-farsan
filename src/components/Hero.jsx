export default function Hero({ children }) {
  return (
    <section className="relative h-100 w-full overflow-hidden">
      
      <div className="absolute inset-0 z-0">
        {children}
      </div>

      <div className="absolute inset-0 bg-black/40 z-10" />

      <div className="relative z-20 flex flex-col items-center justify-center h-full">
        <img src="/Logo/Preeti's Farsan_OfficialLogo_Cropped_Trans.png" alt="Logo" className="h-32 mb-4" />
        {/* <h1 className="text-5xl font-bold">Welcome to Our Café</h1>
        <p className="mt-4 text-lg">Fresh food. Fresh vibes.</p>

        <button className="mt-6 bg-orange-500 px-6 py-3 rounded-full hover:bg-orange-600 transition">
          Order Now
        </button> */}
      </div>
    </section>
  );
}
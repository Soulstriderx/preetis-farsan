import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronsLeft, ChevronsRight } from "lucide-react";

function useVisibleCount() {
  const [count, setCount] = useState(4);
  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setCount(1);
      else if (window.innerWidth < 768) setCount(2);
      else if (window.innerWidth < 1024) setCount(3);
      else setCount(4);
    };
    update();
    addEventListener("resize", update);
    return () => removeEventListener("resize", update);
  }, []);
  return count;
}

export default function Carousel({ images }) {
  const visibleCount = useVisibleCount();
  const [startIdx, setStartIdx] = useState(0);

  const next = () => {
    const nextIdx = startIdx + visibleCount;
    setStartIdx(nextIdx >= images.length ? 0 : nextIdx);
  };
  const prev = () => {
    const prevIdx = startIdx - visibleCount;
    setStartIdx(prevIdx < 0 ? Math.max(0, images.length - visibleCount) : prevIdx);
  };

  const stripWidth = (images.length / visibleCount) * 100;
  const offset = (startIdx * 100) / images.length;

  return (
    <div className="relative w-full max-w-5xl mx-auto overflow-hidden">
      <motion.div
        animate={{ x: `-${offset}%` }}
        transition={{ type: "spring", stiffness: 250, damping: 25 }}
        className="flex gap-4"
        style={{ width: `${stripWidth}%` }}
      >
        {images.map((img, i) => (
          <div key={i} style={{ width: `${100 / images.length}%` }}>
            <img
              src={import.meta.env.BASE_URL + img.src}
              alt={img.alt}
              className="w-full h-90 object-cover rounded-xl shadow-lg"
            />
            <p className="text-[#800000] text-lg font-semibold text-center">
              {img.alt}
            </p>
          </div>
        ))}
      </motion.div>

      <button
        onClick={prev}
        className="absolute left-1 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full w-10 h-10 flex items-center justify-center transition z-10"
      >
        <ChevronsLeft size={32} color="#fffced" />
      </button>
      <button
        onClick={next}
        className="absolute right-1 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full w-10 h-10 flex items-center justify-center transition z-10"
      >
        <ChevronsRight size={32} color="#fffced" />
      </button>
    </div>
  );
}

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronsLeft, ChevronsRight, Star } from "lucide-react";
import reviewData from "./home/data/reviews";

// Usage
// Reviews
// <ReviewCarousel />

// Images
// <ReviewCarousel variant="images" images={[
//   { src: "Food Pictures/IMG_6233.jpeg", alt: "Pav Bhaji", caption: "Signature Pav Bhaji" },
// ]} />

function useVisibleCount() {
  const [count, setCount] = useState(3);
  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setCount(1);
      else if (window.innerWidth < 1024) setCount(2);
      else setCount(3);
    };
    update();
    addEventListener("resize", update);
    return () => removeEventListener("resize", update);
  }, []);
  return count;
}

export default function ReviewCarousel({ variant = "reviews", reviews = reviewData, images }) {
  const visibleCount = useVisibleCount();
  const [startIdx, setStartIdx] = useState(0);

  const items = variant === "images" ? images : reviews;
  const total = items?.length ?? 0;

  const next = () => {
    const nextIdx = startIdx + visibleCount;
    setStartIdx(nextIdx >= total ? 0 : nextIdx);
  };
  const prev = () => {
    const prevIdx = startIdx - visibleCount;
    setStartIdx(prevIdx < 0 ? Math.max(0, total - visibleCount) : prevIdx);
  };

  const stripWidth = (total / visibleCount) * 100;
  const offset = (startIdx * 100) / total;

  return (
    <div className="relative w-full max-w-5xl mx-auto overflow-hidden">
      <motion.div
        animate={{ x: `-${offset}%` }}
        transition={{ type: "spring", stiffness: 250, damping: 25 }}
        className="flex gap-6"
        style={{ width: `${stripWidth}%` }}
      >
        {items.map((item, i) => (
          variant === "images" ? (
            <div
              key={i}
              style={{ width: `${100 / total}%` }}
            >
              <img
                src={import.meta.env.BASE_URL + item.src}
                alt={item.alt}
                className="w-full aspect-4/4 object-cover rounded-xl shadow-md"
              />
              {item.caption && (
                <p className="text-[#800000] text-lg font-semibold text-center mt-2">
                  {item.caption}
                </p>
              )}
            </div>
          ) : (
            <div
              key={i}
              style={{ width: `${100 / total}%` }}
              className="bg-[#fffced] border-3 border-[#800000]/20 rounded-xl p-6 flex flex-col justify-between shadow-lg my-4"
            >
              <div>
                <p className="text-[#800000] font-semibold pb-2">{item.name}</p>
                <div className="flex gap-1 justify-center items-center mb-3">
                  {Array.from({ length: item.rating }, (_, j) => (
                    <Star key={j} size={18} fill="#800000" color="#800000" />
                  ))}
                </div>
                <p className="text-[#969695] italic leading-relaxed">
                  &ldquo;{item.text}&rdquo;
                </p>
              </div>
            </div>
          )
        ))}
      </motion.div>

      <button
        onClick={prev}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full w-10 h-10 flex items-center justify-center transition z-10"
      >
        <ChevronsLeft size={32} color="#fffced" />
      </button>
      <button
        onClick={next}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full w-10 h-10 flex items-center justify-center transition z-10"
      >
        <ChevronsRight size={32} color="#fffced" />
      </button>
    </div>
  )
}


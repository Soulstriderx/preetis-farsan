import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronsLeft, ChevronsRight, Star } from "lucide-react";

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

const defaultReviews = [
  {
    name: "Sarah L.",
    rating: 5,
    text: "Absolutely love the pav bhaji! Reminds me of the streets of Mumbai. A must-try for anyone craving authentic Gujarati flavors.",
  },
  {
    name: "Ramesh K.",
    rating: 5,
    text: "The dhokla is incredibly soft and perfectly spiced. My family's go-to spot for weekend treats.",
  },
  {
    name: "Priya M.",
    rating: 5,
    text: "Finally found a place that does vada pav justice. The chutneys are spot on!",
  },
  {
    name: "Aisha T.",
    rating: 5,
    text: "The masala chai is divine — brewed just the way it should be. Pair it with a samosa chat for the perfect evening snack.",
  },
  {
    name: "Vikram S.",
    rating: 5,
    text: "Great vegetarian options that don't compromise on taste. The dabeli is a personal favorite.",
  },
  {
    name: "Anita R.",
    rating: 5,
    text: "Their kachori is crispy, flaky, and the filling is perfectly spiced. Everything tastes homemade.",
  },
  {
    name: "Deepa N.",
    rating: 5,
    text: "Customer for life! The quality and consistency are unmatched. Their farsan selection is incredible.",
  },
  {
    name: "Raj P.",
    rating: 5,
    text: "Authentic street food experience without having to leave Penang. The mix of flavors takes me right back to India.",
  },
  {
    name: "Meera J.",
    rating: 5,
    text: "Love that they offer Jain-friendly options without any fuss. The team is always warm and welcoming.",
  },
];

export default function ReviewCarousel({ variant = "reviews", reviews = defaultReviews, images }) {
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
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: item.rating }, (_, j) => (
                    <Star key={j} size={18} fill="#800000" color="#800000" />
                  ))}
                </div>
                <p className="text-[#969695] italic leading-relaxed">
                  &ldquo;{item.text}&rdquo;
                </p>
              </div>
              <p className="text-[#800000] font-semibold mt-4">— {item.name}</p>
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


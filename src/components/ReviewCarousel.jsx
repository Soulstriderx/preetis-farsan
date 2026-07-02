import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import { ChevronsLeft, ChevronsRight, Star } from "lucide-react";
import reviewData from "./home/data/reviews";

function useVisibleCount() {
  const [count, setCount] = useState(3);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setCount(1);
      else if (window.innerWidth < 1024) setCount(2);
      else setCount(3);
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return count;
}

export default function ReviewCarousel({ variant = "reviews", reviews = reviewData, images }) {
  const visibleCount = useVisibleCount();

  const items = variant === "images" ? images : reviews;
  const total = items?.length || 0;

  const maxIndex = Math.max(0, total - visibleCount);

  const x = useMotionValue(0);
  const containerRef = useRef(null);

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const itemWidth = 100 / visibleCount;

  const snapTo = (newIndex) => {
    const clamped = Math.max(0, Math.min(newIndex, maxIndex));

    const width = containerRef.current?.offsetWidth || 0;
    const targetX = -(clamped * (width / visibleCount));

    animate(x, targetX, {
      type: "spring",
      stiffness: 250,
      damping: 30,
    });

    setIndex(clamped);
  };

  const next = () => {
    const newIndex = index >= maxIndex ? 0 : index + 1;
    snapTo(newIndex);
  };

  const prev = () => {
    const newIndex = index <= 0 ? maxIndex : index - 1;
    snapTo(newIndex);
  };

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      next();
    }, 5000);

    return () => clearInterval(interval);
  }, [index, paused]);

  const handleDragEnd = (_, info) => {
    const threshold = 50;

    if (info.offset.x < -threshold) next();
    else if (info.offset.x > threshold) prev();
    else snapTo(index);
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto overflow-hidden" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <motion.div
        ref={containerRef}
        className="flex cursor-grab active:cursor-grabbing"
        style={{ x }}
        drag="x"
        dragElastic={0.15}
        dragMomentum={true}
        onDragEnd={handleDragEnd}
      >
        {items.map((item, i) => (
          <div key={i} className="shrink-0 px-3" style={{ width: `${itemWidth}%` }}>
            {/* IMAGE MODE */}
            {variant === "images" ?
              <>
                <img src={import.meta.env.BASE_URL + item.src} alt={item.alt} className="w-full aspect-square object-cover rounded-xl shadow-md" />
                {item.caption && <p className="text-[#800000] text-lg font-semibold text-center mt-2">{item.caption}</p>}
              </>
            : /* REVIEW MODE */
              <div className="bg-[#fffced] border border-[#800000]/20 rounded-xl p-6 flex flex-col justify-between shadow-lg h-full">
                <div>
                  <p className="text-[#800000] font-semibold pb-2">{item.name}</p>

                  <div className="flex gap-1 justify-center items-center mb-3">
                    {Array.from({ length: item.rating }, (_, j) => (
                      <Star key={j} size={18} fill="#800000" color="#800000" />
                    ))}
                  </div>

                  <p className="text-[#969695] italic leading-relaxed">“{item.text}”</p>
                </div>
              </div>
            }
          </div>
        ))}
      </motion.div>

      {/* Navigation Buttons, Draggable on all breakpoints, if needed, uncomment */}
      {/* <button
        onClick={prev}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full w-10 h-10 flex items-center justify-center z-10"
      >
        <ChevronsLeft size={32} color="#fffced" />
      </button>

      <button
        onClick={next}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full w-10 h-10 flex items-center justify-center z-10"
      >
        <ChevronsRight size={32} color="#fffced" />
      </button> */}
    </div>
  );
}

import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
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
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return count;
}

export default function Carousel({ images, fullw = false }) {
  const visibleCount = useVisibleCount();

  const x = useMotionValue(0);
  const containerRef = useRef(null);

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const itemWidth = 100 / visibleCount;

  const maxIndex = Math.max(0, images.length - visibleCount);

  const snapTo = (newIndex) => {
    const width = containerRef.current?.offsetWidth || 0;
    const targetX = -(newIndex * (width / visibleCount));

    animate(x, targetX, {
      type: "spring",
      stiffness: 250,
      damping: 30,
    });

    setIndex(newIndex);
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
        {images.map((img, i) => (
          <div key={i} className="shrink-0 px-2" style={{ width: `${itemWidth}%` }}>
            <img
              src={import.meta.env.BASE_URL + img.src}
              alt={img.alt}
              className={`w-full object-cover rounded-xl shadow-lg pointer-events-none ${fullw ? "h-full" : "h-72"}`}
            />
            <p className="text-[#800000] text-lg font-semibold text-center mt-2">{img.alt}</p>
          </div>
        ))}
      </motion.div>

      {/* Navigation Buttons, Draggable on all breakpoints, if needed, uncomment */}
      {/* <button
        onClick={prev}
        className="absolute left-1 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full w-10 h-10 flex items-center justify-center z-10"
      >
        <ChevronsLeft size={32} color="#fffced" />
      </button>

      <button
        onClick={next}
        className="absolute right-1 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full w-10 h-10 flex items-center justify-center z-10"
      >
        <ChevronsRight size={32} color="#fffced" />
      </button> */}
    </div>
  );
}

import { useEffect, useState } from "react";

export default function TrustBadge({
  value,
  suffix = "",
  label,
  icon,
  delay = 0,
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 1200;
    const startTime = performance.now();

    let animationFrame;

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease-out effect
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(value * easedProgress));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    const timer = setTimeout(() => {
      animationFrame = requestAnimationFrame(animate);
    }, delay * 1000);

    return () => {
      clearTimeout(timer);

      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [value, delay]);

  return (
    <div
      className="
        trust-badge
        flex
        flex-col
        items-center
        justify-center
        rounded-2xl
        border
        border-white/15
        bg-white/10
        p-4
        shadow-lg
        backdrop-blur-xl
        transition-transform
        duration-300
        hover:-translate-y-1
        hover:bg-white/15
        min-h-[150px]
      "
      style={{
        animationDelay: `${delay}s`,
      }}
    >
      {/* Icon */}
      <div
        className="
          mb-4
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-2xl
          bg-blue-500/20
          text-2xl
          text-cyan-300
        "
      >
        {icon}
      </div>

      {/* Number */}
      <h3 className="text-2xl font-bold text-white sm:text-3xl">
        {count}
        {suffix}
      </h3>

      {/* Label */}
      <p className="mt-2 text-center text-sm font-medium text-slate-300 sm:text-base">
        {label}
      </p>
    </div>
  );
}
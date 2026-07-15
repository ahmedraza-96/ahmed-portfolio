"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Play, X } from "lucide-react";

interface ProjectMediaProps {
  name: string;
  image?: string;
  video?: string;
}

/**
 * Project card media block: the screenshot, plus — when a demo video exists —
 * a play-button overlay that opens the narrated demo in a full-width lightbox.
 */
export function ProjectMedia({ name, image, video }: ProjectMediaProps) {
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close]);

  if (!image) return null;

  const img = (
    <Image
      src={image}
      alt={`${name} screenshot`}
      width={1600}
      height={900}
      className="aspect-video w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
    />
  );

  if (!video) {
    return <div className="overflow-hidden border-b border-line">{img}</div>;
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Watch ${name} demo video`}
        className="relative block w-full cursor-pointer overflow-hidden border-b border-line text-left"
      >
        {img}
        <span className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors duration-300 group-hover:bg-black/45">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white shadow-[0_8px_32px_-8px_var(--glow)] transition-transform duration-300 group-hover:scale-110">
            <Play className="ml-0.5 h-6 w-6" fill="currentColor" />
          </span>
        </span>
        <span className="absolute bottom-3 right-3 rounded-full border border-line bg-surface/90 px-3 py-1 font-mono text-xs text-ink backdrop-blur-sm">
          Watch demo · 2 min
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm sm:p-8"
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label={`${name} demo video`}
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={close}
                aria-label="Close video"
                className="absolute -top-11 right-0 flex h-9 w-9 items-center justify-center rounded-full border border-line bg-surface text-muted transition-colors hover:text-ink"
              >
                <X className="h-4 w-4" />
              </button>
              <video
                controls
                autoPlay
                playsInline
                preload="none"
                poster={image}
                src={video}
                className="aspect-video w-full rounded-xl border border-line bg-black shadow-[0_32px_96px_-32px_rgba(0,0,0,0.9)]"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

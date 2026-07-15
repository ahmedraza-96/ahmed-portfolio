"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Play, X } from "lucide-react";
import { EASE } from "@/lib/motion";

interface ProjectMediaProps {
  name: string;
  image?: string;
  video?: string;
}

/**
 * Project media: hairline-framed poster that opens the narrated demo video
 * in a full-width lightbox.
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

  const lightbox = video && (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: EASE }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-bg/90 p-4 backdrop-blur-sm sm:p-8"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={`${name} demo video`}
        >
          <motion.div
            initial={{ scale: 0.97, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.97, opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="relative w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close video"
              className="text-label absolute -top-11 right-0 flex h-9 items-center gap-2 text-muted transition-colors hover:text-ink"
            >
              Close <X className="h-4 w-4" />
            </button>
            <video
              controls
              autoPlay
              playsInline
              preload="none"
              poster={image}
              src={video}
              className="aspect-video w-full rounded-sm border border-line bg-black"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  if (!image) return null;

  const img = (
    <Image
      src={image}
      alt={`${name} screenshot`}
      width={1600}
      height={900}
      className="aspect-video w-full object-cover object-top transition-transform duration-700 group-hover/media:scale-[1.02]"
    />
  );

  if (!video) {
    return <div className="overflow-hidden rounded-sm border border-line">{img}</div>;
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Watch ${name} demo video`}
        className="group/media relative block w-full cursor-pointer overflow-hidden rounded-sm border border-line text-left"
      >
        {img}
        <span className="absolute inset-0 bg-bg/20 transition-colors duration-500 group-hover/media:bg-bg/5" />
        <span className="absolute bottom-0 left-0 flex items-center gap-3 bg-bg/85 px-4 py-3 backdrop-blur-sm">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink text-bg transition-transform duration-500 group-hover/media:scale-110">
            <Play className="ml-0.5 h-3.5 w-3.5" fill="currentColor" />
          </span>
          <span className="text-label text-ink">Play demo — 2 min</span>
        </span>
      </button>
      {lightbox}
    </>
  );
}

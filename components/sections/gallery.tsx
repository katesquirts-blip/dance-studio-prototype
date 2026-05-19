"use client"

import Image from "next/image"
import { X } from "lucide-react"
import { type Dispatch, type RefObject, type SetStateAction } from "react"

import { allGalleryPhotos, featuredGalleryPhotos, reels } from "@/lib/site-config"

type GallerySectionProps = {
  isVisible: boolean
  setSectionRef: (id: string, element: HTMLElement | null) => void
  galleryOpen: boolean
  setGalleryOpen: (open: boolean) => void
  enlargedPhoto: string | null
  setEnlargedPhoto: (photo: string | null) => void
  visibleCount: number
  setVisibleCount: Dispatch<SetStateAction<number>>
  reelsExpanded: boolean
  setReelsExpanded: (expanded: boolean) => void
  videoRefs: RefObject<HTMLVideoElement | null>[]
  playingVideos: Set<number>
  setPlayingVideos: Dispatch<SetStateAction<Set<number>>>
}

export function GallerySection({
  isVisible,
  setSectionRef,
  galleryOpen,
  setGalleryOpen,
  enlargedPhoto,
  setEnlargedPhoto,
  visibleCount,
  setVisibleCount,
  reelsExpanded,
  setReelsExpanded,
  videoRefs,
  playingVideos,
  setPlayingVideos,
}: GallerySectionProps) {
  return (
    <>
      <section
        id="gallery"
        ref={(element) => setSectionRef("gallery", element)}
        className={`pt-20 pb-0 transition-all duration-700 sm:pt-28 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 px-4 text-left lg:px-0 lg:text-center">
            <h2 className="mb-4 text-left font-serif text-4xl font-bold text-foreground sm:text-5xl lg:text-center">I Nostri Momenti</h2>
            <p className="max-w-none text-lg text-pretty text-foreground lg:mx-auto lg:max-w-2xl">
              Istantanee di passione, dedizione e gioia
            </p>
          </div>

          <div className="grid grid-cols-2 gap-1.5 sm:grid-cols-3 sm:gap-4">
            {featuredGalleryPhotos.map((image) => (
              <button
                key={image.src}
                onClick={() => setEnlargedPhoto(image.src)}
                className="group relative aspect-square cursor-zoom-in overflow-hidden rounded-sm"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 transition-colors duration-500 group-hover:bg-black/0" />
              </button>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <button
              onClick={() => {
                setGalleryOpen(true)
                setVisibleCount(20)
              }}
              className="rounded-sm border border-primary bg-transparent px-8 py-3 text-sm font-semibold text-primary transition-colors"
            >
              Vedi tutte le foto
            </button>
          </div>

          <div className="mt-20 border-t border-border" />

          <div className="mt-0 pb-20">
            <div className="mb-12 px-4 text-left lg:px-0 lg:text-center">
              <h2 className="mb-4 text-left font-serif text-4xl font-bold text-foreground sm:text-5xl lg:text-center">I Nostri Video</h2>
              <p className="max-w-none text-lg text-pretty text-foreground lg:mx-auto lg:max-w-2xl">
                Lovely Dance in movimento - momenti di energia e femminilità
              </p>
            </div>
            <div className={reelsExpanded ? "flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 md:grid md:grid-cols-3 md:overflow-x-visible md:pb-0" : "flex justify-center"}>
              {reels
                .map((src, index) => ({ src, index, ref: videoRefs[index] }))
                .filter(({ index }) => reelsExpanded || index === 0)
                .map(({ ref, src, index }) => (
                  <div key={src} className={`relative aspect-[9/16] overflow-hidden rounded-sm bg-black ${reelsExpanded ? "w-[80vw] flex-shrink-0 snap-start md:w-auto" : "w-full max-w-sm"}`}>
                    <video
                      ref={ref}
                      src={src}
                      className="h-full w-full object-cover"
                      loop
                      playsInline
                      muted
                      preload="none"
                      onClick={() => {
                        if (ref.current?.paused) ref.current.play()
                        else ref.current?.pause()
                      }}
                      onPlay={() => {
                        setPlayingVideos((previous) => new Set(previous).add(index))
                        videoRefs.forEach((item, itemIndex) => {
                          if (item.current && itemIndex !== index) {
                            item.current.pause()
                            setPlayingVideos((previous) => {
                              const next = new Set(previous)
                              next.delete(itemIndex)
                              return next
                            })
                          }
                        })
                      }}
                      onPause={() =>
                        setPlayingVideos((previous) => {
                          const next = new Set(previous)
                          next.delete(index)
                          return next
                        })
                      }
                    />
                    {!playingVideos.has(index) && (
                      <button
                        className="absolute inset-0 flex items-center justify-center bg-black/50"
                        onClick={() => ref.current?.play()}
                        aria-label="Play video"
                      >
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                          <polygon points="18,12 38,24 18,36" fill="var(--primary)" />
                        </svg>
                      </button>
                    )}
                  </div>
                ))}
            </div>
            <div className="mt-6 flex justify-center">
              <button
                onClick={() => setReelsExpanded(!reelsExpanded)}
                className="rounded-sm border border-primary bg-transparent px-8 py-3 text-sm font-semibold text-primary transition-colors"
              >
                {reelsExpanded ? "Chiudi video ↑" : "Vedi altri video"}
              </button>
            </div>
          </div>
        </div>
      </section>

      {galleryOpen && (
        <div
          className="fixed inset-0 z-[10500] flex items-start justify-center overflow-y-auto bg-black/[0.95]"
          onClick={(event) => {
            if (event.target === event.currentTarget) setGalleryOpen(false)
          }}
        >
          <button
            onClick={() => setGalleryOpen(false)}
            className="fixed top-6 right-6 z-[10510] text-3xl font-light text-foreground transition-opacity hover:opacity-70"
            aria-label="Close gallery"
          >
            <X size={32} />
          </button>
          <div className="mx-auto w-full max-w-7xl px-4 py-16">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {allGalleryPhotos.slice(0, visibleCount).map((src, index) => (
                <button
                  key={`${src}-${index}`}
                  onClick={() => setEnlargedPhoto(src)}
                  className="group relative aspect-square cursor-zoom-in overflow-hidden rounded-sm"
                >
                  <div className="aspect-square overflow-hidden">
                    <Image
                      src={src}
                      alt={`Gallery photo ${index + 1}`}
                      width={400}
                      height={400}
                      quality={75}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/30" />
                </button>
              ))}
            </div>
            {visibleCount < allGalleryPhotos.length && (
              <div className="mt-6 flex justify-center">
                <button
                  onClick={() => setVisibleCount((previous) => previous + 20)}
                  className="border border-primary bg-transparent px-8 py-3 font-sans font-semibold text-primary"
                >
                  Carica altre foto
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {enlargedPhoto && (
        <div className="fixed inset-0 z-[10500] flex items-center justify-center bg-black/[0.95]" onClick={() => setEnlargedPhoto(null)}>
          <button
            onClick={() => setEnlargedPhoto(null)}
            className="fixed top-6 right-6 z-[10510] text-3xl font-light text-foreground transition-opacity hover:opacity-70"
            aria-label="Close photo"
          >
            <X size={32} />
          </button>
          <div className="relative h-[90vh] w-[90vw]">
            <Image src={enlargedPhoto} alt="Enlarged photo" fill className="object-contain" sizes="90vw" />
          </div>
        </div>
      )}
    </>
  )
}

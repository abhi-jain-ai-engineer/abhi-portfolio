/**
 * Every Higgsfield/Flow-generated media asset the site uses, keyed by name.
 * Paths are RELATIVE (no leading slash) so they resolve correctly under the
 * GitHub Pages subpath (basePath) this site deploys to — an absolute "/media/..."
 * path would 404 once the site isn't served from the domain root. If a file
 * is missing, `BackgroundPlate` falls back to a themed CSS gradient.
 */
export interface MediaAsset {
  /** Still image — always the fallback for a clip, and the only file for a still-only asset. */
  poster: string;
  /** Looping ambient clip, if this asset has one. */
  clip?: string;
  alt: string;
}

export const assetManifest = {
  castleEstablishing: {
    poster: "media/posters/castle-establishing.webp",
    clip: "media/clips/castle-flythrough.mp4",
    alt: "A distant floating castle through dusk fog",
  },
  libraryAtmosphere: {
    poster: "media/posters/library-atmosphere.webp",
    alt: "An enchanted library with floating candles",
  },
  owlMessenger: {
    poster: "media/posters/owl-messenger.webp",
    clip: "media/clips/owl-takes-flight.mp4",
    alt: "An owl messenger carrying a letter",
  },
  owlDeliversLetter: {
    poster: "media/posters/owl-delivers-letter.webp",
    clip: "media/clips/owl-delivers-letter.mp4",
    alt: "An owl delivering a letter",
  },
  trophyHallAtmosphere: {
    poster: "media/posters/trophy-hall-atmosphere.webp",
    alt: "A grand hall of banners and plaques",
  },
} as const satisfies Record<string, MediaAsset>;

export type AssetKey = keyof typeof assetManifest;

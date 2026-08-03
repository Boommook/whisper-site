export type MediaCollection = Readonly<{
  title: string;
  date: string;
  location: string;
  description: string;
  image: `/${string}`;
  imageAlt: string;
  galleryUrl: `https://${string}`;
  buttonLabel: string;
  photographer: string;
}>;

export const mediaCollections = [
  {
    title: "WPI Whisper at Sectionals",
    date: "April 11–12, 2026",
    location: "Williamstown, Massachusetts",
    description:
      "Two days of tournament action, sideline energy, and competitive ultimate at New England Sectionals.",
    image: "/img/sectionals-cover.jpg",
    imageAlt: "WPI Whisper players competing at New England Sectionals",
    galleryUrl:
      "https://photo-makanapp.com/collections/2026-sectionals-williamstown",
    buttonLabel: "View Sectionals Gallery",
    photographer: "photo.makanapp",
  },
  {
    title: "WPI Whisper at RWU",
    date: "April 26, 2026",
    location: "Bristol, Rhode Island",
    description:
      "A curated collection capturing Whisper’s tournament play, team atmosphere, and sideline moments at Roger Williams University.",
    image: "/img/RWU-cover.jpg",
    imageAlt: "WPI Whisper players at the Roger Williams University tournament",
    galleryUrl:
      "https://photo-makanapp.com/collections/2026-rwu-frisbee-tournament",
    buttonLabel: "View RWU Gallery",
    photographer: "photo.makanapp",
  },
] as const satisfies readonly MediaCollection[];

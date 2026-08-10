import type { MediaCollection } from "@/types/media";

export const mediaCollections = [
  {
    id: "sectionals-2026",
    type: "external-gallery",
    title: "WPI Whisper at Sectionals",
    date: "April 11–12, 2026",
    location: "Williamstown, Massachusetts",
    description:
      "Whisper at New England Sectionals in Williamstown.",
    image: "/img/sectionals-cover.jpg",
    imageAlt: "WPI Whisper players competing at New England Sectionals",
    width: 2048,
    height: 1365,
    galleryUrl:
      "https://photo-makanapp.com/collections/2026-sectionals-williamstown",
    buttonLabel: "View Sectionals Gallery",
    creditName: "photo.makanapp",
    creditUrl: "https://photo-makanapp.com/",
    featured: true,
    publicationApproved: true,
  },
  {
    id: "rwu-2026",
    type: "external-gallery",
    title: "WPI Whisper at RWU",
    date: "April 26, 2026",
    location: "Bristol, Rhode Island",
    description:
      "Whisper on the field and sideline at Roger Williams University.",
    image: "/img/RWU-cover.jpg",
    imageAlt: "WPI Whisper players at the Roger Williams University tournament",
    width: 5424,
    height: 3616,
    galleryUrl:
      "https://photo-makanapp.com/collections/2026-rwu-frisbee-tournament",
    buttonLabel: "View RWU Gallery",
    creditName: "photo.makanapp",
    creditUrl: "https://photo-makanapp.com/",
    featured: true,
    publicationApproved: true,
  },
] as const satisfies readonly MediaCollection[];

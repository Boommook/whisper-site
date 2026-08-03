export type MediaCollection = Readonly<{
  id: string;
  type: "external-gallery";
  title: string;
  date: string;
  location: string;
  description: string;
  image: `/${string}`;
  imageAlt: string;
  width: number;
  height: number;
  galleryUrl: `https://${string}`;
  buttonLabel: string;
  creditName: string;
  creditUrl: `https://${string}`;
  featured: boolean;
  publicationApproved: boolean;
}>;

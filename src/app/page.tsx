import type { Metadata } from "next";

import { PlaceholderPage } from "@/components/layout/placeholder-page";

export const metadata: Metadata = {
  title: "Home",
  description: "The developing home of WPI Whisper men's ultimate frisbee.",
};

export default function HomePage() {
  return (
    <PlaceholderPage
      eyebrow="WPI men's ultimate"
      title="A place for Whisper to take the field."
      description="The future home page will introduce the team and provide clear paths to recruitment, the roster, and upcoming competition."
    />
  );
}

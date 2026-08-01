import type { Metadata } from "next";

import { PlaceholderPage } from "@/components/layout/placeholder-page";

export const metadata: Metadata = {
  title: "About",
  description: "About-page foundation for WPI Whisper men's ultimate frisbee.",
};

export default function AboutPage() {
  return (
    <PlaceholderPage
      eyebrow="About the team"
      title="The story behind Whisper."
      description="This page will share the team's verified identity, history, culture, and leadership once that content is approved."
    />
  );
}

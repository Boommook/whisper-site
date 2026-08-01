import type { Metadata } from "next";

import { PlaceholderPage } from "@/components/layout/placeholder-page";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact-page foundation for reaching WPI Whisper.",
};

export default function ContactPage() {
  return (
    <PlaceholderPage
      eyebrow="Contact"
      title="Start the conversation."
      description="Verified team, recruitment, and competition contact paths will be published here after their owners are confirmed."
    />
  );
}

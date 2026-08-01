import type { Metadata } from "next";

import { PlaceholderPage } from "@/components/layout/placeholder-page";

export const metadata: Metadata = {
  title: "Join Whisper",
  description: "Recruitment-page foundation for students interested in WPI Whisper.",
};

export default function JoinPage() {
  return (
    <PlaceholderPage
      eyebrow="Join Whisper"
      title="Your first point starts here."
      description="Verified recruitment guidance, expectations, and a clear interest pathway will make this the starting point for future players."
    />
  );
}

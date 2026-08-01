import type { Metadata } from "next";

import { PlaceholderPage } from "@/components/layout/placeholder-page";

export const metadata: Metadata = {
  title: "Roster",
  description: "Roster-page foundation for WPI Whisper men's ultimate frisbee.",
};

export default function RosterPage() {
  return (
    <PlaceholderPage
      eyebrow="Meet the team"
      title="The people on the line."
      description="The current roster will appear here after player information, public fields, and consent expectations are confirmed."
    />
  );
}

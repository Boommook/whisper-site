import type { Metadata } from "next";

import { PlaceholderPage } from "@/components/layout/placeholder-page";

export const metadata: Metadata = {
  title: "Schedule & Results",
  description: "Schedule-and-results foundation for WPI Whisper men's ultimate frisbee.",
};

export default function SchedulePage() {
  return (
    <PlaceholderPage
      eyebrow="Schedule & results"
      title="Know what comes next."
      description="Confirmed tournaments, games, and verified results will be organized here in a clear season view."
    />
  );
}

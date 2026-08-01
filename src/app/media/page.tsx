import type { Metadata } from "next";

import { PlaceholderPage } from "@/components/layout/placeholder-page";

export const metadata: Metadata = {
  title: "Media",
  description: "Media-page foundation for approved WPI Whisper photos and videos.",
};

export default function MediaPage() {
  return (
    <PlaceholderPage
      eyebrow="Team media"
      title="Whisper in motion."
      description="Rights-cleared team photography and accessible video will live here after assets, credits, and permissions are collected."
    />
  );
}

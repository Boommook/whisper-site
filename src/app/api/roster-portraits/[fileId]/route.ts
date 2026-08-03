import { getValidatedDrivePortrait } from "@/lib/google-drive-portraits";

export const runtime = "nodejs";

function notFound() {
  return new Response(null, {
    status: 404,
    headers: { "X-Content-Type-Options": "nosniff" },
  });
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ fileId: string }> },
) {
  const { fileId } = await params;

  try {
    const portrait = await getValidatedDrivePortrait(fileId);
    if (!portrait) return notFound();

    return new Response(portrait.bytes, {
      headers: {
        "Content-Type": portrait.mimeType,
        "X-Content-Type-Options": "nosniff",
        "Cache-Control": "public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800",
      },
    });
  } catch (error) {
    console.error(
      `[roster portrait] Unable to serve Drive file ${fileId}.`,
      error instanceof Error ? error.message : "Unknown server error",
    );
    return notFound();
  }
}

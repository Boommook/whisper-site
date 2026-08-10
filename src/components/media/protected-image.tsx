"use client";

import Image, { type ImageProps } from "next/image";

import { cn } from "@/lib/utils";

type ProtectedImageProps = Omit<
  ImageProps,
  "draggable" | "onContextMenu" | "onDragStart"
> & {
  wrapperClassName?: string;
};

/**
 * Discourages casual copy/save of credited photography (context menu, drag).
 * Does not prevent determined download via DevTools or network tools.
 */
export function ProtectedImage({
  className,
  wrapperClassName,
  alt,
  ...props
}: ProtectedImageProps) {
  return (
    <div
      className={cn("absolute inset-0 select-none", wrapperClassName)}
      onContextMenu={(event) => {
        event.preventDefault();
      }}
      onDragStart={(event) => {
        event.preventDefault();
      }}
    >
      <Image
        {...props}
        alt={alt}
        draggable={false}
        className={cn(
          "pointer-events-none select-none [-webkit-user-drag:none]",
          className,
        )}
      />
      <div aria-hidden="true" className="absolute inset-0 z-1" />
    </div>
  );
}

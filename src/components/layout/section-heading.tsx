import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className={cn("mt-3 text-balance font-heading text-3xl font-black leading-tight tracking-[-0.015em] text-[var(--text-primary)] sm:text-4xl", className)}>
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-pretty text-base leading-7 text-[var(--text-muted)] sm:text-lg sm:leading-8">
          {description}
        </p>
      ) : null}
    </div>
  );
}

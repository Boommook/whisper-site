export function SectionEmptyState({ children }: { children: string }) {
  return (
    <p className="rounded-[var(--radius-panel)] border border-dashed border-[var(--border-strong)] bg-[var(--surface)] p-6 leading-7 text-[var(--text-muted)]">
      {children}
    </p>
  );
}

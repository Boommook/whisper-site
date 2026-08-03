"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { NavigationLink } from "@/components/layout/navigation-link";
import { Wordmark } from "@/components/layout/wordmark";
import { Button } from "@/components/ui/button";
import { siteNavigation } from "@/config/navigation";

export function MobileNavigation() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label="Open navigation menu"
        >
          <Menu aria-hidden="true" className="size-6" strokeWidth={2} />
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-40 bg-black/45 backdrop-blur-[2px] data-[state=closed]:animate-none" />
        <Dialog.Content
          aria-describedby={undefined}
          className="fixed inset-y-0 right-0 z-50 flex w-[min(90vw,24rem)] flex-col border-l border-[var(--border)] bg-[var(--surface)] p-5 shadow-2xl focus:outline-none"
        >
          <div className="flex min-h-12 items-center justify-between gap-4">
            <Dialog.Title asChild>
              <Wordmark />
            </Dialog.Title>
            <Dialog.Close asChild>
              <Button variant="ghost" size="icon" aria-label="Close navigation menu">
                <X aria-hidden="true" className="size-6" strokeWidth={2} />
              </Button>
            </Dialog.Close>
          </div>

          <nav aria-label="Mobile navigation" className="mt-8">
            <ul className="grid gap-1">
              {siteNavigation.map((item) => (
                <li key={item.href}>
                  <NavigationLink
                    {...item}
                    onNavigate={() => setOpen(false)}
                    className="block min-h-12 border-b border-[var(--border)] px-2 py-3 text-base aria-[current=page]:border-[var(--brand-primary)] aria-[current=page]:bg-[var(--brand-soft)]"
                  />
                </li>
              ))}
            </ul>
          </nav>

          <p className="mt-auto border-t border-[var(--border)] pt-5 text-sm leading-6 text-[var(--text-muted)]">
            WPI Whisper · Men&apos;s Ultimate Frisbee
          </p>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

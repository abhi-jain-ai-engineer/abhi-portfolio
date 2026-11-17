"use client";

import { ReactNode } from "react";

interface PanelProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

/** The click-to-reveal detail panel used by Skills / Education / Projects, in both their R3F and DOM-fallback forms. */
export function Panel({ open, onClose, title, children }: PanelProps) {
  if (!open) return null;
  return (
    <div
      className="absolute inset-0 z-30 flex items-center justify-center bg-bg-deep/75 p-6 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="max-w-md rounded-lg border p-8 text-left shadow-2xl"
        style={{ background: "var(--bg)", borderColor: "color-mix(in srgb, var(--gold) 35%, transparent)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-4 flex items-start justify-between gap-6">
          <h3 className="font-display text-2xl text-gold-bright">{title}</h3>
          <button onClick={onClose} aria-label="Close" className="text-text-dim transition hover:text-text">
            ✕
          </button>
        </div>
        <div className="text-sm leading-relaxed text-text-dim">{children}</div>
      </div>
    </div>
  );
}

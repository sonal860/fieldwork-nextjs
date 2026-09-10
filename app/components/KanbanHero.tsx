"use client";

import { useState } from "react";

type CardData = {
  id: string;
  client: string;
  task: string;
  due: string;
  tag: "design" | "copy" | "dev";
};

const initialColumns: Record<string, { title: string; cards: CardData[] }> = {
  todo: {
    title: "Up next",
    cards: [
      { id: "c1", client: "Norton & Reid", task: "Homepage wireframes", due: "Mon", tag: "design" },
      { id: "c2", client: "Alder Studio", task: "Q3 newsletter copy", due: "Tue", tag: "copy" },
    ],
  },
  doing: {
    title: "In progress",
    cards: [
      { id: "c3", client: "Kessler Co.", task: "Checkout flow build", due: "Wed", tag: "dev" },
    ],
  },
  review: {
    title: "Client review",
    cards: [
      { id: "c4", client: "Norton & Reid", task: "Logo lockup v3", due: "Today", tag: "design" },
    ],
  },
};

const tagStyles: Record<CardData["tag"], string> = {
  design: "bg-signal/10 text-signal",
  copy: "bg-coral/10 text-coral",
  dev: "bg-ink/10 text-ink-soft",
};

export default function KanbanHero() {
  const [columns, setColumns] = useState(initialColumns);
  const [draggedFrom, setDraggedFrom] = useState<{ col: string; card: CardData } | null>(null);

  function handleDrop(targetCol: string) {
    if (!draggedFrom || draggedFrom.col === targetCol) {
      setDraggedFrom(null);
      return;
    }
    setColumns((prev) => {
      const next = { ...prev };
      next[draggedFrom.col] = {
        ...next[draggedFrom.col],
        cards: next[draggedFrom.col].cards.filter((c) => c.id !== draggedFrom.card.id),
      };
      next[targetCol] = {
        ...next[targetCol],
        cards: [...next[targetCol].cards, draggedFrom.card],
      };
      return next;
    });
    setDraggedFrom(null);
  }

  return (
    <div className="rounded-xl border border-line bg-white shadow-[0_20px_60px_-15px_rgba(18,23,43,0.25)] p-4 sm:p-5">
      <div className="flex items-center justify-between mb-4 px-1">
        <span className="text-sm font-medium text-ink-soft">Norton & Reid — Website relaunch</span>
        <span className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-coral/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-signal/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-ink/20" />
        </span>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {Object.entries(columns).map(([key, col]) => (
          <div
            key={key}
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => handleDrop(key)}
            className="bg-paper-dim rounded-lg p-2.5 min-h-[180px]"
          >
            <p className="text-[11px] font-medium uppercase tracking-wide text-ink-soft/70 px-1.5 mb-2">
              {col.title} · {col.cards.length}
            </p>
            <div className="flex flex-col gap-2">
              {col.cards.map((card) => (
                <div
                  key={card.id}
                  draggable
                  onDragStart={() => setDraggedFrom({ col: key, card })}
                  className="bg-white rounded-md p-2.5 border border-line cursor-grab active:cursor-grabbing hover:shadow-sm transition-shadow"
                >
                  <span className={`inline-block text-[10px] font-medium px-1.5 py-0.5 rounded ${tagStyles[card.tag]}`}>
                    {card.tag}
                  </span>
                  <p className="text-[13px] font-medium mt-1.5 leading-snug">{card.task}</p>
                  <p className="text-[11px] text-ink-soft mt-1">{card.client} · {card.due}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <p className="text-[11px] text-ink-soft/60 mt-3 px-1">Try dragging a card between columns.</p>
    </div>
  );
}

"use client";
import { useState } from "react";

export default function ProductDescription({ text }: { text: string }) {
  const [expanded, setExpanded] = useState(false);
  const limit = 80;

  const toggleExpanded = () => setExpanded(!expanded);

  return (
    <div className="mt-2 text-gray-600 text-sm leading-relaxed">
      <p className="line-clamp-2">
        {expanded
          ? text
          : `${text.slice(0, limit)}${text.length > limit ? "..." : ""}`}
      </p>
      {text.length > limit && (
        <button
          onClick={toggleExpanded}
          className="mt-1 text-blue-500 text-xs font-medium hover:underline focus:outline-none"
        >
          {expanded ? "See Less ▲" : "See More ▼"}
        </button>
      )}
    </div>
  );
}

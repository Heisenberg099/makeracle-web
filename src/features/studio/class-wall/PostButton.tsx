"use client";

import { useState } from "react";
import { submitPost, type Post } from "@/lib/learning/work-store";
import { studioDemo } from "@/lib/demo-data";

/**
 * Sends something to the class wall. Nothing goes up until the teacher
 * approves it; the student is told so.
 */
export function PostButton({
  post,
  label = "Post to class wall",
  className = "btn btn-red",
  disabled,
}: {
  post: () => Omit<Post, "id" | "status" | "at"> | null;
  label?: string;
  className?: string;
  disabled?: boolean;
}) {
  const [sent, setSent] = useState(false);
  return (
    <span style={{ display: "inline-flex", flexWrap: "wrap", alignItems: "center", gap: 10 }}>
      <button
        type="button"
        className={className}
        disabled={disabled || sent}
        onClick={() => {
          const p = post();
          if (!p) return;
          submitPost(p);
          setSent(true);
        }}
      >
        {sent ? "Sent for approval" : label}
      </button>
      <span className="sm" role="status">
        {sent ? `${studioDemo.teacher} checks it before your class sees it.` : ""}
      </span>
    </span>
  );
}

type Tone = "white" | "ink" | "red" | "yellow" | "grey";

const cls: Record<Tone, string> = { white: "s-card", ink: "s-card-ink", red: "s-card-red", yellow: "s-card-yellow", grey: "s-card-grey" };

/** Studio card. `tilt` gives the slight hand-placed angle the renders use (flattened on small screens). */
export function Card({
  tone = "white",
  tilt,
  as: Tag = "div",
  className,
  style,
  children,
  ...rest
}: {
  tone?: Tone;
  tilt?: "l" | "r";
  as?: "div" | "section" | "article" | "aside";
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
} & React.AriaAttributes & { id?: string }) {
  const classes = [cls[tone], tilt ? `tilt-${tilt}` : "", className ?? ""].filter(Boolean).join(" ");
  return (
    <Tag className={classes} style={style} {...rest}>
      {children}
    </Tag>
  );
}

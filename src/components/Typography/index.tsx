import { cn } from "@/lib/utils";

type TypographyProps = {
  text: string;
  className?: string;
};

function TypographyH1({ text, className }: TypographyProps) {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-4xl font-extrabold tracking-tight text-balance",
        className,
      )}
    >
      {text}
    </h1>
  );
}

function TypographyH2({ text, className }: TypographyProps) {
  return (
    <h2
      className={cn(
        "scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0",
        className,
      )}
    >
      {text}
    </h2>
  );
}

function TypographyH3({ text, className }: TypographyProps) {
  return (
    <h3
      className={cn(
        "scroll-m-20 text-2xl font-semibold tracking-tight",
        className,
      )}
    >
      {text}
    </h3>
  );
}

function TypographyP({ text, className }: TypographyProps) {
  return (
    <p className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}>
      {text}
    </p>
  );
}

function TypographySmall({ text, className }: TypographyProps) {
  return (
    <small className={cn("text-sm leading-none font-medium", className)}>
      {text}
    </small>
  );
}

function TypographyMuted({ text, className }: TypographyProps) {
  return (
    <p className={cn("text-muted-foreground text-sm", className)}>{text}</p>
  );
}

export {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyMuted,
  TypographyP,
  TypographySmall,
};

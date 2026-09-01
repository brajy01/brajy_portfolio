import { cn } from "@/lib/utils";

interface BrowserFrameProps {
  /* Mono URL shown in the top bar, e.g. "barbarafreitas.com" */
  url?: string;
  children: React.ReactNode;
  className?: string;
}

/* Minimal browser chrome around a screenshot: top bar with three dots and a
   mono URL. Keeps project imagery honest — it reads as "a real page". */
export default function BrowserFrame({
  url,
  children,
  className,
}: BrowserFrameProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-sm border border-border bg-background shadow-md",
        className,
      )}
    >
      <div
        className="flex items-center gap-1.5 px-4 py-2.5 border-b border-border"
        aria-hidden="true"
      >
        <span className="w-2.5 h-2.5 rounded-full border border-border" />
        <span className="w-2.5 h-2.5 rounded-full border border-border" />
        <span className="w-2.5 h-2.5 rounded-full border border-border" />
        {url && (
          <span className="ml-2 font-caption text-xs text-muted-foreground truncate">
            {url}
          </span>
        )}
      </div>
      <div className="relative aspect-[16/10]">{children}</div>
    </div>
  );
}

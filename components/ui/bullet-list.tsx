import AnimateOnScroll from "@/components/ui/animate-on-scroll";

/** Staggered, scroll-revealed bullet list used by project detail and the about timeline. */
export default function BulletList({ items }: { items: string[] }) {
  return (
    <AnimateOnScroll as="ul" stagger={60} className="space-y-2 sm:space-y-3">
      {items.map((item, index) => (
        <li key={index} className="detail-list-item">
          <span className="text-primary shrink-0">&bull;</span>
          <span>{item}</span>
        </li>
      ))}
    </AnimateOnScroll>
  );
}

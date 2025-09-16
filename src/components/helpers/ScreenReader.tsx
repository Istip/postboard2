export default function ScreenReader({ children }: { children: string }) {
  return <span className="sr-only">{children}</span>;
}

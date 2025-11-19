export default function HeroPage({ children, className }) {
  return (
    <div
      className={`min-h-[80dvh] rounded-4xl overflow-hidden bg-Dark-green ${className ?? ""}`}
    >
      {children}
    </div>
  );
}

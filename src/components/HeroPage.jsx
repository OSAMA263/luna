export default function HeroPage({ children, className }) {
  return (
    <div
      className={`min-h-[80dvh] rounded-4xl overflow-hidden bg-Dark-green pt-34 m-3 ${className ?? ""}`}
    >
      {children}
    </div>
  );
}

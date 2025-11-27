export default function Card({ className, children }) {
  return (
    <div
      className={`border border-Lime/20 transition-all duration-300 hover:border-Lime/50 rounded-3xl p-8 font-semibold  ${className ?? ""}`}
    >
      {children}
    </div>
  );
}

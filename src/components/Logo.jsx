import { Link } from "react-router-dom";
import { SiMoonrepo } from "react-icons/si";

export default function Logo({ className }) {
  return (
    <Link
      to="/"
      aria-label="home-logo"
      className={`text-Lime font-bold text-2xl flex items-center gap-2 ${className ?? ""}`}
    >
      <SiMoonrepo /> <span>Luna</span>
    </Link>
  );
}

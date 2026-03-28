import Link from "next/link";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-background p-4 md:px-8">
      <footer className="mx-auto flex min-h-12 max-w-6xl flex-col items-center gap-3 py-4 md:flex-row md:justify-between">
        <Link
          href="https://www.facebook.com/profile.php?id=100088580823531"
          target="_blank"
          className="hover:text-primary transform duration-300"
        >
          <FaFacebookSquare size={36} />
        </Link>
        <div>PALIVOSEDLACEK.CZ</div>
        <div>© 2025 Mgr. Ondřej Berčík</div>
      </footer>
    </div>
  );
};

export default Footer;

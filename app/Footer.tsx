import Link from "next/link";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='bg-amber-200 w-full'>
      <footer className='max-w-6xl mx-auto min-h-12 p-4 gap-3 flex items-center flex-col md:flex-row md:justify-between'>
        <Link href='https://www.facebook.com/profile.php?id=100088580823531' target='_blank' >
          <FaFacebookSquare size={28} />
        </Link>
        <div>PALIVOSEDLACEK.CZ</div>
        <div>© 2025 Ondřej Berčík</div>
      </footer>
    </div>
  )
}

export default Footer

import Link from "next/link";
import Image from "next/image";

export default function NavLogo() {
  return (
    <Link href="/" className="flex items-center gap-2 flex-shrink-0 group">
      
      {/* Uses the static file from the public folder */}
      <Image 
        src="/logo.svg" 
        alt="Ecoyaan Logo" 
        width={48} 
        height={48} 
        className="transition-transform group-hover:scale-105"
        priority
      />

      {/* Brand Text */}
      <div className="hidden sm:block">
        <h1 className="text-[#00875A] text-3xl font-bold leading-none tracking-tight">
          Ecoyaan
        </h1>
        <p className="text-[#00875A] text-[14px] font-medium mt-0.5">
          Sustainability made easy
        </p>
      </div>
    </Link>
  );
}
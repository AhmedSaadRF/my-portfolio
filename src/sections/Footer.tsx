import Link from 'next/link';
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

const footerLinks = [
  {
    title: "Whatsapp",
    link: "https://wa.me/+201063596560",
    isExternal: true,
  },
  {
    title: "Instagram",
    link: "https://www.instagram.com/ahmed7_707_7/",
    isExternal: true,
  },
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/ahmed-saad-833819366/",
    isExternal: true,
  },
  {
    title: "GitHub",
    link: "https://github.com/AhmedSaadRF",
    isExternal: true,
  },
  {
    title: "Telegram",
    link: "http://t.me/AhmedSaadAlrefaey",
    isExternal: true,
  },
  {
    title: "Email",
    link: "ahmedsaadalrefaey7@gmail.com",
    isExternal: true,
  },
];

export const Footer = () => {
  return (
    <footer className="relative overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-50"></div>
      <div className="container z-10">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col items-center gap-8">
          <div>
            <nav className="flex flex-col items-center gap-8 md:flex-row">
              {footerLinks.map(link => (
                link.isExternal ? (
                  <a key={link.title} href={link.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5">
                    <span className="font-semibold">{link.title}</span>
                    <ArrowUpRightIcon className="size-4" />
                  </a>
                ) : (
                  <Link key={link.title} href={link.link} className="inline-flex items-center gap-1.5">
                    <span className="font-semibold">{link.title}</span>
                    <ArrowUpRightIcon className="size-4" />
                  </Link>
                )
              ))}
            </nav>
          </div>
          <div className="text-white/40">&copy; 2025 Ahmed Alrefaey. All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
};
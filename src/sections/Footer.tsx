import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

const footerLinks = [
  {
    title: "YouTube",
    link: "https://www.youtube.com/@AhmedRFRF-z3u",
  },
  {
    title: "Twitter",
    link: "https://x.com/AHMED76865307",
  },
  {
    title: "Instagram",
    link: "https://www.instagram.com/ahmed7_707_7/",
  },
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/ahmed-saad-833819366/",
  },
];

export const Footer = () => {
  return (
    <footer className="relative -z-10 overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col items-center gap-8">
          <div>
            <nav className="flex flex-col items-center gap-8 md:flex-row">
              {footerLinks.map((link => (
                <a key={link.title} href={link.link} className="inline-flex items-center gap-1.5">
                  <span className="font-semibold">{link.title}</span>
                  <ArrowUpRightIcon className="size-4" />
                </a>
              )))}
            </nav>
          </div>
          <div className="text-white/40">&copy; 2025 Ahmed Alrefaey. All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
};

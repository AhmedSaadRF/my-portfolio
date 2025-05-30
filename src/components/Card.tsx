import grainimg from "@/assets/images/grain.jpg";
import { ComponentPropsWithRef, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export const Card = ({ className, children, ...other } : ComponentPropsWithRef<"div">) => {
  return (
    <div>
      <div className={twMerge("bg-gray-800 rounded-3xl relative overflow-hidden z-0 after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none", className)} {...other}>
        <div className="absolute inset-0 -z-10 opacity-5" style={{ backgroundImage: `url(${grainimg.src})` }}></div>
        {children}
      </div>
    </div>
  );
}
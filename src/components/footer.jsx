import { FacebookIcon, InstagramIcon, LinkedinIcon } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  
  return (
    <div className="bg-[#10107B] px-[3rem] pt-[3rem] pb-4 w-full flex flex-col gap-8 items-center">

      <div className="flex flex-col gap-4 items-center">

        <div className="flex items-center gap-2">
          <p className="font-semibold text-[20pt] text-[#F8F8FA]">Event</p>

          <p className="text-[#7848F4] font-semibold text-[20pt]">Hive</p>
        </div>

        <form action="" method="post" className=" flex gap-x-[1rem]">

          <input type="email" placeholder="enter your e-mail" className="py-[0.5rem] px-2 rounded outline-none"/>

          <button type="submit" className="bg-[#7848F4] text-white rounded px-[2rem] py-[0.5rem]">Subscribe</button>

        </form>

        <div className="text-[#F8F8FA] flex gap-[1.3rem]">
          <Link>Home</Link>
          <Link>About</Link>
          <Link>Services</Link>
          <Link>Get in touch</Link>
          <Link>FAQs</Link>
        </div>

      </div>

      <hr className="h-[1px] w-full bg-white"/>

      <div className="flex items-center justify-between w-full text-white">

        <div className="flex gap-x-3 items-center">
          <Link className="bg-[#7848F4] rounded px-[1rem] py-[0.5rem]">English</Link>
          <Link>French</Link>
          <Link>Hindi</Link>
        </div>

        <div className="flex gap-x-4">
          <LinkedinIcon className="size-[30px]" />
          <InstagramIcon className="size-[30px]" />
          <FacebookIcon className="size-[30px]" />
        </div>

        <div>Non Copyrighted © 2023 Upload by rich technologies</div>

      </div>

    </div>
  );
};

export default Footer;
import { useState } from "react";


import DrpDwn, { MobDrpdwn } from "./DrpDwn";
import { signal } from "@preact/signals-react";
import { Menu } from "../assets/imgs";

export const mobhover = signal(false);

export const Button = () => {
  return (
    <>
      <div className="rounded-[4px] w-fit text-white p-2 bg-[#4D13D1]">
        <p className=" text-sm px-4 py-1 font-bold bg-[#4D13D1]">Sign Up</p>
      </div>
    </>
  );
};

const Navbar = () => {
  const [hover, setHover] = useState(false);


  const Options = ["Community", "Pricing", "Features",];

  const handleDropDown = (option) => {
    if (option === "Product") {
      setHover(true);
    } else {
      setHover(false);
    }
  };

  return (
    <>
      <nav className=" flex items-center justify-between">
        <div>
    <p className="font-bold text-lg">Fiber</p>
        </div>
        <div className="relative flex  max-[1020px]:hidden gap-8">
          {Options.map((ele) => (
            <>
              <p
                onMouseEnter={() => handleDropDown(ele)}
                className="  cursor-pointer font-semibold  font-md text-gray-800"
              >
                {ele}
              </p>
            </>
          ))}
          {hover ? <DrpDwn /> : null}
        </div>
        <div className="cursor-pointer  max-[1020px]:hidden flex gap-6 items-center">
          <p className="   font-semibold  font-md text-gray-800">Sign In</p>
          <Button />
        </div>
        <img
          onClick={() => (mobhover.value = !mobhover.value)}
          className="block lg:hidden"
          src={Menu}
          alt=""
        />
        {mobhover ? <MobDrpdwn /> : null}
      </nav>
    </>
  );
};

export default Navbar;

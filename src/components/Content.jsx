import { Checkmark, stars } from "../assets/imgs/as";
import { HERO1 } from "../assets/imgs/as";
const Content = () => {
  return (
    <>
      <div className=" flex  items-center md:my-[10px]">
        <div className="flex flex-col">
          <div className="flex gap-1">
            {[...Array(4)].map((id) => {
              return (
                <>
                  <img key={id} src={stars} alt="" />
                </>
              );
            })}
            <p className="text-black font-bold text-md">
              Rated 4.8/5 (243 reviews)
            </p>
          </div>
          <h1 className="text-[25px] md:text-[50px] leading-[44px] md:leading-[65px] text-[#171615] font-bold">
            Create your portfolio in minutes.
          </h1>
          <p className="para my-4">
            With Fiber, you can setup your own personal portfolio in minutes
            with dozens of premade, beautiful templates.
          </p>
          <div>
            <div className="cursor-pointer  max-[1020px]:hidden flex gap-6 items-center">
              <div className="rounded-[4px] w-fit text-white p-2 bg-[#4D13D1]">
                <p className=" text-sm px-4 py-1 font-bold bg-[#4D13D1]">
                  Start Free Trials
                </p>
              </div>
              <p className="   font-bold  font-md text-[#4D13D1] decoration-[#4D13D1] underline-offset-4  decoration-2 underline  ">
                View Examples
              </p>
            </div>
          </div>

          <div className="my-6  gap-3 flex">
            <p className="para flex gap-1 ">
              <img src={Checkmark} alt="" />
              No Credit Card Required
            </p>
            <p className="para flex gap-1 ">
              <img src={Checkmark} alt="" />
              10 Free Templates
            </p>
          </div>
        </div>

        <div className="max-[1020px]:hidden flex justify-center ">
          <img src={HERO1} alt="img" className="w-[690px]" />
        </div>
      </div>
    </>
  );
};

export default Content;

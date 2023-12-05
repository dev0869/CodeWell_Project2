import { time, code, allSizes, page } from "../assets/imgs/as";

const ContentChild = () => {
  return (
    <>
      <div className="bg-[#4D13D1] flex-col md:h-[445px] justify-between items-center  pr-[40px] pl-[40px] pt-[40px] flex md:flex-row rounded-md mt-6">
        <div className="flex-[4]">
          <p className=" text-[40px] font-bold text-white">
            Diversify your portfolio.
          </p>
          <p className="text-white text-md py-4">
            create an even more impressive portfolio by preating case studies
            for your projects. Simply ollow our step-by-step guide.
          </p>
          <button className="bg-white rounded p-[20px] font-bold text-[#4D13D1]">
            Start Free Trial
          </button>
        </div>
        <div className=" relative justify-end flex flex-[5]">
          <img
            className="  w-full h-[300px] md:w-[500px] md:h-[410px]"
            src={page}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

const Content2 = () => {
  const Submenu = [
    {
      icon: time,
      head: "Build in minutes",
      para: "With a selection of premade templates,you can build out a portfolio in less than 10 minutes.",
    },
    {
      icon: code,
      head: "Add custom CSS",
      para: "Customize your personal portfolio even   more with the ability to add your own custom CSS styles.",
    },
    {
      icon: allSizes,
      head: "Responsive",
      para: "All Fiber templates are fully responsive to ensure the experience is seernless across all devices.",
    },
  ];

  return (
    <div>
      <div>
        <p className="font-bold my-4 text-lg text-[#4D13D1]">Why Fiber?</p>
        <h1 className="text-2xl text-[#171615] font-bold">
          A good portfolio means good
          <br />
          employability.
        </h1>
      </div>

      <div className="flex gap-8 mt-6">
        {Submenu.map((ele, id) => {
          return (
            <div key={id}>
              <img src={ele.icon} alt="" />
              <h1 className="text-lg mt-4 mb-4 text-[#171615] font-bold">
                {ele.head}
              </h1>
              <p className="para">{ele.para}</p>
            </div>
          );
        })}
      </div>
      <ContentChild />
    </div>
  );
};

export default Content2;

import { Avatar, Avatar2, Avatar3 } from "../assets/imgs/as";
const Card = () => {
  const data = [
    {
      img: Avatar,
      name: "Sarah Andrews",
      price: "100k In revenue",
      button: "Sarah",
      info: "Setting up my portfolio with Fiber took no   more than 10 minutes. Since then, my portfolio has attracted a lot of clients and  made me more than $100k.",
    },
    {
      img: Avatar2,
      name: "Mathew Higgins",

      price: " S20k in revenue",
      button: "Mathew",
      info: "I have been getting A LOT of leads ever since I used Fiber's premade templates, now I just need to work on my case studies   and I'll be ready to go!",
    },
    {
      img: Avatar3,
      name: "Janice Dave",

      price: "$30k in revenue",
      button: "Janice",
      info: "ny jus a e eeancvn have already made more than I ever  in my full-time job. The templates ar  so amazing,",
    },
  ];

  return (
    <div className="flex flex-wrap md:flex-nowrap my-[60px] gap-4">
      {data.map((ele, id) => {
        return (
          <div key={id} className="border-2 border-gray-300  rounded-md p-4">
            <div className="flex gap-2 items-center">
              <img src={ele.img} alt="" />
              <div className="text-sm">
                <p className="text-[#4D13D1] font-bold">{ele.name}</p>
                <p>{ele.price}</p>
              </div>

            </div>
              <div className=" text-black">
              <p className="my-3">  {ele.info} </p>
              <div className="border text-center my-3 border-gray-300">
                <p className="text-[#4D13D1] rounded-md p-3 font-bold">View {ele.button}s Portfolio</p>
              </div>
              </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;

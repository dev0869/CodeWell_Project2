const Footer = () => {
  const Links = [
    {
      head: "Sitemap",
      child: ["Homepage", "Pricing", "Testimonials", "Features"],
    },
    {
      head: "Resources",
      child: ["Support", "Contact", "FAQ"],
    },
    {
      head: "Company",
      child: ["About", "Costumers", "Blog", "Features"],
    },
    {
      head: "Portfolio",
      child: ["Sarah", "Mathew", "Janice"],
    },
  ];

  return (
    <>
      <div className="bg-[#f3ede5]   flex justify-center px-[20px] md:px-[60px] py-[50px] ">
        <div className="container gap-4 flex">
          <div className="flex-[3]">
            <h1 className="font-bold text-lg">Fiber</h1>

            <p className="para ">
              With Fiber, you can setup your own personal portfolio in minutes
              with dozens of premade, beautiful templates.
            </p>

            <p className="para my-4">Made with In the Netherlands.</p>
          </div>
          <div className="flex-[8] justify-evenly flex-wrap flex">
            {Links.map((ele, id) => {
              return (
                <div key={id}>
                  <h1 className="font-bold text-lg">{ele.head}</h1>
                  {ele.child.map((ele, id) => {
                    return <p className="para my-1" key={id}>{ele}</p>;
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

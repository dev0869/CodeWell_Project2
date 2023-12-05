import Navbar from "./Navbar";
import Content from "./Content";

const Header = () => {
  return (
    <div className="bg-[#f3ede5] px-[20px] md:px-[90px] py-3">
      <div className=" flex justify-center">
        <div className="  container">
          <Navbar />
          <Content />
        </div>
      </div>
    </div>
  );
};

export default Header;

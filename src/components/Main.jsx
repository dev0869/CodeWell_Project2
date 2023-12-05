import Card from "./Card";
import Content2 from "./Content2";
import Footer from "./Footer";
import Header from "./Header";
const Main = () => {
  return (
    <>
      <Header />
      <div className=" flex justify-center px-[20px] md:px-[60px] py-3">
        <div className="container">
          <Content2 />
          <Card />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Main;

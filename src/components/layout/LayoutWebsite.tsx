import Header from "../Detail/Header";
import Footer from "../Home/Footer";
import Banner from "../Home/Banner";
import Main from "../Home/Main";
import "../../../css/app.css";
import "../../../css/tailwind.css";
const LayoutWebsite = () => {
  return (
    <>
      <Header />{" "}
      <div className="container">
        <Banner />
        <Main />
      </div>{" "}
      <Footer />
    </>
  );
};

export default LayoutWebsite;

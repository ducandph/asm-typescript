import Header from "../Header";
import Footer from "../Footer";
import Banner from "../Banner";
import Main from "../Main";
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

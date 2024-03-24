import Header from "../Detail/Header";
import MainDetail from "../Detail/MainDetail";
import Footer from "../Home/Footer";

import "../../../css/detail.css";
const LayoutDetail = () => {
  return (
    <div className="container_detail">
      <Header />
      <div className="main">
        <MainDetail />
      </div>
      <Footer />
    </div>
  );
};

export default LayoutDetail;

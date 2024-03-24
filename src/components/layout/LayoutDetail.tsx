import Header from "../Header";
import MainDetail from "../MainDetail";
import Footer from "../Footer";

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

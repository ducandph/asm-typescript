import Info from "./Info";

const Listing = () => {
  return (
    <section className="listings">
      <article className="listing">
        <h2 className="listing-name">Tiêu chí lọc nhanh phổ biến</h2>
        <div className="image-container">
          <img src="../../../img/detail1.jpg" alt="Xe buýt" />
          <img src="../../../img/detail2.png" alt="Xe buýt" />
          <img src="../../../img/detail3.jpg" alt="Xe buýt" />
          <img src="../../../img/detail4.png" alt="Xe buýt" />
        </div>
      </article>{" "}
      <Info />
      <Info />
      <Info />
    </section>
  );
};

export default Listing;

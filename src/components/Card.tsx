import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div className="route">
      <Link to="/detail">
        <img src="../img/from1.png" alt="" />
      </Link>

      <div className="from-to">
        <h4 className="from-name">Sài Gòn - Nha Trang</h4>
        <p className="price">
          Từ 200.000₫ <del>250.000₫</del>
        </p>
      </div>
    </div>
  );
};

export default Card;

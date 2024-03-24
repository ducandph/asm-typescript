import { Link } from "react-router-dom";
const Main = () => {
  return (
    <div>
      <div className="main ">
        <h2 className="main-name">Tuyến đường phổ biến</h2>
        <div className="slider">
          <div className="slides">
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
            <div className="route">
              <Link to="/detail">
                {" "}
                <img src="../img/from2.png" alt="" />
              </Link>

              <div className="from-to">
                <h4 className="from-name">Hà Nội - Hải Phòng</h4>
                <p className="price">
                  Từ 80.000₫ <del>100.000₫</del>
                </p>
              </div>
            </div>{" "}
            <div className="route">
              <Link to="/detail">
                {" "}
                <img src="../img/from3.png" alt="" />
              </Link>

              <div className="from-to">
                <h4 className="from-name">Sài Gòn - Đà Lạt</h4>
                <p className="price">Từ 200.000₫</p>
              </div>
            </div>{" "}
            <div className="route">
              <Link to="/detail">
                <img src="../img/from4.png" alt="" />
              </Link>

              <div className="from-to">
                <h4 className="from-name">Sài Gòn - Phan Thiết</h4>
                <p className="price">Từ 100.000₫</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="promotion">
        <h2>Ưu đãi nổi bật</h2>
        <div className="pr-container">
          <div className="pr">
            <div className="promotion-item">
              <div className="pr-content">
                <img src="../img/uudai1.png" />
                <div className="pr-text">
                  <p className="text-content">
                    Giảm đến 500K cho đơn hàng dịch vụ máy bay, tàu hoả khi
                    thanh toán bằng ví ZaloPay
                  </p>
                </div>
              </div>
            </div>
            <div className="promotion-item">
              <div className="pr-content">
                <img src="../img/uudai2.jpg" />
                <div className="pr-text">
                  <p className="text-content">
                    Giảm 20% cho khách hàng mới khi đặt dịch vụ xe Hải Phòng
                    Travel
                  </p>
                </div>
              </div>
            </div>
            <div className="promotion-item">
              <div className="pr-content">
                <img src="../img/uudai3.jpg" />
                <div className="pr-text">
                  <p className="text-content">
                    Giảm 10% khi đặt dịch vụ xe Hải Phòng Travel
                  </p>
                </div>
              </div>
            </div>
            <div className="promotion-item">
              <div className="pr-content">
                <img src="../img/uudai4.jpg" />
                <div className="pr-text">
                  <p className="text-content">
                    Nhận ưu đãi x2 khi đặt dịch vụ xe khách khứ hồi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="media">
        <h2>Vexere đã được nhắc đến trên</h2>
        <div className="media-content">
          <a href="https://vnexpress.net/vexere-ho-tro-5-000-ve-tet-2021-cho-sinh-vien-4211920.html">
            <img src="../img/vne.png" alt="" />
          </a>
          <a href="https://youtu.be/du_TpvYVNg0?feature=shared">
            {" "}
            <img src="../img/vtv.png" alt="" />
          </a>
          <a href="https://cesti.gov.vn/bai-viet/doi-moi-sang-tao/khoi-nghiep-voi-he-thong-ban-ve-xe-truc-tuyen-01003403-0000-0000-0000-000000000000">
            <img src="../img/logo-cesti.png" alt="" />
          </a>
          <a href="https://dantri.com.vn/kinh-doanh/cong-ty-co-phan-ve-xe-re-goi-von-thanh-cong-tu-cac-nha-dau-tu-uy-tin-20191225100127703.htm">
            {" "}
            <img src="../img/logo-dantri.png" alt="" />
          </a>
          <a href="https://youtu.be/qT30wzsFKGw?feature=shared">
            {" "}
            <img src="../img/logo-fbnc.png" alt="" />
          </a>
          <a href="https://tuoitre.vn/blog/quy-dau-tu-nhat-va-singapore-tiep-suc-vexerecom-767367.htm">
            {" "}
            <img src="../img/logo-tuoitre.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Main;

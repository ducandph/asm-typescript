import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LayoutWebsite from "./components/layout/LayoutWebsite";
import LayoutDetail from "./components/layout/LayoutDetail";

function App() {
  return (
    <>
      {/* <div className="container">
        <header className="flex bg-blue-500 h-auto p-5">
          <div className="flex mx-8">
            <img src="../img/logo1.svg" className="mr-4" />
            <p className="tracking-tighter py-2  text-white">
              Cam kết hoàn 150% nếu nhà xe không giữ vé
            </p>
          </div>
          <div
            className="flex justify-end py-2"
            style={{ marginLeft: "130px" }}
          >
            <ul className="flex mx-3 ">
              <li className="mr-10">
                <a className="text-white">Quản lý đơn hàng</a>
              </li>
              <li className="mr-6">
                <a className="text-white">Mở bán vé trên Vexere</a>
              </li>
              <li>
                <a className="text-white">Trở thành đối tác</a>
              </li>
            </ul>
          </div>

          <div className="p-2" style={{ marginLeft: "20px" }}>
            <button
              className="btn bg-white text-black border  rounded-lg p-1"
              style={{ marginRight: "3px" }}
            >
              Hotline 24/7
            </button>
            <button className="btn bg-white text-black border  rounded-lg p-1">
              Đăng nhập
            </button>
          </div>
        </header>
        <Header />

        <div className="h-300">
          <div
            className="bg-cover bg-center text-center relative"
            style={{
              backgroundImage: `url('./img/banner1.png')`,
              height: "480px",
            }}
          >
            <h4 className="text-white absolute inset-x-0 bottom-0 top-40 text-2xl">
              Vexere - Cam kết hoàn 150% nếu nhà xe không giữ chỗ
            </h4>
            <div className="book">
              <div className="booking">
                <div className="booking-bus">
                  <img src="../img/bus.svg" alt="" />
                  <span className="sp-bus">Xe khách</span>
                </div>
                <div className="booking-plane">
                  <img src="../img/plane.svg" alt="" />

                  <span>Máy bay</span>
                  <span className="jUhjWa">-20k</span>
                </div>
                <div className="booking-train">
                  <img src="../img/train.svg" alt="" />
                  <div>
                    {" "}
                    <span>Tàu hỏa</span>
                    <span className="jUhjWa1">Mới</span>
                  </div>
                </div>
                <div className="booking-car">
                  <img src="../img/car.svg" alt="" />
                  <div>
                    {" "}
                    <span>Thuê xe</span>
                    <span className=" jUhjWa2">Mới</span>
                  </div>
                </div>
              </div>
              <hr />
              <div className="fb">
                <div className="form-book">
                  <div className="form-delplace">
                    <img className="w-7" src="../img/f1.svg" alt="" />
                    <span>
                      <p>Nơi xuất phát</p>
                      <h4>Hà Nội</h4>
                    </span>
                  </div>
                  <div className="form-arrivalplace">
                    <img src="../img/f2.svg" alt="" />
                    <span>
                      <p>Nơi đến</p>
                      <h4>Bắc Yên - Sơn La</h4>
                    </span>
                  </div>
                  <div className="form-date">
                    <img src="../img/f3.svg" alt="" />
                    <span>
                      <p>Ngày đi</p>
                      <h4>T2, 18/03/2024</h4>
                    </span>
                  </div>
                  <p className="return-date flex">
                    <img
                      style={{ paddingRight: "5px" }}
                      src="../img/bx-plus-1.svg"
                      alt=""
                    />
                    Thêm ngày về
                  </p>
                </div>
                <button className="search">Tìm kiếm</button>
              </div>
            </div>

            <div className="card">
              <div className="cart1">
                <img src="../img/a1.svg" alt="" />
                <a href="#">Chắc chắn có chỗ</a>
              </div>
              <div className="cart1">
                <img src="../img/a2.svg" alt="" />
                <a href="#">Hỗ trợ 24/7</a>
              </div>
              <div className="cart1">
                <img src="../img/a3.svg" alt="" />

                <a href="#">Nhiều ưu đãi</a>
              </div>
              <div className="cart1">
                <img src="../img/a4.svg" alt="" />
                <a href="#">Chắc chắn có chỗ</a>
              </div>
            </div>
          </div>
        </div>

        <div className="main ">
          <h2>Tuyến đường phổ biến</h2>
          <div className="slider">
            <div className="slides">
              <div className="route">
                <img src="../img/from1.png" alt="" />

                <div className="from-to">
                  <h4 className="from">Sài Gòn - Nha Trang</h4>
                  <p className="price">
                    Từ 200.000₫ <del>250.000₫</del>
                  </p>
                </div>
              </div>
              <div className="route">
                <img src="../img/from2.png" alt="" />

                <div className="from-to">
                  <h4 className="from">Hà Nội - Hải Phòng</h4>
                  <p className="price">
                    Từ 80.000₫ <del>100.000₫</del>
                  </p>
                </div>
              </div>{" "}
              <div className="route">
                <img src="../img/from3.png" alt="" />

                <div className="from-to">
                  <h4 className="from">Sài Gòn - Đà Lạt</h4>
                  <p className="price">Từ 200.000₫</p>
                </div>
              </div>{" "}
              <div className="route">
                <img src="../img/from4.png" alt="" />

                <div className="from-to">
                  <h4 className="from">Sài Gòn - Phan Thiết</h4>
                  <p className="price">Từ 100.000₫</p>
                </div>
              </div>
            </div>
           
            <div className="controls">
              <button className="prev">
                <img src="../img/left-arrow-slick.svg" alt="" />
              </button>
              <button className="next">
                <img src="../img/right-arrow-slick.svg" alt="" />
              </button>
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

        <footer>
          <div className="ft-content">
            <div className="ft-content-link">
              <h2 className="ft-title">Tuyến đường</h2>
              <a href="https://vexere.com/vi-VN/ve-xe-khach-tu-sai-gon-di-buon-ma-thuot-dak-lak-129t21431.html">
                Xe đi Buôn Mê Thuột từ Sài Gòn
              </a>
              <a href="https://vexere.com/vi-VN/ve-xe-khach-tu-sai-gon-di-vung-tau-ba-ria-vung-tau-129t2131.html">
                Xe đi Vũng Tàu từ Sài Gòn
              </a>
              <a href="https://vexere.com/vi-VN/ve-xe-khach-tu-sai-gon-di-nha-trang-khanh-hoa-129t23591.html">
                Xe đi Nha Trang từ Sài Gòn
              </a>
              <a href="https://vexere.com/vi-VN/ve-xe-khach-tu-sai-gon-di-da-lat-lam-dong-129t23991.html">
                Xe đi Đà Lạt từ Sài Gòn
              </a>
              <a href="https://vexere.com/vi-VN/ve-xe-khach-tu-ha-noi-di-sa-pa-lao-cai-124t24241.html">
                Xe đi Sapa từ Hà Nội
              </a>
              <a href="https://vexere.com/vi-VN/ve-xe-khach-tu-ha-noi-di-hai-phong-124t1271.html">
                Xe đi Hải Phòng từ Hà Nội
              </a>
              <a href="https://vexere.com/vi-VN/ve-xe-khach-tu-ha-noi-di-vinh-nghe-an-124t24701.html">
                Xe đi Vinh từ Hà Nội
              </a>
            </div>

            <div className="ft-content-link">
              <h2 className="ft-title">Xe Limousine</h2>
              <a href="https://vexere.com/vi-VN/ve-xe-limousine-tu-sai-gon-di-da-lat-lam-dong-129t23991.html">
                Xe Limousine đi Đà Lạt từ Sài Gòn
              </a>
              <a href="https://vexere.com/vi-VN/ve-xe-limousine-tu-sai-gon-di-vung-tau-ba-ria-vung-tau-129t2131.html">
                Xe Limousine đi Vũng Tàu từ Sài Gòn
              </a>
              <a href="https://vexere.com/vi-VN/ve-xe-limousine-tu-sai-gon-di-nha-trang-khanh-hoa-129t23591.html">
                Xe Limousine đi Nha Trang từ Sài Gòn
              </a>
              <a href="https://vexere.com/vi-VN/ve-xe-limousine-tu-ha-noi-di-hai-phong-124t1271.html">
                Xe Limousine đi Hải Phòng từ Hà Nội
              </a>
              <a href="https://vexere.com/vi-VN/ve-xe-limousine-tu-ha-noi-di-ha-long-quang-ninh-124t25541.html">
                Xe Limousine đi Hạ Long từ Hà Nội
              </a>
              <a href="https://vexere.com/vi-VN/ve-xe-limousine-tu-ha-noi-di-sa-pa-lao-cai-124t24241.html">
                Xe Limousine đi Sapa Từ Hà Nội
              </a>
              <a href="https://vexere.com/vi-VN/ve-xe-limousine-tu-ha-noi-di-quang-ninh-124t1491.html">
                Xe Limousine đi Quảng Ninh từ Hà Nội
              </a>
            </div>

            <div className="ft-content-link">
              <h2 className="ft-title">Tin tức</h2>

              <a href="https://blog.vexere.com/xe-giuong-nam-limousine/">
                Xe giường nằm Limousine – đỉnh cao mới của ngành xe khách
              </a>
              <a href="https://blog.vexere.com/xe-limousine-di-vung-tau-tong-hop/">
                Xe limousine đi Vũng Tàu: Tổng hợp top 6 xe chất lượng cao
              </a>
              <a href="https://blog.vexere.com/review-xe-limousine-di-da-lat/">
                Review xe limousine đi Đà Lạt: những câu hỏi thường gặp
              </a>
              <a href="https://blog.vexere.com/xe-limousine-di-sapa-tong-hop/">
                Xe limousine đi Sapa: Tổng hợp top các hãng xe chất lượng cao
              </a>
            </div>
          </div>

          <div className="ft-content-two">
            <div className="ft-content-link">
              <h2 className="ft-title">Bến xe</h2>
              <div></div>
              <a href="https://vexere.com/vi-VN/ben-xe-mien-dong">
                Bến xe Miền Đông
              </a>
              <a href="https://vexere.com/vi-VN/ben-xe-trung-tam-da-nang">
                Bến xe Trung tâm Đà Nẵng
              </a>
              <a href="https://vexere.com/vi-VN/ben-xe-gia-lam">
                Bến xe Gia Lâm
              </a>
              <a href="https://vexere.com/vi-VN/ben-xe-my-dinh">
                Bến xe Mỹ Đình
              </a>
              <a href="https://vexere.com/vi-VN/ben-xe-an-suong">
                Bến xe An Sương
              </a>
              <a href="https://vexere.com/vi-VN/ben-xe-nuoc-ngam">
                Bến xe Nước Ngầm
              </a>
              <a href="https://vexere.com/vi-VN/ben-xe-mien-tay">
                Bến xe Miền Tây
              </a>
            </div>

            <div className="ft-content-link-two">
              <h2 className="ft-title">Nhà xe</h2>
              <div className="ft-gara">
                <a href="https://vexere.com/vi-VN/xe-lien-hung" target="_blank">
                  Xe Liên Hưng
                </a>
                <a
                  href="https://vexere.com/vi-VN/xe-long-van-limousine"
                  target="_blank"
                >
                  Xe Long Vân Limousine
                </a>
                <a
                  href="https://vexere.com/vi-VN/xe-thuan-tien"
                  target="_blank"
                >
                  Xe Thuận Tiến
                </a>
                <a
                  href="https://vexere.com/vi-VN/xe-dien-linh-limousine"
                  target="_blank"
                >
                  Xe Điền Linh
                </a>
                <a
                  href="https://vexere.com/vi-VN/xe-dong-phuoc"
                  target="_blank"
                >
                  Xe Đồng Phước
                </a>
                <a
                  href="https://vexere.com/vi-VN/xe-long-van-limousine"
                  target="_blank"
                >
                  Xe Long Vân Limousine
                </a>
                <a
                  href="https://vexere.com/vi-VN/xe-khanh-phong"
                  target="_blank"
                >
                  Xe Khanh Phong
                </a>
                <a href="https://vexere.com/vi-VN/xe-hao" target="_blank">
                  Xe Hảo
                </a>
                <a
                  href="https://vexere.com/vi-VN/xe-vie-limousine"
                  target="_blank"
                >
                  Xe Vie Limousine
                </a>
                <a href="https://vexere.com/vi-VN/xe-hao" target="_blank">
                  Xe Hảo
                </a>
                <a href="https://vexere.com/vi-VN/xe-tuan-hung" target="_blank">
                  Xe Tuấn Hưng
                </a>
                <a href="https://vexere.com/vi-VN/xe-hoa-mai" target="_blank">
                  Xe Hoa Mai
                </a>
                <a href="https://vexere.com/vi-VN/xe-hanh-cafe" target="_blank">
                  Xe Hạnh Cafe
                </a>
                <a href="https://vexere.com/vi-VN/xe-cuc-tung" target="_blank">
                  Xe Cúc Tùng
                </a>
                <a
                  href="https://vexere.com/vi-VN/xe-tra-lan-vien"
                  target="_blank"
                >
                  Xe Trà Lan Viên
                </a>

                <a href="https://vexere.com/vi-VN/xe-an-phu" target="_blank">
                  Xe An Phú Buslines
                </a>
                <a href="https://vexere.com/vi-VN/xe-minh-quoc" target="_blank">
                  Xe Minh Quốc
                </a>

                <a href="https://vexere.com/vi-VN/xe-phong-phu" target="_blank">
                  Xe Phong Phú
                </a>
                <a href="https://vexere.com/vi-VN/xe-tien-oanh" target="_blank">
                  Xe Tiến Oanh
                </a>
                <a
                  href="https://vexere.com/vi-VN/xe-nam-quynh-anh"
                  target="_blank"
                >
                  Xe Nam Quỳnh Anh
                </a>
                <a
                  href="https://vexere.com/vi-VN/xe-an-phu-quy"
                  target="_blank"
                >
                  Xe An Phú Quý
                </a>
                <a href="https://vexere.com/vi-VN/xe-bang-phan" target="_blank">
                  Xe Bằng Phấn
                </a>
                <a
                  href="https://vexere.com/vi-VN/xe-quang-nghi"
                  target="_blank"
                >
                  Xe Quang Nghị
                </a>
                <a
                  href="https://vexere.com/vi-VN/xe-g8-sapa-open-tour"
                  target="_blank"
                >
                  Xe G8 Open Tour
                </a>
                <a
                  href="https://vexere.com/vi-VN/xe-xuan-trang-limousine"
                  target="_blank"
                >
                  Xe Xuân Tráng Limousine
                </a>
                <a href="https://vexere.com/vi-VN/xe-ha-lan" target="_blank">
                  Xe Hà Lan
                </a>
                <a
                  href="https://vexere.com/vi-VN/xe-nam-cuong-limousine"
                  target="_blank"
                >
                  Xe Nam Cường Limousine
                </a>
                <a href="https://vexere.com/vi-VN/xe-hai-au" target="_blank">
                  Xe Hải Âu
                </a>
                <a href="https://vexere.com/vi-VN/xe-sao-viet" target="_blank">
                  Xe Sao Việt
                </a>
                <a
                  href="https://vexere.com/vi-VN/xe-36-limousine"
                  target="_blank"
                >
                  Xe 36 Limousine
                </a>
                <a
                  href="https://vexere.com/vi-VN/xe-phuc-xuyen"
                  target="_blank"
                >
                  Xe Phúc Xuyên
                </a>
                <a
                  href="https://vexere.com/vi-VN/xe-trang-an-limousine"
                  target="_blank"
                >
                  Xe Tràng An Limousine
                </a>

                <a
                  href="https://vexere.com/vi-VN/xe-sao-nghe-limousine"
                  target="_blank"
                >
                  Xe Sao Nghệ Limousine
                </a>
              </div>
            </div>
          </div>

          <div className="ft-content-three">
            <div className="ft-support">
              <h2 className="ft-title">Hỗ trợ</h2>
              <a href="/vi-VN/huong-dan-thanh-toan-tren-website.html">
                Hướng dẫn thanh toán
              </a>
              <a href="/vi-VN/quy-che">Quy chế Vexere.com</a>
              <a href="/vi-VN/chinh-sach-bao-mat">
                Chính sách bảo mật thông tin
              </a>
              <a href="/vi-VN/chinh-sach-bao-mat-thanh-toan">
                Chính sách bảo mật thanh toán
              </a>
              <a href="/vi-VN/chinh-sach-va-quy-trinh-giai-quyet-tranh-chap-khieu-nai">
                <span>
                  Chính sách và quy trình giải quyết tranh chấp, khiếu nại
                </span>
              </a>
              <a href="/vi-VN/nhung-cau-hoi-thuong-gap.html">
                Câu hỏi thường gặp
              </a>
              <a href="https://vexere.com/vi-VN/tra-cuu-don-hang">
                Tra cứu đơn hàng
              </a>
            </div>

            <div className="ft-content-link-three">
              <h2 className="ft-title">Về chúng tôi</h2>
              <a rel="nofollow" href="https://daily.vexere.com/">
                Phần mềm đại lý
              </a>
              <a rel="nofollow" href="/vi-VN/gioi-thieu.html">
                Giới Thiệu Vexere.com
              </a>
              <a href="https://careers.vexere.com">Tuyển dụng</a>
              <a href="https://blog.vexere.com">Tin tức</a>
              <a rel="nofollow" href="/vi-VN/lien-he.html">
                Liên hệ
              </a>
              <h2 style={{ marginTop: "20px" }} className="ft-title">
                Chứng nhận
              </h2>
              <img src="../img/certificates_desktop.png" alt="" />
            </div>

            <div className="ft-support">
              <h2 className="ft-title">Hỗ trợ</h2>
              <img style={{}} src="../img/payment_partner_desktop.png" alt="" />
            </div>

            <div className="ft-content-link-three">
              <h2 className="ft-title">Tải ứng dụng Vexere</h2>
              <img
                style={{ width: "146px", height: "146px" }}
                src="../img/qr_code.png"
                alt=""
              />
              <div>
                <a href="https://apps.apple.com/vn/app/vexere-v%C3%A9-xe-m%C3%A1y-bay-thu%C3%AA-xe/id1183279479">
                  <img
                    style={{
                      width: "165px",
                      height: "50px",
                      margin: "20px 0 20px 0",
                    }}
                    src="../img/download-app-store.png"
                    alt=""
                  />
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.vexere.vexere">
                  <img
                    style={{ width: "165px", height: "50px" }}
                    src="../img/download-gg-play.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </footer>

        <div className="home-vexere">
          <h2>Công ty TNHH Thương Mại Dịch Vụ Vexere</h2>
          <div className="home-vexere-text">
            <p>
              Địa chỉ đăng ký kinh doanh: 8C Chữ Đồng Tử, Phường 7, Quận Tân
              Bình, Thành Phố Hồ Chí Minh, Việt Nam
            </p>
            <p>
              Địa chỉ: Lầu 2, tòa nhà H3 Circo Hoàng Diệu, 384 Hoàng Diệu,
              Phường 6, Quận 4, Tp. Hồ Chí Minh, Việt Nam
            </p>
            <p>
              Tầng 3, toà nhà 101 Láng Hạ, Đường 101 Láng Hạ, Phường Láng Hạ,
              Quận Đống Đa, Hà Nội, Việt Nam
            </p>
            <p>
              Giấy chứng nhận ĐKKD số 0315133726 do Sở KH và ĐT TP. Hồ Chí Minh
              cấp lần đầu ngày 27/6/2018
            </p>
            <p>Bản quyền &copy; 2020 thuộc về Vexere.Com</p>
          </div>
        </div>
        <Footer />
      </div> */}

      <Router>
        <Routes>
          <Route path="/" element={<LayoutWebsite />} />
          <Route path="detail" element={<LayoutDetail />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

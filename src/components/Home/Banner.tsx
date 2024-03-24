const Banner = () => {
  return (
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
  );
};

export default Banner;

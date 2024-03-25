

export const Booking = () => {
  return (
    <div className="book1">
      <div className="book1ing">
        <div className="book1ing-bus">
          <img src="../img/bus.svg" alt="" />
          <span className="sp-bus">300k</span>
        </div>
        <div className="book1ing-plane">
          <img src="../img/plane.svg" alt="" />

          <span>Máy bay</span>
          <p className="sale-plane">-20k</p>
        </div>
        <div className="book1ing-train">
          <img src="../img/train.svg" alt="" />

          <span>309k</span>
          <p className="sale-plane">-20k</p>
        </div>
      </div>
      <hr />
      <div className="fb">
        <div className="form-book1">
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
  );
};

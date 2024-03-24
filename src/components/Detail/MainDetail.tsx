const MainDetail = () => {
  return (
    <>
      <div className="container_detail">
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
        <div className="filter">
          <div className="filter-bar">
            <div className="filter-option">
              <label htmlFor="sort-by">Sắp xếp theo:</label>
              <div className="radio-group ">
                <label className="ant-radio-wrapper">
                  <span className="radio-checked">
                    <input
                      type="radio"
                      name="radio-group-name"
                      className="ant-radio-input"
                      defaultChecked
                    />
                    <span className="ant-radio-inner" />
                  </span>
                  <span>
                    <p className="color--darkness option-label">Mặc định</p>
                  </span>
                </label>
                <label className="ant-radio-wrapper">
                  <span className="radio-checked">
                    <input
                      type="radio"
                      name="radio-group-name"
                      className="ant-radio-input"
                    />
                    <span className="ant-radio-inner" />
                  </span>
                  <span>
                    <p className="color--darkness option-label">
                      Giờ đi sớm nhất
                    </p>
                  </span>
                </label>
                <label className="ant-radio-wrapper">
                  <span className="radio-checked">
                    <input
                      type="radio"
                      name="radio-group-name"
                      className="ant-radio-input"
                    />
                    <span className="ant-radio-inner" />
                  </span>
                  <span>
                    <p className="color--darkness option-label">
                      Giờ đi muộn nhất
                    </p>
                  </span>
                </label>
                <label className="ant-radio-wrapper">
                  <span className="radio-checked">
                    <input
                      type="radio"
                      name="radio-group-name"
                      className="ant-radio-input"
                    />
                    <span className="ant-radio-inner" />
                  </span>
                  <span>
                    <p className="color--darkness option-label">
                      Đánh giá cao nhất
                    </p>
                  </span>
                </label>
                <label className="ant-radio-wrapper">
                  <span className="radio-checked">
                    <input
                      type="radio"
                      name="radio-group-name"
                      className="ant-radio-input"
                    />
                    <span className="ant-radio-inner" />
                  </span>
                  <span>
                    <p className="color--darkness option-label">Giá tăng dần</p>
                  </span>
                </label>
                <label className="ant-radio-wrapper">
                  <span className="radio-checked">
                    <input
                      type="radio"
                      name="radio-group-name"
                      className="ant-radio-input"
                    />
                    <span className="ant-radio-inner" />
                  </span>
                  <span>
                    <p className="color--darkness option-label">Giá giảm dần</p>
                  </span>
                </label>
              </div>
            </div>

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
              <div className="details">
                <p className="message">Xác nhận </p>

                <img src="../../../img/detail5.jpeg" alt="" />
                <div className="info">
                  <div className="info-title">
                    <h2 className="name">Hải Phòng Travel (Đất Cảng)</h2>
                    <div className="info-raiting">
                      <svg
                        viewBox="64 64 896 896"
                        focusable="false"
                        data-icon="star"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
                      </svg>
                      <span>4.5 (382)</span>
                    </div>
                    <p className="info-price">Từ 230.000 đ</p>
                  </div>
                  <div className="seat-type">
                    <p>Limousine phòng 22 chỗ (Có Toilet)</p>
                    <div className="info-image">
                      <img src="../../../img/badge-sponsor.svg" alt="" />
                      <span>Tài trợ</span>
                    </div>

                    <div className="sale">
                      <p className="sale-price">Giảm 3%</p>
                    </div>
                  </div>

                  <div className="fromto">
                    <svg
                      className="TicketPC__LocationRouteSVG-sc-1mxgwjh-4 eKNjJr"
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="74"
                      viewBox="0 0 14 74"
                    >
                      <path
                        fill="none"
                        stroke="#787878"
                        stroke-linecap="round"
                        stroke-width="2"
                        stroke-dasharray="0 7"
                        d="M7 13.5v46"
                      ></path>
                      <g fill="none" stroke="#484848" stroke-width="3">
                        <circle cx="7" cy="7" r="7" stroke="none"></circle>
                        <circle cx="7" cy="7" r="5.5"></circle>
                      </g>
                      <path
                        d="M7 58a5.953 5.953 0 0 0-6 5.891 5.657 5.657 0 0 0 .525 2.4 37.124 37.124 0 0 0 5.222 7.591.338.338 0 0 0 .506 0 37.142 37.142 0 0 0 5.222-7.582A5.655 5.655 0 0 0 13 63.9 5.953 5.953 0 0 0 7 58zm0 8.95a3.092 3.092 0 0 1-3.117-3.06 3.117 3.117 0 0 1 6.234 0A3.092 3.092 0 0 1 7 66.95z"
                        fill="#787878"
                      ></path>
                    </svg>
                    <div className="from-to-content">
                      <div className="content-from">
                        <div className="hour">23:00</div>
                        <div className="place">• Vp. Quận 1</div>
                      </div>
                      <div className="duration">7h</div>
                      <div className="content-to">
                        <div className="hour">06:00</div>
                        <div className="place">• Vp. Nha Trang</div>
                      </div>
                    </div>
                    <div>
                      <div className="seat-available ">Còn 6 chỗ trống</div>
                      <div className="route-detail">Chọn chuyến</div>
                      <p className="no-prepayment">
                        Không cần thanh toán trước
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="details">
                <p className="message">Xác nhận </p>

                <img src="../../../img/detail6.jpeg" alt="" />
                <div className="info">
                  <div className="info-title">
                    <h2 className="name">Huỳnh Gia</h2>
                    <div className="info-raiting">
                      <svg
                        viewBox="64 64 896 896"
                        focusable="false"
                        data-icon="star"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
                      </svg>
                      <span>4.5 (382)</span>
                    </div>
                    <p className="info-price">Từ 230.000 đ</p>
                  </div>
                  <div className="seat-type">
                    <p>Limousine phòng 22 chỗ (Có Toilet)</p>
                    <div className="info-image">
                      <img src="../../../img/badge-sponsor.svg" alt="" />
                      <span>Tài trợ</span>
                    </div>

                    <div className="sale">
                      <p className="sale-price">Giảm 3%</p>
                    </div>
                  </div>

                  <div className="fromto">
                    <svg
                      className="TicketPC__LocationRouteSVG-sc-1mxgwjh-4 eKNjJr"
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="74"
                      viewBox="0 0 14 74"
                    >
                      <path
                        fill="none"
                        stroke="#787878"
                        stroke-linecap="round"
                        stroke-width="2"
                        stroke-dasharray="0 7"
                        d="M7 13.5v46"
                      ></path>
                      <g fill="none" stroke="#484848" stroke-width="3">
                        <circle cx="7" cy="7" r="7" stroke="none"></circle>
                        <circle cx="7" cy="7" r="5.5"></circle>
                      </g>
                      <path
                        d="M7 58a5.953 5.953 0 0 0-6 5.891 5.657 5.657 0 0 0 .525 2.4 37.124 37.124 0 0 0 5.222 7.591.338.338 0 0 0 .506 0 37.142 37.142 0 0 0 5.222-7.582A5.655 5.655 0 0 0 13 63.9 5.953 5.953 0 0 0 7 58zm0 8.95a3.092 3.092 0 0 1-3.117-3.06 3.117 3.117 0 0 1 6.234 0A3.092 3.092 0 0 1 7 66.95z"
                        fill="#787878"
                      ></path>
                    </svg>
                    <div className="from-to-content">
                      <div className="content-from">
                        <div className="hour">23:00</div>
                        <div className="place">• Vp. Quận 1</div>
                      </div>
                      <div className="duration">7h</div>
                      <div className="content-to">
                        <div className="hour">06:00</div>
                        <div className="place">• Vp. Nha Trang</div>
                      </div>
                    </div>
                    <div>
                      <div className="seat-available ">Còn 6 chỗ trống</div>
                      <div className="route-detail">Chọn chuyến</div>
                      <p className="no-prepayment">
                        Không cần thanh toán trước
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="details">
                <p className="message">Xác nhận </p>

                <img src="../../../img/detail7.jpeg" alt="" />
                <div className="info">
                  <div className="info-title">
                    <h2 className="name">Hải Phòng Travel (Đất Cảng)</h2>
                    <div className="info-raiting">
                      <svg
                        viewBox="64 64 896 896"
                        focusable="false"
                        data-icon="star"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
                      </svg>
                      <span>4.5 (382)</span>
                    </div>
                    <p className="info-price">Từ 230.000 đ</p>
                  </div>
                  <div className="seat-type">
                    <p>Limousine phòng 22 chỗ (Có Toilet)</p>
                    <div className="info-image">
                      <img src="../../../img/badge-sponsor.svg" alt="" />
                      <span>Tài trợ</span>
                    </div>

                    <div className="sale">
                      <p className="sale-price">Giảm 3%</p>
                    </div>
                  </div>

                  <div className="fromto">
                    <svg
                      className="TicketPC__LocationRouteSVG-sc-1mxgwjh-4 eKNjJr"
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="74"
                      viewBox="0 0 14 74"
                    >
                      <path
                        fill="none"
                        stroke="#787878"
                        stroke-linecap="round"
                        stroke-width="2"
                        stroke-dasharray="0 7"
                        d="M7 13.5v46"
                      ></path>
                      <g fill="none" stroke="#484848" stroke-width="3">
                        <circle cx="7" cy="7" r="7" stroke="none"></circle>
                        <circle cx="7" cy="7" r="5.5"></circle>
                      </g>
                      <path
                        d="M7 58a5.953 5.953 0 0 0-6 5.891 5.657 5.657 0 0 0 .525 2.4 37.124 37.124 0 0 0 5.222 7.591.338.338 0 0 0 .506 0 37.142 37.142 0 0 0 5.222-7.582A5.655 5.655 0 0 0 13 63.9 5.953 5.953 0 0 0 7 58zm0 8.95a3.092 3.092 0 0 1-3.117-3.06 3.117 3.117 0 0 1 6.234 0A3.092 3.092 0 0 1 7 66.95z"
                        fill="#787878"
                      ></path>
                    </svg>
                    <div className="from-to-content">
                      <div className="content-from">
                        <div className="hour">23:00</div>
                        <div className="place">• Vp. Quận 1</div>
                      </div>
                      <div className="duration">7h</div>
                      <div className="content-to">
                        <div className="hour">06:00</div>
                        <div className="place">• Vp. Nha Trang</div>
                      </div>
                    </div>
                    <div>
                      <div className="seat-available ">Còn 6 chỗ trống</div>
                      <div className="route-detail">Chọn chuyến</div>
                      <p className="no-prepayment">
                        Không cần thanh toán trước
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainDetail;

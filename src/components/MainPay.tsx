const MainPay = () => {
  return (
    <div className="container m-auto py-8 ">
      <p className="text-center text-2xl m-5 font-semibold">THANH TOÁN</p>
      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 "
        style={{ padding: "0 160px" }}
      >
        <div className="col-span-2 bg-white p-6 rounded-lg drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
          <h2 className="text-xl font-bold mb-4">Thông tin liên hệ</h2>
          <form>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-semibold mb-2"
              >
                Họ và tên:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-semibold mb-2"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-gray-700 font-semibold mb-2"
              >
                Số điện thoại:
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div className="mt-6 border-2 border-emerald-500 rounded-lg h-9 bg-green-200">
              <div className="flex justify-center items-center  m-1">
                <img
                  style={{
                    width: "20px",
                    height: "20px",
                    marginLeft: "10px",
                  }}
                  src="../../../img/checked.png"
                  alt=""
                />
                <p className="text-center px-2">
                  Số điện thoại và email được sử dụng để gửi thông tin đơn hàng
                  và liên hệ khi cần thiết.
                </p>
              </div>
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-green-600 text-white font-bold mt-5 py-2 px-4 rounded-lg"
            >
              Xác nhận
            </button>
          </form>
        </div>

        <div className="col-span-1 bg-white p-6 rounded-lg drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
          <h2 className="text-xl font-bold mb-4">Thông tin đặt vé</h2>
          <div className="mb-4">
            <p className="text-gray-700 font-semibold mb-2">Giá tiền:</p>
            <p className="text-lg text-gray-900">250.000 đ</p>
          </div>
          <div className="mb-4">
            <p className="text-gray-700 font-semibold mb-2">
              Thông tin chuyến đi:
            </p>
            <div className="" style={{ display: "flex" }}>
              <img
                className="w-32 py-5 "
                src="../../../img/detail5.jpeg"
                alt=""
              />
              <div className="m-5">
                <p className="text-lg font-semibold ">Bình Minh Bus</p>
                <p className="text-xs">Limousine phòng 22 chỗ (Có Toilet)</p>
              </div>
            </div>

            <div>
              <div className="flex py-2">
                <div>
                  <p className="font-semibold">22:35</p>
                  <p className="text-xs mt-1">(25/03)</p>
                </div>
                <img
                  className="px-2"
                  src="../../../img/f1.svg"
                  style={{ position: "absolute", marginLeft: "40px" }}
                />
                <span className="px-3" style={{ marginLeft: "20px" }}>
                  Vp Nguyễn Cư Trinh, Q1
                </span>
              </div>

              <div className="flex border-b border-gray-400 pb-2">
                <div>
                  <p className="font-semibold">06:35</p>
                  <p className="text-xs mt-1">(26/03)</p>
                </div>
                <img
                  className="px-2"
                  style={{ position: "absolute", marginLeft: "40px" }}
                  src="../../../img/f2.svg"
                />
                <span className="px-3" style={{ marginLeft: "20px" }}>
                  Vp Nha Trang
                </span>
              </div>
            </div>
          </div>
          <button className="bg-green-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg">
            Thanh toán
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainPay;

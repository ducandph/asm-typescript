

const BookTicket = () => {
  return (
    <div className="col-span-1 bg-white p-6 rounded-lg drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
      <h2 className="text-xl font-bold mb-4">Thông tin đặt vé</h2>
      <div className="mb-4">
        <p className="text-gray-700 font-semibold mb-2">Giá tiền:</p>
        <p className="text-lg text-gray-900">250.000 đ</p>
      </div>
      <div className="mb-4">
        <p className="text-gray-700 font-semibold mb-2">Thông tin chuyến đi:</p>
        <div className="" style={{ display: "flex" }}>
          <img className="w-32 py-5 " src="../../../img/detail5.jpeg" alt="" />
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
  );
};

export default BookTicket;

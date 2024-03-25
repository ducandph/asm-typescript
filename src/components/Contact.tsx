

const Contact = () => {
  return (
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
  )
}

export default Contact
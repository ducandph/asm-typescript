import BookHome from "./BookHome";

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

        <BookHome />
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

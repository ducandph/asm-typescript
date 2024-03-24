const Navigation = () => {
  return (
    <div className="flex justify-end py-2" style={{ marginLeft: "140px" }}>
      <ul className="flex mx-3 ">
        <li className="">
          <a className="text-white p-3">Quản lý đơn hàng</a>
        </li>
        <li className="">
          <a className="text-white p-3">Mở bán vé trên Vexere</a>
        </li>
        <li className="">
          <a className="text-white p-3">Trở thành đối tác</a>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;

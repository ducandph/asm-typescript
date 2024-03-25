import Button from "./Button";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className="flex bg-blue-500 h-auto p-3 ">
      <div className="flex mx-8">
        <img src="../img/logo1.svg" className="mr-4" />
        <p className="tracking-tighter py-2  text-white">
          Cam kết hoàn 150% nếu nhà xe không giữ vé
        </p>
      </div>
      <Navigation />
      <Button title="Hotline 24/7" />
      <Button title="Đăng nhập" />
    </header>
  );
};

export default Header;

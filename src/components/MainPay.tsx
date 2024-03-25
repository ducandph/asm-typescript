import BookTicket from "./BookTicket";
import Contact from "./Contact";

const MainPay = () => {
  return (
    <div className="container m-auto py-8 ">
      <p className="text-center text-2xl m-5 font-semibold">THANH TOÁN</p>
      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 "
        style={{ padding: "0 160px" }}
      >
        <Contact />
        <BookTicket />
      </div>
    </div>
  );
};

export default MainPay;

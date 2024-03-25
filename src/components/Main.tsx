import Card from "./Card";
import Media from "./Media";
import Promotion from "./Promotion";
const Main = () => {
  return (
    <div>
      <div className="main ">
        <h2 className="main-name">Tuyến đường phổ biến</h2>
        <div className="slider">
          <div className="slides">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>

      <div className="promotion">
        <h2>Ưu đãi nổi bật</h2>
        <div className="pr-container">
          <div className="pr">
            <Promotion />
            <Promotion />
            <Promotion />
            <Promotion />
          </div>
        </div>
      </div>

      <Media />
    </div>
  );
};

export default Main;

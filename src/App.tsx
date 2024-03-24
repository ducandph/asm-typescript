import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LayoutWebsite from "./components/layout/LayoutWebsite";
import LayoutDetail from "./components/layout/LayoutDetail";
import LayoutPay from "./components/layout/LayoutPay";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LayoutWebsite />} />
          <Route path="detail" element={<LayoutDetail />} />
          <Route path="pay" element={<LayoutPay />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

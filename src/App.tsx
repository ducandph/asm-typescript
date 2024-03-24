import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LayoutWebsite from "./components/layout/LayoutWebsite";
import LayoutDetail from "./components/layout/LayoutDetail";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LayoutWebsite />} />
          <Route path="detail" element={<LayoutDetail />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

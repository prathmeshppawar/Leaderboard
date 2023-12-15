import { Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Hundred from "./pages/Hundred";
import TwoH from "./pages/TwoH";
import Relay from "./pages/Relay";
import Shotput from "./pages/Shotput";
import Discuss from "./pages/Discuss";
import Longjump from "./pages/Longjump";
import FourH from "./pages/FourH";
import FDiscuss from "./pages/FDiscuss";
import FShotput from "./pages/FShotput";
import FLongjump from "./pages/FLongjump";
import FHundred from "./pages/FHundred";
import FTwoH from "./pages/FTwoH";
import FFourH from "./pages/FFourH";
import FRelay from "./pages/FRelay";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hundred" element={<Hundred />} />
      <Route path="/twoh" element={<TwoH />} />
      <Route path="/fourh" element={<FourH />} />
      <Route path="/relay" element={<Relay />} />
      <Route path="/shotput" element={<Shotput />} />
      <Route path="/discuss" element={<Discuss />} />
      <Route path="/longjump" element={<Longjump />} />
      <Route path="/fhundred" element={<FHundred />} />
      <Route path="/ftwoh" element={<FTwoH />} />
      <Route path="/ffourh" element={<FFourH />} />
      <Route path="/frelay" element={<FRelay />} />
      <Route path="/fshotput" element={<FShotput />} />
      <Route path="/fdiscuss" element={<FDiscuss />} />
      <Route path="/flongjump" element={<FLongjump />} />
    </Routes>
  );
}

export default App;

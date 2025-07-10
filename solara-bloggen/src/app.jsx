import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogOverview from "./blog/BlogOverview";
import HvemViEr from "./blog/HvemViEr";
import KaerligPlan from "./blog/KaerligPlan";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/blog" element={<BlogOverview />} />
        <Route path="/blog/HvemViEr" element={<HvemViEr />} />
        <Route path="/blog/KaerligPlan" element={<KaerligPlan />} />
      </Routes>
    </BrowserRouter>
  );
}

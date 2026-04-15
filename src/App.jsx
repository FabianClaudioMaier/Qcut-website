import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ImpressumPage from "./pages/ImpressumPage";
import PrivacyNoticePage from "./pages/PrivacyNoticePage";
import DownloadsPage from "./pages/DownloadsPage";
import HelpPage from "./pages/HelpPage";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import DownloadsPage2 from "./pages/DownloadsPage2";

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/impressum" element={<ImpressumPage />} />
            <Route path="/privacy-notice" element={<PrivacyNoticePage />} />
            <Route path="/downloads" element={<DownloadsPage />} />
            <Route path="/downloads2" element={<DownloadsPage2 />} />
            <Route path="/help" element={<HelpPage />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </Routes>
        </div>
        <SiteFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;

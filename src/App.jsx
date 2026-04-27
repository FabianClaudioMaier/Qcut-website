import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ImpressumPage from "./pages/ImpressumPage";
import PrivacyNoticePage from "./pages/PrivacyNoticePage";
import HelpPage from "./pages/HelpPage";
import DJVersionPage from "./pages/DJVersionPage";
import EditorVersionPage from "./pages/EditorVersionPage";
import PricingPage from "./pages/PricingPage";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import SuccessPage from "./pages/SuccessPage";

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/impressum" element={<ImpressumPage />} />
            <Route path="/privacy-notice" element={<PrivacyNoticePage />} />
            <Route path="/help" element={<HelpPage />} />
            <Route path="/dj-version" element={<DJVersionPage />} />
            <Route path="/editor-version" element={<EditorVersionPage />} />
            <Route path="/success" element={<SuccessPage />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </Routes>
        </div>
        <SiteFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;

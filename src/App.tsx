import { lazy, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { FloatingNavigation } from "./components/navigation/FloatingNavigation";
import { ScrollToTop } from "./components/ui/ScrollToTop";
import { Footer } from "./components/layout/Footer";
import { CustomCursor } from "./components/ui/CustomCursor";

const HomePage = lazy(() => import("./pages/HomePage"));
const DocuMindPage = lazy(() => import("./pages/DocuMindPage"));
const MyChartPage = lazy(() => import("./pages/MyChartPage"));
const ResponsibleAIPage = lazy(() => import("./pages/ResponsibleAIPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

export default function App() {
  const location = useLocation();

  return (
    <>
      <FloatingNavigation />
      <main>
        <Suspense
          fallback={
            <div className="grid min-h-screen place-items-center bg-[var(--bg)] text-[var(--muted)]">
              Loading portfolio
            </div>
          }
        >
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<HomePage />} />
              <Route path="/projects/documind" element={<DocuMindPage />} />
              <Route path="/projects/mychart" element={<MyChartPage />} />
              <Route path="/projects/responsible-ai" element={<ResponsibleAIPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </main>
      <Footer />
      <ScrollToTop />
      <CustomCursor />
    </>
  );
}

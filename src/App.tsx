// App.tsx — Root component that defines client-side routes and wraps the app
// with Vercel Analytics/SpeedInsights (passive, no UI impact).
//
// Routes:
//   /          → Main portfolio page with 3D character + all sections
//   /myworks   → Full project gallery page
//   /works/:id → Individual project detail page

import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import "./App.css";

// Lazy imports → each becomes a separate JS chunk in the build output
const CharacterModel = lazy(() => import("./components/Character"));
const MainContainer = lazy(() => import("./components/MainContainer"));
const AllSideQuests = lazy(() => import("./pages/AllSideQuests"));
const SideQuestDetail = lazy(() => import("./pages/SideQuestDetail"));
const RapturesPage = lazy(() => import("./pages/RapturesPage"));
const ResearchPaperPage = lazy(() => import("./pages/ResearchPaperPage"));

// LoadingProvider manages the global loading screen state and must wrap
// the home route so the 3D character can report its load progress.
import { LoadingProvider } from "./context/LoadingProvider";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* ── Home route ────────────────────────────────────────────────────
            LoadingProvider shows a loading screen until the 3D model is ready.
            CharacterModel (the Three.js canvas) is passed as a child prop so
            MainContainer can place it inside the correct DOM container while
            the rest of the page sections scroll beneath it.                  */}
        <Route
          path="/"
          element={
            <LoadingProvider>
              <Suspense fallback={null}>
                <MainContainer>
                  <Suspense fallback={null}>
                    <CharacterModel />
                  </Suspense>
                </MainContainer>
              </Suspense>
            </LoadingProvider>
          }
        />

        {/* ── All Works page ────────────────────────────────────────────── */}
        <Route
          path="/side-quests"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <AllSideQuests />
            </Suspense>
          }
        />

        {/* ── Raptures — custom immersive page (must be before :slug) ──── */}
        <Route
          path="/side-quests/raptures"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <RapturesPage />
            </Suspense>
          }
        />

        {/* ── Research Paper — custom immersive page (must be before :slug) */}
        <Route
          path="/side-quests/research-paper"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <ResearchPaperPage />
            </Suspense>
          }
        />

        {/* ── Individual project detail page ────────────────────────────── */}
        <Route
          path="/side-quests/:slug"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <SideQuestDetail />
            </Suspense>
          }
        />

      </Routes>

      {/* Vercel Analytics — tracks page views (no config needed) */}
      <Analytics />
      {/* Vercel Speed Insights — measures Core Web Vitals automatically */}
      <SpeedInsights />
    </BrowserRouter>
  );
};

export default App;

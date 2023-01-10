import React, { Suspense } from "react";

// routing
import { HashRouter, Routes, Route } from "react-router-dom";

// pages
import Layout from "./pages/Layout";
import FormPage from "./pages/FormPage";
import ErrorPage from "./pages/ErrorPage";
import SuccessPage from "./pages/SuccessPage";

// custom components
import AppLoader from "./components/AppLoader";
import ThemeHandler from "./components/ThemeHandler";
import InfoBar from "./components/InfoBar";

// ctx
import AppProviders from "./contexts";

import "./App.css";

const App = () => {
  return (
    <AppProviders>
      <ThemeHandler>
        <AppLoader />
        <InfoBar />
        <HashRouter>
          <Suspense fallback={<AppLoader forceOpen />}>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<FormPage />} />
                <Route path="/success" element={<SuccessPage />} />
                <Route path="*" element={<ErrorPage />} />
              </Route>
            </Routes>
          </Suspense>
        </HashRouter>
      </ThemeHandler>
    </AppProviders>
  );
};

export default App;

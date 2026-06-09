import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import {
  Login,
  Dashboard,
  ResidentAccess,
  Packages,
  RentersInsurance,
  Rent,
  Stacked,
  Pyramid,
  Customers,
  MaintenanceBoard,
  Line,
  Area,
  Bar,
  Pie,
  Financial,
  ColorPicker,
  ColorMapping,
  Announcements,
  Amenities,
  Events,
} from './pages';

import './App.css';
import { useStateContext } from './contexts/ContextProvider';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const AppLayout = () => {
  const {
    setCurrentColor,
    setCurrentMode,
    currentMode,
    activeMenu,
    themeSettings,
  } = useStateContext();

  const location = useLocation();
  const isLoginPage = location.pathname === '/' || location.pathname === '/login';

  useEffect(() => {
    const currentThemeColor = localStorage.getItem('colorMode');
    const currentThemeMode = localStorage.getItem('themeMode');

    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, [setCurrentColor, setCurrentMode]);

  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <ScrollToTop />

      {isLoginPage ? (
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      ) : (
        <div className="flex relative dark:bg-main-dark-bg text-[14px]">
          <div className="fixed right-4 bottom-4" style={{ zIndex: 1000 }}>
            <TooltipComponent content="Settings" position="Top">
              <div />
            </TooltipComponent>
          </div>

          {activeMenu && (
            <div className="w-64 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              <Sidebar />
            </div>
          )}

          <div
            className={
              activeMenu
                ? 'bg-main-bg dark:bg-main-dark-bg min-h-screen md:ml-64 md:w-[calc(100%-16rem)] w-full'
                : 'bg-main-bg dark:bg-main-dark-bg min-h-screen w-full'
            }
          >
            <div className="bg-main-bg navbar w-full">
              <Navbar />
            </div>

            <main className="max-w-[1450px] mx-auto px-3 pb-3 pt-1 overflow-x-auto scale-[0.96] origin-top">
              {themeSettings && <ThemeSettings />}

              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/resident-access" element={<ResidentAccess />} />
                <Route path="/packages" element={<Packages />} />
                <Route path="/rent" element={<Rent />} />
                <Route path="/customers" element={<Customers />} />
                <Route path="/renters-insurance" element={<RentersInsurance />} />
                <Route path="/maintenance" element={<MaintenanceBoard />} />
                <Route path="/announcements" element={<Announcements />} />
                <Route path="/amenities" element={<Amenities />} />
                <Route path="/events" element={<Events />} />
                <Route path="/color-picker" element={<ColorPicker />} />
                <Route path="/line" element={<Line />} />
                <Route path="/area" element={<Area />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/financial" element={<Financial />} />
                <Route path="/color-mapping" element={<ColorMapping />} />
                <Route path="/pyramid" element={<Pyramid />} />
                <Route path="/stacked" element={<Stacked />} />
              </Routes>
            </main>

            <Footer />
          </div>
        </div>
      )}
    </div>
  );
};

const App = () => (
  <BrowserRouter>
    <AppLayout />
  </BrowserRouter>
);

export default App;
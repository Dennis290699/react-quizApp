import { Outlet } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';
import { ChristmasEffect } from './ChristmasEffect';

export const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <Outlet />
      <ThemeToggle />
      <ChristmasEffect />
    </div>
  );
};
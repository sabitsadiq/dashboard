"use client";
import React, { Children, useState } from "react";
import AuthSideBar from "./AuthSideBar";
import { ErrorBoundary } from "react-error-boundary";
import AuthNav from "./AuthNav";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setSidebarOpen((prevSidebarOpen) => !prevSidebarOpen);
  };
  return (
    <ErrorBoundary fallback={<div>Something Went Wrong</div>}>
      <main className=" w-full bg-gray-200/40 max-w-[1400px]">
        <div>
          <AuthNav onToggleNav={handleSidebarToggle} />
        </div>
        <div className="flex">
          <div
            className={`min-w-[15rem] lg:block ${sidebarOpen ? "" : "hidden"}`}
          >
            <AuthSideBar />
          </div>
          {
            <div
              className={`absolute top-0 left-0 bg-gray-400 ${
                sidebarOpen ? "block" : "hidden"
              }`}
            >
              <AuthSideBar handleCloseSideBar={handleSidebarToggle} />
            </div>
          }
          <div className=" pt-16 bg-gray-300/40 w-full h-full">{children}</div>
        </div>
      </main>
    </ErrorBoundary>
  );
};

export default AuthLayout;

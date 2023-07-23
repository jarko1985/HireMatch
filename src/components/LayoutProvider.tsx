"use client";
import React, { useEffect, useState } from "react";
import { ConfigProvider, message } from "antd";
import { usePathname, useRouter } from "next/navigation";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "@/redux/usersSlice";
import Loader from "./Loader";
import { setLoading } from "@/redux/loadersSlice";

function LayoutProvider({ children }: { children: React.ReactNode }) {
  const { currentUser } = useSelector((state: any) => state.users);
  const { loading } = useSelector((state: any) => state.loaders);
  const dispatch = useDispatch();
  const [isSideBarExpanded, setIsSideBarExpanded] = useState(true);
  const pathname = usePathname();
  const router = useRouter();
  const getCurrentUser = async () => {
    try {
      dispatch(setLoading(true));
      const response = await axios.get("/api/users/currentuser");
      dispatch(setCurrentUser(response.data.data));
    } catch (error: any) {
      message.error(error.response.data.message || "Something went wrong!!");
    } finally {
      dispatch(setLoading(false));
    }
  };
  useEffect(() => {
    if (pathname !== "/login" && pathname !== "/register" && !currentUser) {
      getCurrentUser();
    }
  }, [pathname]);
  const onLogout = async () => {
    try {
      dispatch(setLoading(true));
      await axios.post("/api/users/logout");
      message.success("Logged out successfully");
      dispatch(setCurrentUser(null));
      router.push("/login");
    } catch (error: any) {
      message.error(error.response.data.message || "Something went wrong");
    } finally {
      dispatch(setLoading(false));
    }
  };

  const menuItems = [
    {
      name: "Home",
      path: "/",
      icon: "ri-home-7-line",
    },
    {
      name: "Profile",
      path: "/profile",
      icon: "ri-shield-user-line",
    },
    {
      name: "Applications",
      path: "/applications",
      icon: "ri-file-list-2-line",
    },
    {
      name: "Settings",
      path: "/settings",
      icon: "ri-settings-2-line",
    },
    {
      name: "Saved",
      path: "/saved",
      icon: "ri-save-line",
    },
  ];
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@3.4.0/fonts/remixicon.css"
          rel="stylesheet"
        />
      </head>
      <body>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#213555",
            },
          }}
        >
          {loading && <Loader />}
          {pathname === "/login" || pathname === "/register" ? (
            <div>{children}</div>
          ) : (
            <div className="layout-parent">
              <div className="sidebar">
                <div className="logo">
                  {isSideBarExpanded && <h1> HireMatch</h1>}
                  {!isSideBarExpanded && (
                    <i
                      className="ri-menu-2-line"
                      onClick={() => setIsSideBarExpanded(!isSideBarExpanded)}
                    ></i>
                  )}
                  {isSideBarExpanded && (
                    <i
                      className="ri-close-line"
                      onClick={() => setIsSideBarExpanded(!isSideBarExpanded)}
                    ></i>
                  )}
                </div>
                <div className="menu-items">
                  {menuItems.map((item, index) => {
                    const isActive = pathname === item.path;
                    return (
                      <div
                        className={`menu-item ${
                          isActive ? "active-menu-item" : ""
                        }`}
                        style={{
                          justifyContent: isSideBarExpanded
                            ? "flex-start"
                            : "center",
                        }}
                      >
                        <i className={item.icon}></i>
                        <span>{isSideBarExpanded && item.name}</span>
                      </div>
                    );
                  })}
                </div>

                <div className="user-info">
                  {isSideBarExpanded && (
                    <div className="flex flex-col">
                      <span>{currentUser?.name}</span>
                    </div>
                  )}
                  <i className="ri-logout-box-r-line" onClick={onLogout}></i>
                </div>
              </div>
              <div className="body">{children}</div>
            </div>
          )}
        </ConfigProvider>
      </body>
    </html>
  );
}

export default LayoutProvider;

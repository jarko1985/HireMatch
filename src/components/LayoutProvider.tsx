"use client";
import React, { useEffect, useState } from "react";
import { ConfigProvider, message } from "antd";

function LayoutProvider({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#213555",
            },
          }}
        >
            <div>{children}</div>
        </ConfigProvider>
      </body>
    </html>
  );
}

export default LayoutProvider;

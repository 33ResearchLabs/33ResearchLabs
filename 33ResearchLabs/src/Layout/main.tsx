// src/Layout/Main.tsx
import React from "react";

export const Main = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <main>{children}</main>
    </>
  );
};

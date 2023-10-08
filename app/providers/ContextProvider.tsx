"use client";
import React from "react";
import { ThemeProvider } from "@/app/context/themesContext";
import { GlobalProvider } from "@/app/context/globalContext";

interface Props {
  children: React.ReactNode;
}

function ContextProvider({ children }: Props) {
  return (
    <>
      <GlobalProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </GlobalProvider>
    </>
  );
}

export default ContextProvider;

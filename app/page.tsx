"use client";
import Playground from "./Components/Playground";
import { useTheme } from "./context/themesContext";

export default function Home() {
  const theme = useTheme();

  return (
    <main
      className="h-[100vh] flex justify-center items-center"
      style={{
        background: theme.colorBg,
      }}
    >
      <Playground />
    </main>
  );
}

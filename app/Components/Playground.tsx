"use client";
import React from "react";
import { Resizable } from "re-resizable";

function Playground() {
  const [isDragging, setIsDragging] = React.useState(false);
  const [width, setWidth] = React.useState(800);
  const [padding, setPadding] = React.useState(25);

  const [code, setCode] = React.useState("");

  return (
    <div
      className="min-h-[40vh] my-96 relative flex flex-col"
      style={{
        backgroundImage:
          "repeating-linear-gradient(45deg,#565656 25%,transparent 0,transparent 75%,#565656 0,#565656),repeating-linear-gradient(45deg,#565656 25%,#131313 0,#131313 75%,#565656 0,#565656)",
        backgroundPosition: "0 0,12px 12px",
        backgroundSize: "24px 24px",

        padding: padding + "px",
      }}
    >
      <div
        className="right-drag-handle 
        absolute top-[50%] translate-y-1/2 right-[-7px] w-3 h-3 rounded-full bg-white cursor-col-resize"
      ></div>
      <div
        className="left-drag-handle 
        absolute top-[50%] translate-y-1/2 left-[-7px] w-3 h-3 rounded-full bg-white cursor-col-resize"
      ></div>

      <div className="code-block-header">
        <div className="code-block-header__buttons">
          <div className="code-block-header__button"></div>
          <div className="code-block-header__button"></div>
          <div className="code-block-header__button"></div>
        </div>
        <div className="code-block-header__title">index.tsx</div>
      </div>

      <Resizable
        className=" bg-orange-200"
        style={{
          flex: 1,
          maxWidth: "1000px",
          width: "100%",
        }}
        defaultSize={{
          width: 200,
          height: 200,
        }}
        minWidth={200}
        maxWidth={1000}
      ></Resizable>
    </div>
  );
}

export default Playground;

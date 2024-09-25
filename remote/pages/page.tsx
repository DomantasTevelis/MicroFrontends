import Add from "@/utils/Add";
import MultiplyByTwo from "@/utils/MultiplyByTwo";
import dynamic from "next/dynamic";
import React from "react";

const Nav = dynamic(() => import("host/nav"), { ssr: false });

export default function Home() {
  return (
    <>
      <Nav />
      <div>
        <main>
          <p>4 + 2 = {Add({ x: 4, y: 2 })}</p>
          <p>8 * 2 = {MultiplyByTwo({ x: 8 })}</p>
        </main>
      </div>
    </>
  );
}

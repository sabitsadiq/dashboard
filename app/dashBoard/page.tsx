import React from "react";
import { Card, Card3 } from "../components/card/Card";
import { Card2 } from "../components/card/Card";

const DashBoard = () => {
  return (
    <main className="py-10 px-2 md:px-8 text-gray-400">
      <p className="font-normal text-2xl">Task Dashboard</p>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  md:gap-x-8">
        <Card />
        <Card2 />
        <Card3 />
      </div>
    </main>
  );
};

export default DashBoard;

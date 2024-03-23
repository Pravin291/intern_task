import React from "react";
import CallToAction from "../pages/CallToAction";
import HomeAd from "./HomeAd";

export default function Home() {
  return (
    <>
      <div className="min-h-screen mt-6">
        <div>
          <HomeAd/>
        </div>
        <div className="p-3 bg-blue-100 dark:bg-slate-700 max-w-screen-xl mx-auto mb-6 ">
          <CallToAction />
        </div>
      </div>
    </>
  );
}

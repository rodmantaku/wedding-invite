// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import React from "react";
import "./App.css";
import InviteForm from "./InviteForm";
import { Image } from "@chakra-ui/react";
import topimg from "./assets/image.png";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-lg">
        {/* <h1 className="text-2xl font-bold mb-4 text-center">結婚式ご招待</h1>
        <p className="mb-6 text-center">ご出席のご意向をお知らせください ✨</p> */}
        <Image
          src={topimg}
          alt="トップ画像"
          // borderRadius="md"
          // boxShadow="md"
          // objectFit="cover"
          w="100%"
          h="auto"
        ></Image>
        <InviteForm />
      </div>
    </div>
  );
}

export default App;

import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import Link from "next/link";

function Legister() {
  return (
    <div className="flex flex-row-reverse place-items-center place-content-center mt-32">
      <div>
        <Player
          autoplay={true}
          loop={true}
          src="https://assets8.lottiefiles.com/private_files/lf30_BfKkV9.json"
          style={{ height: "300px", width: "300px" }}
        ></Player>
      </div>
      <div className="mr-48 flex flex-col space-y-3">
        <input
          placeholder="Email"
          className="p-3 text-xl w-96 border-2 border-slate-900"
        />
        <input
          placeholder="Password"
          className="p-3 text-xl w-96 border-2 border-slate-900"
        />
        <button className="bg-blue-900 w-96 hover:bg-blue-700 text-white p-3">
          Log In
        </button>
        <p className="text-center">
          Haven&apos;t Registered ? So you should...
        </p>
        <Link href="/register">
          <button className="bg-blue-700 w-96 hover:bg-blue-900 text-white p-3">
            Register
          </button>
        </Link>
        <Link href="/">
          <button className="bg-slate-200 w-96 hover:bg-slate-700 hover:text-white text-black p-3">
            Read Blogs
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Legister;

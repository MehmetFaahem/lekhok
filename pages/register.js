import React, { useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEyeSlash,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";

function Register() {
  const [hided, setHided] = useState(true);

  return (
    <div className="flex place-items-center place-content-center mt-32">
      <div>
        <Player
          autoplay={true}
          loop={true}
          src="https://assets8.lottiefiles.com/packages/lf20_yg9ubdj2.json"
          style={{ height: "300px", width: "300px" }}
        ></Player>
      </div>
      <div className="ml-48 flex flex-col space-y-3">
        <input
          placeholder="Email"
          type="email"
          className="p-3 text-xl w-96 border-2 border-slate-900"
        />

        <div className="p-3 flex justify-between w-96 text-xl border-2 border-slate-900 place-items-center ">
          <input
            type={hided ? "password" : "text"}
            placeholder="Password"
            className="w-72"
          />
          {hided ? (
            <FontAwesomeIcon
              icon={faEye}
              height="30"
              width="30"
              color="black"
              className="px-1"
              onClick={() => setHided(!hided)}
            />
          ) : (
            <FontAwesomeIcon
              icon={faEyeSlash}
              height="30"
              width="30"
              color="black"
              className="px-1"
              onClick={() => setHided(!hided)}
            />
          )}
        </div>

        <button className="bg-blue-900 w-96 hover:bg-blue-700 text-white p-3">
          Register
        </button>
        <p className="text-center">Already a member ? So you should...</p>
        <Link href="/login">
          <button className="bg-blue-700 w-96 hover:bg-blue-900 text-white p-3">
            Log In
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

export default Register;

import React, { useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEyeSlash,
  faRightToBracket,
  faCamera,
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import Cookie from "universal-cookie";

function Register() {
  const [hided, setHided] = useState(true);
  const [loaded, setLoaded] = useState(false);

  const cookie = new Cookie();

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const validEmail = new RegExp(
    "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
  );
  const validPassword = new RegExp("^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$");

  const router = useRouter();

  const submitTer = () => {
    if (
      validEmail.test(credentials.email) &&
      validPassword.test(credentials.password) &&
      loaded
    ) {
      cookie.set("SESSION", "REGISTERED", { path: "/" });
      setTimeout(() => {
        router.push("/");
      }, 3000);
    }
  };

  return (
    <div className="flex place-items-center place-content-center mt-28">
      <iframe
        name="hiddenFrame"
        width="0"
        height="0"
        border="0"
        style={{ display: "none" }}
      ></iframe>
      <div>
        <Player
          autoplay={true}
          loop={true}
          src="https://assets8.lottiefiles.com/packages/lf20_yg9ubdj2.json"
          style={{ height: "300px", width: "300px" }}
        ></Player>
      </div>
      <div className="ml-48 flex flex-col space-y-3">
        <form
          action="https://lekhok-backend.vercel.app/register"
          method="post"
          encType="multipart/form-data"
          target="hiddenFrame"
          onSubmit={submitTer}
        >
          <div>
            <label
              htmlFor="image"
              className="text-white cursor-pointer
              mb-2 flex bg-slate-900 justify-center p-3 space-x-2 place-items-center rounded-lg mt-4 "
            >
              <FontAwesomeIcon
                icon={faCamera}
                height="30px"
                width="30px"
                color="white"
              />
              <h1>{loaded ? "Your Pic Is Selected" : "Select Profile Pic"}</h1>
            </label>
            <input
              type="file"
              id="image"
              name="image"
              accept=".jpg, .jpeg, .png"
              required
              hidden
              onChange={() => setLoaded(true)}
            />
          </div>

          <input
            name="email"
            placeholder="Email"
            type="email"
            value={credentials.email}
            onChange={(e) =>
              setCredentials({ ...credentials, email: e.target.value })
            }
            className="p-3 text-xl w-96 border-t-2 border-x-2 border-slate-900"
          />

          <div className="p-3 flex justify-between w-96 text-xl border-t-2 border-x-2 border-slate-900 place-items-center ">
            <input
              name="password"
              type={hided ? "password" : "text"}
              placeholder="Password"
              value={credentials.password}
              onChange={(e) =>
                setCredentials({ ...credentials, password: e.target.value })
              }
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

          {!validEmail.test(credentials.email) ||
          !validPassword.test(credentials.password) ||
          !loaded ? (
            <div
              onClick={() => alert("Credential formates are not correct")}
              className="bg-blue-900 w-96 text-center hover:bg-blue-700 text-white p-3"
            >
              Register
            </div>
          ) : (
            <button className="bg-green-900 w-96 hover:bg-blue-700 text-white p-3">
              Register
            </button>
          )}
        </form>

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

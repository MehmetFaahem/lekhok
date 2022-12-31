import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

function Categories() {
  return (
    <div className="my-10">
      <h1 className="text-2xl text-black font-bold">Read By Categories</h1>
      <div className="mt-10" id="categories">
        <div
          id="category"
          className="justify-center cursor-pointer h-48 w-48 bg-slate-200 flex flex-col place-items-center rounded-xl"
        >
          <Player
            autoplay={true}
            loop={true}
            src="https://assets1.lottiefiles.com/packages/lf20_4kx2q32n.json"
            style={{ height: "100px", width: "100px" }}
          ></Player>
          <h3>Programming</h3>
        </div>

        <div
          id="category"
          className="justify-center cursor-pointer h-48 w-48 bg-slate-200 flex flex-col place-items-center rounded-xl"
        >
          <Player
            autoplay={true}
            loop={true}
            src="https://assets5.lottiefiles.com/packages/lf20_My3Zxm.json"
            style={{ height: "100px", width: "100px" }}
          ></Player>
          <h3>World</h3>
        </div>

        <div
          id="category"
          className="justify-center cursor-pointer h-48 w-48 bg-slate-200 flex flex-col place-items-center rounded-xl"
        >
          <Player
            autoplay={true}
            loop={true}
            src="https://assets9.lottiefiles.com/packages/lf20_nw19osms.json"
            style={{ height: "100px", width: "100px" }}
          ></Player>
          <h3>Health and Fitness</h3>
        </div>

        <div
          id="category"
          className="justify-center cursor-pointer h-48 w-48 bg-slate-200 flex flex-col place-items-center rounded-xl"
        >
          <Player
            autoplay={true}
            loop={true}
            src="https://assets4.lottiefiles.com/packages/lf20_X6keQTFrdI.json"
            style={{ height: "100px", width: "100px" }}
          ></Player>
          <h3>Lifestyle</h3>
        </div>

        <div
          id="category"
          className="justify-center cursor-pointer h-48 w-48 bg-slate-200 flex flex-col place-items-center rounded-xl"
        >
          <Player
            autoplay={true}
            loop={true}
            src="https://assets7.lottiefiles.com/packages/lf20_slipwrv0.json"
            style={{ height: "100px", width: "100px" }}
          ></Player>
          <h3>Business</h3>
        </div>

        <div
          id="category"
          className="justify-center cursor-pointer h-48 w-48 bg-slate-200 flex flex-col place-items-center rounded-xl"
        >
          <Player
            autoplay={true}
            loop={true}
            src="https://assets9.lottiefiles.com/packages/lf20_ad3uxjiv.json"
            style={{ height: "100px", width: "100px" }}
          ></Player>
          <h3>Book and Writings</h3>
        </div>
      </div>
    </div>
  );
}

export default Categories;

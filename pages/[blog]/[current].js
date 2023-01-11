import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Parent } from "..";

function List() {
  const router = useRouter();
  const { current, blog } = router.query;

  return (
    <Parent>
      <div
        style={{
          width: "700px",
        }}
        className="flex flex-col mt-10"
      >
        <div className="flex flex-col place-content-center">
          <h1 className="text-3xl font-bold text-center mb-8">{blog}</h1>
          <p
            dangerouslySetInnerHTML={{ __html: current }}
            className="bg-slate-200 rounded-xl whitespace-pre-line break-keep text-xl text-black p-6"
          ></p>
        </div>
      </div>
    </Parent>
  );
}

export default List;

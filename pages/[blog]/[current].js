import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Parent } from "..";

function List() {
  const router = useRouter();
  const { current } = router.query;

  return (
    <Parent>
      <div
        style={{
          width: "700px",
        }}
        className="flex flex-col mt-10"
      >
        <div className="flex place-content-center">
          <p
            dangerouslySetInnerHTML={{ __html: current }}
            className="bg-slate-200 text-black p-6"
          ></p>
        </div>
      </div>
    </Parent>
  );
}

export default List;

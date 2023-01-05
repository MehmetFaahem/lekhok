import React, { useState, useRef, useMemo, useEffect } from "react";
import { Parent } from ".";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { convertFromRaw } from "draft-js";
import { convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";

const BlogCreator = dynamic(() => import("../Components/Editor"), {
  ssr: false,
});

function Post() {
  const router = useRouter();

  const [blog, setBlog] = useState({
    title: "",
    description: "Start Writing From Here...",
    category: "Programming",
  });

  const settingExact = (desc) => {
    setBlog({ ...blog, description: desc });
  };

  async function publishBlog() {
    const actualDesc = await draftToHtml(blog.description);
    await setBlog({ ...blog, description: actualDesc });

    await fetch("https://lekhok-backend.vercel.app/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blog),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message == "success") {
          router.push("/");
        }
      });
  }

  return (
    <Parent>
      <div className="flex flex-col">
        <div className="mt-6 mb-6 flex space-x-2 place-items-center">
          <h1>Select your Blog category:</h1>
          <select
            value={blog.category}
            onChange={(e) => {
              setBlog({ ...blog, category: e.target.value });
            }}
            className="bg-white rounded-2xl p-3 border-2 border-slate-900"
          >
            <option value="Business">Business</option>
            <option value="Programming">Programming</option>
            <option value="Education">Education</option>
            <option value="World">World</option>
            <option value="Health and Fitness">Health and Fitness</option>
            <option value="Lifestyle">LifeStyle</option>
            <option value="Book and Writings">Book and Writings</option>
          </select>
        </div>
        <input
          value={blog.title}
          onChange={(e) => setBlog({ ...blog, title: e.target.value })}
          placeholder="Blog Title"
          style={{
            width: "710px",
            height: "100px",
          }}
          className="text-xl rounded-2xl mt-2 p-3 border-2 border-slate-900 text-black"
        />

        <BlogCreator settingExact={settingExact} />

        {/* <div
          style={{ width: "710px", height: "310px" }}
          className="p-4 rounded-2xl text-black bg-white mt-6 border-2 border-slate-900"
        >
          <textarea
            value={blog.description}
            onChange={(e) => setBlog({ ...blog, description: e.target.value })}
            style={{
              height: "auto",
              minHeight: "300px",
              width: "680px",
            }}
            placeholder="Describe from your mind"
          />
        </div> */}
        <div className="flex justify-end mb-6">
          <button
            onClick={publishBlog}
            className="mt-4 p-2 text-white bg-slate-900 rounded-xl"
          >
            Publish
          </button>
        </div>
      </div>
    </Parent>
  );
}

export default Post;

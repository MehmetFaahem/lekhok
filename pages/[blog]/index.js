import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Parent } from "..";

function List() {
  const router = useRouter();
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("https://lekhok-backend.vercel.app/post")
      .then((data) => data.json())
      .then((response) => setBlogs(response));
  }, []);

  const { blog } = router.query;
  return (
    <Parent>
      <div className="flex flex-col text-center">
        <h1 className="text-2xl mt-10">{blog} Related Blogs</h1>
        <div className="mt-10 flex flex-col place-items-center">
          {blogs
            .filter(({ category }) => category == blog)
            .map((blog, index) => (
              <div
                style={{
                  width: "600px",
                }}
                onClick={() => {
                  router.push({
                    pathname: "/[blog]/[current]",
                    query: {
                      current: blog.description,
                      blog: blog.title,
                    },
                  });
                }}
                className="h-54 mb-6 rounded-2xl bg-slate-200 px-8 cursor-pointer py-4 text-black"
                key={index}
              >
                <h1 className="text-2xl font-bold">{blog.title}</h1>
                <h1 id="max-lines" className="mt-6">
                  {blog.description}
                </h1>
              </div>
            ))}
        </div>
      </div>
    </Parent>
  );
}

export default List;

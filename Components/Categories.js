import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { useRouter } from "next/router";

const CategorieList = [
  {
    id: 1,
    name: "Programming",
    lottie: "https://assets1.lottiefiles.com/packages/lf20_4kx2q32n.json",
  },
  {
    id: 2,
    name: "World",
    lottie: "https://assets5.lottiefiles.com/packages/lf20_My3Zxm.json",
  },
  {
    id: 3,
    name: "Health and Fitness",
    lottie: "https://assets9.lottiefiles.com/packages/lf20_nw19osms.json",
  },
  {
    id: 4,
    name: "Lifestyle",
    lottie: "https://assets4.lottiefiles.com/packages/lf20_X6keQTFrdI.json",
  },
  {
    id: 5,
    name: "Business",
    lottie: "https://assets7.lottiefiles.com/packages/lf20_slipwrv0.json",
  },
  {
    id: 6,
    name: "Book and Writings",
    lottie: "https://assets9.lottiefiles.com/packages/lf20_ad3uxjiv.json",
  },
  {
    id: 7,
    name: "Education",
    lottie: "https://assets8.lottiefiles.com/private_files/lf30_JenNba.json",
  },
  {
    id: 8,
    name: "Something",
    lottie: "https://assets7.lottiefiles.com/private_files/lf30_KPNyqw.json",
  },
  {
    id: 9,
    name: "Something",
    lottie: "https://assets7.lottiefiles.com/private_files/lf30_KPNyqw.json",
  },
];

function Categories() {
  const router = useRouter();

  return (
    <div
      style={{
        marginTop: "20px",
      }}
    >
      <h1 className="text-2xl text-black font-bold">Read By Categories</h1>

      <div id="categories">
        {CategorieList.map((category, index) => (
          <div
            onClick={() => {
              router.push({
                pathname: "/[blog]",
                query: { blog: category.name },
              });
            }}
            id="category"
            key={index}
          >
            <Player
              autoplay={true}
              loop={true}
              src={category.lottie}
              style={{ height: "100px", width: "100px" }}
            ></Player>
            <h3>{category.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;

import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Link from "next/link";
import Categories from "../Components/Categories";
import { useState, useEffect } from "react";
import Cookie from "universal-cookie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faUser } from "@fortawesome/free-solid-svg-icons";
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
];

const inter = Inter({ subsets: ["latin"] });

export const Heading = () => {
  const [session, setSession] = useState(false);
  const cookie = new Cookie();

  useEffect(() => {
    if (cookie.get("SESSION")) {
      setSession(true);
    }
  }, []);

  return (
    <div
      id="heading"
      style={{
        width: "720px",
      }}
      className="flex p-6 m-3 bg-white rounded-3xl place-items-center"
    >
      <div>
        <h1 className="text-2xl">Lekhok</h1>
      </div>
      <div
        style={{
          marginLeft: "340px",
        }}
        className="flex space-x-3"
      >
        {session ? (
          <>
            <Link href="/post">
              <button className="p-3 bg-slate-800 text-white rounded-xl">
                Write A Blog
                <span>
                  <FontAwesomeIcon
                    icon={faPenToSquare}
                    color="white"
                    width={30}
                    height={30}
                    className="ml-1"
                  />
                </span>
              </button>
            </Link>
            <Link href="/profile">
              <button className="p-3 ml-1 bg-slate-800 text-white rounded-xl">
                My Profile
                <span>
                  <FontAwesomeIcon
                    icon={faUser}
                    color="white"
                    width={30}
                    height={30}
                    className="ml-1"
                  />
                </span>
              </button>
            </Link>
          </>
        ) : (
          <>
            <Link href="/login">
              <button className="p-3 text-sm ml-20 bg-slate-800 text-white rounded-xl">
                Log In
              </button>
            </Link>
            <Link href="/register">
              <button className="p-3 text-sm bg-slate-800 text-white rounded-xl">
                Register
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export function Parent({ children }) {
  return (
    <div>
      <Head>
        <title>Lekhok</title>
        <meta name="description" content="Digital Blog App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <section className="flex">
          <Heading />
        </section>
        <section className="ml-6">{children}</section>
      </main>
    </div>
  );
}

export default function Home() {
  return (
    <Parent>
      <Categories />
    </Parent>
  );
}

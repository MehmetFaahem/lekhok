import React from "react";
import Link from "next/link";

function Header() {
  return (
    <div>
      <section className="flex">
        <div className="flex place-items-center">
          <div>
            <h1 className="text-2xl">Lekhok</h1>
          </div>
          <div className="flex ml-96 space-x-3">
            <Link href="/login">
              <button className="p-3 bg-slate-800 text-white rounded-xl">
                Log In
              </button>
            </Link>
            <Link href="/register">
              <button className="p-3 bg-slate-800 text-white rounded-xl">
                Register
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Header;

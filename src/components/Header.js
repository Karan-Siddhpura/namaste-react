import { LOGO_URL } from "../utils/constants.js";
import { useState } from "react";
import { Link } from "react-router";
import useOnline from "../hooks/useOnline.js";
const Header = () => {
  const [autString, setAuthString] = useState("Login");
  const onlineFlag = useOnline();
  return (
    <>
      <div
        className="flex justify-around items-center bg-black
      "
      >
        <div className=" w-32 h-28 ">
          <img src={LOGO_URL} className="w-[100%] h-[100%]" />
        </div>
        <ul className="flex items-center text-white gap-10">
          <Link className="">
            <li>{onlineFlag ? "🟢" : "🔴"}</li>
          </Link>
          <Link
            className="hover:border-white hover:border-2 px-4 py-2 rounded-lg"
            to={"/"}
          >
            <li>Home</li>
          </Link>
          <Link
            className="hover:border-white hover:border-2 px-4 py-2 rounded-lg"
            to={"/about"}
          >
            <li>About Us</li>
          </Link>
          <Link
            className="hover:border-white hover:border-2 px-4 py-2 rounded-lg"
            to={"/contact"}
          >
            <li>Cart</li>
          </Link>
        </ul>
        <button
          className="text-white border-2 border-white w-24 h-11 rounded-lg hover:bg-white hover:text-black"
          onClick={() => {
            autString === "Login"
              ? setAuthString("Logout")
              : setAuthString("Login");
          }}
        >
          {autString}
        </button>
      </div>
    </>
  );
};

export default Header;

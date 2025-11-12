import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

export default function Navbar() {
  const router = useRouter();
  const [Search, setSearch] = useState("");

  useEffect(() => {
    if (router.query.q) {
      setSearch(router.query.q);
    }
  }, [router.query.q]);

  const SeachHandler = (event) => {
    if (event.key === "Enter" && Search.trim()) {
      router.push(`/search?q=${encodeURIComponent(Search.trim())}`);
    }
  };

  return (
    <div className="Navbar-div">
      <div className="Navbar-img">
        <img
          src="../img/photo21740927060-removebg-preview.png"
          alt="Logo"
        />
      </div>

      <div>
        <ul className="Navbar-ul">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">Recipes</a>
          </li>
          <li>
            <a href="#">How to tos</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Biogs</a>
          </li>
        </ul>
      </div>

      <div className="Navbar-input">
        <SearchIcon
          style={{ position: "absolute", right: "3px", top: "5px", color: "#fff" }}
        />
        <input
          type="text"
          placeholder="Search your mood"
          value={Search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={SeachHandler}
        />
      </div>

      <div className="Navbar-icon">
        <PersonOutlineRoundedIcon style={{ color: "#fff" }} />
        <ShoppingBagOutlinedIcon style={{ color: "#fff" }} />
      </div>
    </div>
  );
}

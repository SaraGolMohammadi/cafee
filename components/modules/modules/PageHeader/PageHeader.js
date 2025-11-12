import Link from "next/link";
import React from "react";

function PageHeader({ route }) {
  return (
    <div className="PageHeader-div">
      <div>
        <h1>
          {route}
        </h1>
        <div className="PageHeader-div-title">
          <p>
          <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
            Home
         </Link>

          </p>
          <p>/</p>
          <p>
            <Link href={`/${route}`}>{route}</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default PageHeader;

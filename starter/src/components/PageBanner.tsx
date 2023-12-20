import Link from "next/link";
import React from "react";
import { TitleBlock } from "../pages";

const PageBanner: React.FC<TitleBlock> = ({ title, preTitle }) => {
  return (
    <div className="container-fluid page-header py-5 mb-5">
      <div className="container py-5">
        <h1 className="display-1 text-white animated slideInDown">
          {preTitle}
        </h1>
        <nav aria-label="breadcrumb animated slideInDown">
          <ol className="breadcrumb text-uppercase mb-0">
            <li className="breadcrumb-item">
              <Link href="/">
                <a className="text-white">Home</a>
              </Link>
            </li>
            <li
              className="breadcrumb-item text-primary active"
              aria-current="page"
            >
              {title}
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default PageBanner;

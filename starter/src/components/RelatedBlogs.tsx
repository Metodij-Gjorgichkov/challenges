import React from "react";
import { FeaturedBlogsType } from "../types/type";
import Link from "next/link";

const RelatedBlogs: React.FC<FeaturedBlogsType> = (res) => {
  return (
    <div>
      <h4 className="mtext-112 cl2 mb-3">Related Blogs</h4>

      <Link href={`/blog/${res.id}`}>
        <ul>
          <li className="mb-4">
            <a className="wrao-pic-w">
              <img src={res.img} alt="PRODUCT" className="img-fluid" />

              <div className="p-t-8 mt-1">
                <div className="stext-116 cl8 hov-cl1 trans-04 mb-3">
                  {res.title}
                </div>
              </div>
            </a>
          </li>
        </ul>
      </Link>
    </div>
  );
};

export default RelatedBlogs;

import React from "react";
import BlogItem from "./BlogItem";
import { FeaturedBlogsType } from "../types/type";
import Link from "next/link";

interface Props {
  featuredBlogsData: FeaturedBlogsType[];
}

const FeaturedBlogs: React.FC<Props> = ({ featuredBlogsData }) => {
  return (
    <section className="sec-blog bg0 p-t-60 p-b-90">
      <div className="container">
        <div className="p-b-66">
          <h3 className="ltext-105 cl5 txt-center respon1">Our Blogs</h3>
        </div>

        <div className="row">
          {featuredBlogsData.map((blog) => {
            return (
              <Link href={`/blog/${blog.id}`}>
                <div className="col-sm-6 col-md-4 p-b-40">
                  <BlogItem {...blog} />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBlogs;

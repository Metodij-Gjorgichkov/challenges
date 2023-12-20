import React from "react";
import ProductItem from "./ProductItem";
import { FeaturedProductsType } from "../types/type";
import Link from "next/link";

interface Props {
  relatedData: FeaturedProductsType[];
}

const RelatedProducts: React.FC<Props> = ({ relatedData }) => {
  return (
    <section className="sec-relate-product bg0 p-t-45 p-b-105">
      <div className="container">
        <div className="p-b-45">
          <h3 className="ltext-106 cl5 txt-center">Related Products</h3>
        </div>

        <div className="wrap-slick2">
          <div className="d-flex">
            {relatedData.map((relate) => {
              return (
                <ProductItem key={`relateProduct-${relate.id}`} {...relate} />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;

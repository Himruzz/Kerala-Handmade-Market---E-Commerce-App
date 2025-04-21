import React from "react";
import Link from "next/link";
import ProductCard from "./ProductCard";
import { products } from "@/data/product";
import "./featuredproducts.css";

const FeaturedProducts = () => {
  const all_products = products;
  const featured_products = all_products.slice(0, 8);
  
  return (
    <section className="featured-products-section">
      <div className="featured-products-container">
        <div className="section-title-container">
          <h2 className="section-title">Signature Collection</h2>
          <p className="section-subtitle">
            Discover our finest handcrafted treasures from Kerala, each piece a testament to generations of artisanal excellence
          </p>
        </div>
        
        <div className="featured-products-grid">
          {featured_products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        
        <div className="view-all-container">
          <Link href="/collections" className="view-all-link">
            View All Collections <span className="arrow-icon">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
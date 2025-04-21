import type { Metadata } from "next";
import FeaturedProducts from "./components/FeaturedProducts";
import "./home_page.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kerala Crafts | Handmade Treasures",
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-container">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">The Handmade Market</h1>
          <p className="hero-subtitle">Where tradition meets contemporary elegance</p>
          <div className="hero-buttons">
            <Link href="/collections" className="primary-button">
              Explore Collection
            </Link>
            <Link href="/about-us" className="secondary-button">
              Our Story
            </Link>
          </div>
        </div>
      </section>


      <FeaturedProducts />

    
    </>
  );
}
"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "../contexts/CartContext";
import "./product_card_style.css";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category?: string;
}

const ProductCard = ({
  id,
  name,
  price,
  description,
  image,
  category = "Handcrafted",
}: ProductCardProps) => {
  const { addToCart } = useCart();
  const product = { id, name, price, description, image };

  return (
    <div className="product-card">
      <div className="product-image-container">
        <Image 
          src={image} 
          alt={name} 
          className="product-image" 
          width={500} 
          height={600}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
        <div className="product-overlay">
          <Link href={`/collections/${id}`} className="view-product-button">
            View Details
          </Link>
        </div>
      </div>
      
      <div className="product-info">
        <span className="product-category">{category}</span>
        <Link href={`/collections/${id}`} className="product-name-link">
          <h3 className="product-name">{name}</h3>
        </Link>
        <p className="product-description">{description.length > 60 ? description.substring(0, 60) + '...' : description}</p>
        <div className="product-bottom">
          <div className="product-price">₹{price.toLocaleString()}</div>
          <button
            className="add-to-cart-button"
            onClick={() => addToCart(product)}
            aria-label={`Add ${name} to cart`}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Handmade Market | About",
};

const AboutUs = () => {
  return (
    <div className="text-black">
      {/* Hero Section */}
      <div className="position-relative" style={{ height: "24rem" }}>
        <div
          className="position-absolute top-0 start-0 w-100 h-100 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("./111.png")',
            backgroundSize: "contain",
            backgroundPosition: "center",
          }}
        >
          <div className="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-50"></div>
        </div>
        <div className="position-relative d-flex align-items-center justify-content-center h-100">
          <h1 className="display-4 fw-bold text-warning">Our Story</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="container py-5">
        <div className="mx-auto" style={{ maxWidth: "800px" }}>
          <p className="fs-5 lh-lg mb-4">
            Welcome to <strong>The Handmade Market</strong>, where every product tells a story. Founded in 2023, we are passionate about preserving traditional craftsmanship and bringing you the finest handmade goods from artisans across Kerala and beyond. Each item in our collection is a testament to the skill, dedication, and creativity of our talented makers.
          </p>

          <h2 className="h3 fw-bold mb-4">Our Philosophy</h2>
          <p className="mb-4">
            At <strong>The Handmade Market</strong>, we believe that every handmade product is a piece of art. Whether it’s a handwoven saree, a carved wooden figurine, or a coconut shell bowl, each item carries the essence of its creator and the culture it represents. We are committed to promoting sustainable practices, fair trade, and the preservation of traditional crafts.
          </p>

          <div className="row g-4 mt-4">
            <div className="col-md-6">
              <h3 className="h5 fw-bold mb-3">Craftsmanship</h3>
              <p>
                Our artisans bring generations of expertise to their craft, creating products that are not only beautiful but also meaningful. From handloom textiles to wooden carvings, every piece is made with care and precision.
              </p>
            </div>
            <div className="col-md-6">
              <h3 className="h5 fw-bold mb-3">Sustainability</h3>
              <p>
                We are dedicated to sustainability. Our products are made from natural, eco-friendly materials, and we work closely with artisans to ensure ethical production practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
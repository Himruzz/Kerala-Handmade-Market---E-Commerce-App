# Kerala Handmade Market - E-Commerce App

## Project Overview

This is an e-commerce application built for "The Hand Made Market" featuring Kerala-themed handcrafted products. The application is built using Next.js App Router and Commerce.js as the headless commerce platform.

## Live Demo

Visit the live site: [Kerala Handmade Market](https://kerala-handmade-market-e-commerce-app.vercel.app/)

## Features

### Pages
- **Home**: Landing page featuring hero section, featured products, and categories
- **Product List**: Browse all handcrafted items with filtering and sorting options
- **Product Detail**: Detailed view of each product with images, description, and "Add to Cart" functionality
- **Cart**: View and manage items in your shopping cart
- **About Us**: Information about the market, artisans, and the story behind the products
- **Contact Us**: Contact form and information for customer inquiries

### Technical Features
- Next.js App Router for optimized routing and page transitions
- Commerce.js integration for product management, cart, and checkout
- Responsive design for mobile, tablet, and desktop
- Server-side rendering for improved SEO
- Optimized images for faster loading
- Clean, intuitive user interface

## Tech Stack

- **Frontend**: Next.js 14, React, TailwindCSS
- **E-Commerce**: Commerce.js
- **Deployment**: Vercel
- **State Management**: React Context API
- **Styling**: TailwindCSS with custom Kerala-inspired theme

## Project Structure

```
├── app/
│   ├── about/
│   ├── cart/
│   ├── contact/
│   ├── products/
│   │   ├── [id]/
│   ├── layout.js
│   ├── page.js
├── components/
│   ├── cart/
│   ├── common/
│   ├── layout/
│   ├── product/
├── lib/
│   ├── commerce.js
│   ├── hooks/
├── public/
│   ├── images/
├── styles/
│   ├── globals.css
├── next.config.js
├── package.json
├── README.md
```

## Getting Started

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

### Prerequisites

- Node.js 16.8 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Himruzz/Kerala-Handmade-Market.git
cd kerala-handmade-market
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up your Commerce.js account and create a `.env.local` file with your API keys:
```
NEXT_PUBLIC_COMMERCE_PUBLIC_KEY=your_public_key
COMMERCE_SECRET_KEY=your_secret_key
```

4. Run the development server as described above.

## Commerce.js Integration

The project uses Commerce.js to manage products, inventory, and the shopping cart. Key integration points include:

- Product data fetching in `lib/commerce.js`
- Cart functionality using Commerce.js SDK
- Product categories and collections

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deployment

The application is deployed on Vercel at [https://kerala-handmade-market-e-commerce-app.vercel.app/](https://kerala-handmade-market-e-commerce-app.vercel.app/)

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Future Enhancements

- User authentication and accounts
- Wishlist functionality
- Product reviews and ratings
- Integration with local payment gateways popular in Kerala
- Multi-language support (English and Malayalam)
- Featured artisan profiles

## About Kerala Handmade Market

Kerala Handmade Market showcases authentic handcrafted products from Kerala, India. Our platform connects local artisans with global customers, promoting traditional craftsmanship and sustainable shopping.

## License

This project is licensed under the MIT License.

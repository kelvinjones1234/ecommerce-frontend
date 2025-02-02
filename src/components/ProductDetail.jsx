import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import ProductRecommendations from "./Recommendation";
import AddToCartButton from "./AddToCartButton";
import { useCart } from "../context/CartContext";

const ProductDetail = () => {
  const thumbnails = [1, 2, 3];
  const [openSection, setOpenSection] = useState(null);

  const { toggleCart } = useCart();

  const accordionData = [
    {
      title: "INGREDIENTS",
      content:
        "Natural moisturizing agents, Organic Hippophae Rhamnoides (Seabuckthorn) Fruit Oil, Hydrolysed Jojoba Esters (natural moisturizing agent), Citrus Aurantium Bergamia (Bergamot) Peel Oil, Organic Linum Usitatissimum (Linseed) Seed Oil, Ascophyllum Nodosum (Seaweed) Powder, Lavandula Angustifolia (Lavender) Oil, Guar Hydroxypropyltrimonium Chloride (legume based conditioning agent), Boswellia Carteri (Frankincense) Oil, Anthemis Nobilis (Roman Chamomile) Flower Oil, Benzyl",
    },
    {
      title: "SHIPPING INFORMATION",
      content:
        "Natural moisturizing agents, Organic Hippophae Rhamnoides (Seabuckthorn) Fruit Oil, Hydrolysed Jojoba Esters (natural moisturizing agent), Citrus Aurantium Bergamia (Bergamot) Peel Oil, Organic Linum Usitatissimum (Linseed) Seed Oil, Ascophyllum Nodosum (Seaweed) Powder, Lavandula Angustifolia (Lavender) Oil, Guar Hydroxypropyltrimonium Chloride (legume based conditioning agent), Boswellia Carteri (Frankincense) Oil, Anthemis Nobilis (Roman Chamomile) Flower Oil, Benzyl",
    },
    {
      title: "RETURNS INFORMATION",
      content: "Please contact us for detailed returns information.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 xl:px-16 2xl:px-8 lg:px-8 py-8">
      <div className="grid lg:grid-cols-2 lg:gap-x-[5rem]">
        {/* Left Column - Images */}
        <div className="lg:relative">
          <div className="lg:sticky lg:top-8">
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
              <img
                src="/api/placeholder/600/600"
                alt="Dog Mini Travel Set"
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="flex gap-4 mt-4">
              {thumbnails.map((i) => (
                <button
                  key={i}
                  className="w-20 h-20 bg-gray-100 rounded-lg hover:opacity-80 transition-opacity"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Product Info */}
        <div className="flex flex-col gap-8">
          {/* Product Title and Price */}
          <div className="pt-[3rem]">
            <h1 className="text-3xl">Dog Mini Travel Set</h1>
            <p className="text-2xl mt-2">₦66.00</p>
          </div>

          <div className="flex flex-col gap-4">
            {/* <button className="w-full tracking-[.2rem] border border-black text-black text-[.9rem] py-4 rounded-lg hover:bg-black hover:text-white transition-colors">
              ADD TO CART
            </button> */}
            <AddToCartButton
              onClick={() => {
                toggleCart();
              }}
            />
          </div>
          <button className="w-full bg-indigo-600 text-white py-4 rounded-lg hover:bg-indigo-700 transition-colors">
            Buy now with MaduPay
          </button>
          <button className="text-sm underline underline-offset-4 hover:text-gray-600 transition-colors">
            More payment options
          </button>

          {/* Product Description */}
          <div className="bg-white border-gray-200">
            <p className="text-gray-700">
              The ultimate traveling grooming set. The mini-sized grooming
              products are conveniently stored in a hardy Zip bag. Wipe, wash,
              condition, detangle and moisturize. Just set free all the
              essentials you'll need to pamper your pooch on your adventures
              together! All products are made with natural ingredients and can
              be refilled to use on the go.
            </p>

            <div className="mt-6">
              <h2 className="font-semibold mb-3">Mini Travel Set includes:</h2>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <div className="w-1 h-1 bg-gray-700 rounded-full mr-3" />1 x
                  Travel Wipes (20 pack)
                </li>
                <li className="flex items-center">
                  <div className="w-1 h-1 bg-gray-700 rounded-full mr-3" />1 x
                  Wash (30ml)
                </li>
                <li className="flex items-center">
                  <div className="w-1 h-1 bg-gray-700 rounded-full mr-3" />1 x
                  Leave-in Conditioner Cream (30ml)
                </li>
                <li className="flex items-center">
                  <div className="w-1 h-1 bg-gray-700 rounded-full mr-3" />1 x
                  Leave in Conditioner Spray (30ml)
                </li>
                <li className="flex items-center">
                  <div className="w-1 h-1 bg-gray-700 rounded-full mr-3" />1 x
                  Coat Masque (30ml)
                </li>
                <li className="flex items-center">
                  <div className="w-1 h-1 bg-gray-700 rounded-full mr-3" />1 x
                  Calm Cologne (30ml)
                </li>
                <li className="flex items-center">
                  <div className="w-1 h-1 bg-gray-700 rounded-full mr-3" />1 x
                  Zip Bag
                </li>
              </ul>
            </div>
          </div>

          {/* Accordion Buttons */}
          <div className="space-y-2">
            {accordionData.map((section, index) => (
              <div key={section.title} className="border-t border-black">
                <button
                  onClick={() =>
                    setOpenSection(openSection === index ? null : index)
                  }
                  className="w-full flex justify-between items-center py-4 hover:bg-gray-50 transition-colors"
                >
                  <span className="font-thin text-sm">{section.title}</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-500 ${
                      openSection === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-200 ${
                    openSection === index ? "max-h-48" : "max-h-0"
                  }`}
                >
                  <div className="pb-4 overflow-y-auto max-h-48 custom-scrollbar">
                    <p className="text-sm text-gray-600">{section.content}</p>
                  </div>
                </div>
              </div>
            ))}

            <div className="pt-6 space-y-4">
              <div className="flex items-center gap-4 border-t pt-4">
                <button className="text-sm hover:underline">Share</button>
                <button className="px-4 py-2 bg-black text-white text-sm rounded-full hover:bg-gray-800 transition-colors">
                  Write a review
                </button>
              </div>

              <div>
                <h3 className="font-medium">Reviews</h3>
                <span className="text-sm text-gray-500">0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[10rem]">
        <ProductRecommendations />
      </div>
    </section>
  );
};

export default ProductDetail;

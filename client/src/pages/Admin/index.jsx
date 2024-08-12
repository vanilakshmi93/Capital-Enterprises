import React from 'react';

// Importing images from assets
import image1 from "../../assets/product1.png";
import image2 from "../../assets/product2.png";
import image3 from "../../assets/product3.png";

const ProductForm = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex flex-col space-y-4">
        {/* Breadcrumb Navigation */}
        <nav className="text-sm text-gray-500">
          <a href="#" className="hover:text-blue-600">Home</a> &gt; 
          <a href="#" className="hover:text-blue-600 ml-1">Product</a> &gt; 
          <span className="ml-1">Add Product</span>
        </nav>

        <h2 className="text-3xl font-bold">Add Product</h2>
        <p className="text-gray-600 mb-4">Add your product for your customers</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Basic Information */}
          <div className="bg-white p-6 rounded-lg shadow col-span-2">
            <h3 className="text-lg font-bold mb-4">Basic Information</h3>
            <input
              type="text"
              placeholder="Input Your Product Name"
              className="w-full mb-4 p-2 border rounded"
            />
            <textarea
              placeholder="Input Your Descriptions Here"
              className="w-full p-2 border rounded"
            ></textarea>
          </div>

          {/* Product Image */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-bold mb-4">Product Image</h3>
            <div className="grid grid-cols-3 gap-4">
              <img src={image1} alt="product1" className="w-full h-24 object-cover rounded-lg" />
              <img src={image2} alt="product2" className="w-full h-24 object-cover rounded-lg" />
              <img src={image3} alt="product3" className="w-full h-24 object-cover rounded-lg" />
              
            </div>
          </div>

          {/* Category */}
          <div className="bg-white p-6 rounded-lg shadow col-span-1 lg:col-span-1">
            <h3 className="text-lg font-bold mb-4">Category</h3>
            <select className="w-full p-2 border rounded">
              <option>Product Category</option>
            </select>
          </div>

          {/* Price */}
          <div className="bg-white p-6 rounded-lg shadow col-span-1 lg:col-span-1">
            <h3 className="text-lg font-bold mb-4">Price</h3>
            <input
              type="text"
              placeholder="Minimum Order"
              className="w-full mb-4 p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Unit Price"
              className="w-full p-2 border rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductForm;

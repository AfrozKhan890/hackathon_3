"use client";

import { useState } from "react";
import Service from "@/components/Service";
import BreadCrumb from "@/components/BreadCrumb";

export default function CheckOut() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    country: "",
    address: "",
    city: "",
    province: "",
    zipCode: "",
    phone: "",
    email: "",
    additionalInfo: "",
    paymentMethod: "",
  });

  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<"success" | "error" | null>(null); // For success/error styles

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = () => {
    const {
      firstName,
      lastName,
      country,
      address,
      city,
      province,
      zipCode,
      phone,
      email,
      paymentMethod,
    } = formData;

    // Check if all required fields are filled
    if (
      !firstName ||
      !lastName ||
      !country ||
      !address ||
      !city ||
      !province ||
      !zipCode ||
      !phone ||
      !email ||
      !paymentMethod
    ) {
      setMessage("Please fill out all required fields and select a payment method.");
      setMessageType("error");
      return;
    }

    setMessage("Order placed successfully! Thank you for your purchase.");
    setMessageType("success");
  };

  return (
    <div>
      <BreadCrumb title="Checkout" url="checkout" />
      <div className="flex justify-center items-center mx-auto px-4 sm:px-6 md:px-16 lg:px-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Billing Details */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Billing details</h2>
            <form className="grid grid-cols-2 gap-8">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="col-span-1 border border-gray-300 rounded p-5"
                value={formData.firstName}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="col-span-1 border border-gray-300 rounded p-5"
                value={formData.lastName}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="companyName"
                placeholder="Company Name (Optional)"
                className="col-span-2 border border-gray-300 rounded p-5"
                value={formData.companyName}
                onChange={handleInputChange}
              />
              <select
                name="country"
                className="col-span-2 border border-gray-300 rounded p-5"
                value={formData.country}
                onChange={handleInputChange}
              >
                <option value="">Country / Region</option>
                <option value="Pakistan">Pakistan</option>
                <option value="Sri Lanka">Sri Lanka</option>
                <option value="India">India</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="Nepal">Nepal</option>
                <option value="Malaysia">Malaysia</option>
                <option value="Sri Lanka">Sri Lanka</option>
              </select>
              <input
                type="text"
                name="address"
                placeholder="Street Address"
                className="col-span-2 border border-gray-300 rounded p-5"
                value={formData.address}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="city"
                placeholder="Town / City"
                className="col-span-2 border border-gray-300 rounded p-5"
                value={formData.city}
                onChange={handleInputChange}
              />
              <select
                name="province"
                className="col-span-2 border border-gray-300 rounded p-5"
                value={formData.province}
                onChange={handleInputChange}
              >
                <option value="">Province</option>
                <option value="Sindh">Sindh</option>
                <option value="Punjab">Punjab</option>
                <option value="Balochistan">Balochistan</option>
                <option value="KPK">KPK</option>
              </select>

              <input
                type="text"
                name="zipCode"
                placeholder="ZIP Code"
                className="col-span-2 border border-gray-300 rounded p-5"
                value={formData.zipCode}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                className="col-span-2 border border-gray-300 rounded p-5"
                value={formData.phone}
                onChange={handleInputChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="col-span-2 border border-gray-300 rounded p-5"
                value={formData.email}
                onChange={handleInputChange}
              />
              <textarea
                name="additionalInfo"
                placeholder="Additional Information"
                className="col-span-2 border border-gray-300 rounded p-5 h-20"
                value={formData.additionalInfo}
                onChange={handleInputChange}
              ></textarea>
            </form>
          </div>

          {/* Order Summary */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Order Summary</h2>
            <div className="border-b pb-4 mb-4">
              <div className="flex justify-between text-gray-700">
                <span>Asgaard sofa x 1</span>
                <span>Rs. 250,000.00</span>
              </div>
              <div className="flex justify-between text-gray-700 mt-2">
                <span>Subtotal</span>
                <span>Rs. 250,000.00</span>
              </div>
              <div className="flex justify-between text-gray-700 font-bold text-lg mt-2">
                <span>Total</span>
                <span className="text-darkyellow">Rs. 250,000.00</span>
              </div>
            </div>

            {/* Payment Options */}
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="bank"
                  className="mr-2"
                  onChange={handleInputChange}
                />
                
                Direct Bank Transfer
              </label>
              <p className="text-sm text-gray-600 mb-4">
              Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
            </p>
              <label className="block text-gray-700 mb-2">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="cod"
                  className="mr-2"
                  onChange={handleInputChange}
                />
                Cash on Delivery
              </label>
            </div>

            <button
              onClick={handleSubmit}
              className="w-full bg-lightyellow hover:bg-darkyellow text-black py-3 px-4 rounded shadow"
            >
              Place order
            </button>
          </div>
        </div>
      </div>

      {/* Popup message */}
      {message && (
        <div className={`fixed inset-0 flex justify-center items-center bg-opacity-50 ${messageType === "error" ? "bg-red-500" : "bg-green-500"}`}>
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
            <p className="text-center text-xl text-gray-700">{message}</p>
            <button
              onClick={() => setMessage("")}
              className="w-full bg-darkyellow hover:bg-lightyellow text-white py-2 mt-4 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <Service />
    </div>
  );
}

import BreadCrumb from "@/components/BreadCrumb";
import Service from "@/components/Service";
import { MdLocationPin } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { MdAccessTimeFilled } from "react-icons/md";

export default function Contact() {
  return (
    <div>
      <BreadCrumb title="Contact" url="contact" />
      <div className="flex justify-center items-center mx-auto px-4 sm:px-6 md:px-16 lg:px-32">
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="flex items-start">
              <MdLocationPin className="text-3xl text-black mr-4" />
              <div>
                <h3 className="text-lg font-semibold text-gray-700">Address</h3>
                <p className="text-gray-600">236 5th SE Avenue, New York NY10000, United States</p>
              </div>
            </div>
            <div className="flex items-start">
              <IoCall className="text-3xl text-black mr-4" />
              <div>
                <h3 className="text-lg font-semibold text-gray-700">Phone</h3>
                <p className="text-gray-600">Mobile: +(84) 546-6789</p>
                <p className="text-gray-600">Hotline: +(84) 456-6789</p>
              </div>
            </div>
            <div className="flex items-start">
              <MdAccessTimeFilled className="text-3xl text-black mr-4" />
              <div>
                <h3 className="text-lg font-semibold text-gray-700">Working Time</h3>
                <p className="text-gray-600">Monday-Friday: 9:00 - 22:00</p>
                <p className="text-gray-600">Saturday-Sunday: 9:00 - 21:00</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Get In Touch With Us</h2>
            <p className="text-gray-600 mb-8">
              For more information about our product & services, feel free to drop us an email. Our staff will always be there to help you out. Do not hesitate!
            </p>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded p-2"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-300 rounded p-2"
              />
              <input
                type="text"
                placeholder="Subject (Optional)"
                className="w-full border border-gray-300 rounded p-2"
              />
              <textarea
                placeholder="Message"
                className="w-full border border-gray-300 rounded p-2 h-24"
              ></textarea>
              <button className="w-full bg-lightyellow hover:bg-darkyellow text-black py-2 px-4 rounded shadow">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      </div>
      <Service />
    </div>
  );
}

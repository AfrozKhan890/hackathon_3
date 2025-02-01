import React from "react";
import Image from "next/image";

const contactDetails = [
  {
    img: "/images/location.svg",
    title: "Address",
    desc: "236 5th SE Avenue, New York NY10000, United States",
  },
  {
    img: "/images/call.svg",
    title: "Phone",
    desc: "Mobile: +(84) 546-6789\nHotline: +(84) 456-6789",
  },
  {
    img: "/images/clock.svg",
    title: "Working Time",
    desc: "Monday-Friday: 9:00 - 22:00\nSaturday-Sunday: 9:00 - 21:00",
  }
];

const ContactInfo: React.FC = () => {
  return (
    <div className="flex flex-col gap-8 lg:w-1/2">
      {contactDetails.map((info, index) => (
        <div key={index} className="flex items-start gap-4">
          <Image
            src={info.img}
            alt={`${info.title}-icon`}
            width={22}
            height={28}
            className="min-w-[22px]"
          />
          <div>
            <h2 className="text-[18px] sm:text-[20px] lg:text-[24px] font-semibold">
              {info.title}
            </h2>
            <p className="text-[14px] sm:text-[16px] text-gray-700 whitespace-pre-line">
              {info.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactInfo;

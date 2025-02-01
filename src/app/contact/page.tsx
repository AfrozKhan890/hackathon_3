"use client";

import React, { useState } from "react";
import Image from "next/image";
import Services from "@/components/Services";
import ContactInfo from "@/components/ContactInfo";
import FormStatusNotification from "@/components/FormStatusNotification";
import ContactForm from "@/components/Form";

// import FormStatusNotification from "./FormStatusNotification";

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<string>("");

  return (
    <>
      {/* Form Status Notification */}
      {formStatus && <FormStatusNotification status={formStatus} />}

      <div>
        <Image
          src={"/images/contact.png"}
          alt="contact"
          width={1440}
          height={316}
          className="w-full h-auto mt-20"
        />
      </div>

      <div className="flex flex-col items-center justify-center mt-10 px-4 lg:mt-20">
        <h1 className="text-[24px] sm:text-[30px] lg:text-[36px] font-semibold text-center">
          Get In Touch With Us
        </h1>
        <p className="text-[14px] sm:text-[16px] text-[#333333] mt-4 text-center max-w-[90%] lg:max-w-[644px]">
          For more information about our product & services, please feel free to
          drop us an email. Our staff will always be there to help you.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-start justify-between mt-12 px-4 lg:px-16 gap-10">
        {/* Contact Information */}
        <ContactInfo />

        {/* Contact Form */}
        <ContactForm setFormStatus={setFormStatus} />
      </div>

      {/* services Section */}
      <Services />
    </>
  );
};

export default Contact;

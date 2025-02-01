"use client";

import React, { useRef, FormEvent } from "react";
import emailjs from "@emailjs/browser";

interface ContactFormProps {
  setFormStatus: (status: string) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ setFormStatus }) => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm("service_m1oh17w", "template_i1j3e5g", form.current, {
          publicKey: "e_YWmh6uA0zJ5DtLb",
        })
        .then(
          () => setFormStatus("SUCCESS"),
          () => setFormStatus("FAILED")
        );
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="flex flex-col lg:w-1/2 gap-6">
      {[
        { label: "Your Name", placeholder: "Enter your name", name: "from_name" },
        { label: "Email Address", placeholder: "Enter your email", name: "from_email" },
        { label: "Subject", placeholder: "Enter subject (optional)", name: "subject" },
        { label: "Message", placeholder: "Enter your message", name: "message" }
      ].map((field, index) => (
        <div key={index} className="flex flex-col">
          <label htmlFor={`field-${index}`} className="text-[16px] font-semibold mb-2">
            {field.label}
          </label>
          {index === 3 ? (
            <textarea
              id={`field-${index}`}
              name={field.name}
              placeholder={field.placeholder}
              className="border border-gray-300 rounded-md px-4 py-3 w-full text-[14px] focus:ring-2 focus:ring-[#B88E2F] focus:outline-none resize-none min-h-[100px]"
            />
          ) : (
            <input
              id={`field-${index}`}
              name={field.name}
              type="text"
              placeholder={field.placeholder}
              className="border border-gray-300 rounded-md px-4 py-3 w-full text-[14px] focus:ring-2 focus:ring-[#B88E2F] focus:outline-none"
            />
          )}
        </div>
      ))}
      <button
        type="submit"
        className="w-full lg:w-[237px] h-[55px] bg-[#B88E2F] text-white rounded-md mt-4 flex items-center justify-center text-[16px] font-semibold hover:bg-[#946F27] transition duration-300"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
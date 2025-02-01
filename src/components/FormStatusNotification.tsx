import React from "react";

interface FormStatusNotificationProps {
  status: string;
}

const FormStatusNotification: React.FC<FormStatusNotificationProps> = ({ status }) => {
  return (
    <div
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 p-4 text-lg font-semibold ${
        status === "SUCCESS" ? "bg-green-500 text-white" : "bg-red-500 text-white"
      } rounded-md shadow-lg z-50`}
    >
      {status === "SUCCESS"
        ? "Your message has been sent!"
        : "Something went wrong, please try again."}
    </div>
  );
};

export default FormStatusNotification;

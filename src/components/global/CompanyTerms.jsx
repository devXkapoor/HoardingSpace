import React, { useState } from "react";

const TermsAndConditions = () => {
  const [isChecked, setIsChecked] = useState(false);

  // Handle checkbox change
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  // Handle form submission (when user agrees to the terms)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isChecked) {
      alert("You have agreed to the terms and conditions!");
    } else {
      alert("Please agree to the terms and conditions first.");
    }
  };

  return (
    <div className="  bg-white p-4 rounded-lg shadow-lg">
      <h2 className="text-lg font-bold mb-4 text-gray-800 text-center">
        Terms and Conditions
      </h2>
      <div className="w-full max-h-[200px] overflow-y-auto p-2 bg-gray-50">
        <p className="mb-2 text-gray-700">
          ApnaHOARDING.com is committed to protecting the privacy of its users.
          This Privacy Policy explains how we collect, use, and protect your
          personal information.
        </p>
        <h2 className="text-base font-semibold mb-2 text-gray-800">
          Information We Collect
        </h2>
        <p className="mb-2 text-gray-700">
          We may collect the following types of information:
          <ul className="list-disc ml-6">
            <li>Personal details such as name, email, and phone number.</li>
            <li>Payment details for transactions.</li>
            <li>
              Usage data like IP address, browser type, and device information.
            </li>
          </ul>
        </p>
        <h2 className="text-base font-semibold mb-2 text-gray-800">
          How We Use Your Information
        </h2>
        <p className="mb-2 text-gray-700">
          We use your information to:
          <ul className="list-disc ml-6">
            <li>Provide and improve our services.</li>
            <li>Process payments and fulfill orders.</li>
            <li>Send important updates and promotional materials.</li>
          </ul>
        </p>
        <h2 className="text-base font-semibold mb-2 text-gray-800">
          Sharing Your Information
        </h2>
        <p className="mb-2 text-gray-700">
          We do not sell your information to third parties. However, we may
          share your data with trusted service providers who assist in
          delivering our services.
        </p>
        <h2 className="text-base font-semibold mb-2 text-gray-800">
          Data Security
        </h2>
        <p className="mb-2 text-gray-700">
          We take reasonable precautions to protect your data. However, no
          method of transmission over the internet or electronic storage is
          completely secure.
        </p>
        <h2 className="text-base font-semibold mb-2 text-gray-800">
          Your Rights
        </h2>
        <p className="mb-2 text-gray-700">
          You have the right to access, update, or delete your personal
          information. To exercise your rights, please contact us at{" "}
          <a href="ApnaHOARDING.com" className="text-blue-600 hover:underline">
            ApnaHOARDING.com
          </a>
          .
        </p>
        <h2 className="text-base font-semibold mb-2 text-gray-800">
          Changes to This Policy
        </h2>
        <p className="text-gray-700">
          We may update this Privacy Policy from time to time. Please check this
          page periodically for updates.
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;

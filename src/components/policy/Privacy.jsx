import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="flex w-full justify-center my-6 ">
      {" "}
      <div className=" w-[60%] container mx-auto px-6 py-10 text-gray-800 mt-[110px] p-4 border-2 rounded-xl  ">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="mb-4">
          ApnaHOARDING.com is committed to protecting the privacy of its users.
          This Privacy Policy explains how we collect, use, and protect your
          personal information.
        </p>

        <h2 className="text-xl font-semibold mb-2">Information We Collect</h2>
        <p className="mb-4">
          We may collect the following types of information:
          <ul className="list-disc ml-6">
            <li>Personal details such as name, email, and phone number.</li>
            <li>Payment details for transactions.</li>
            <li>
              Usage data like IP address, browser type, and device information.
            </li>
          </ul>
        </p>

        <h2 className="text-xl font-semibold mb-2">
          How We Use Your Information
        </h2>
        <p className="mb-4">
          We use your information to:
          <ul className="list-disc ml-6">
            <li>Provide and improve our services.</li>
            <li>Process payments and fulfill orders.</li>
            <li>Send important updates and promotional materials.</li>
          </ul>
        </p>

        <h2 className="text-xl font-semibold mb-2">Sharing Your Information</h2>
        <p className="mb-4">
          We do not sell your information to third parties. However, we may
          share your data with trusted service providers who assist in
          delivering our services.
        </p>

        <h2 className="text-xl font-semibold mb-2">Data Security</h2>
        <p className="mb-4">
          We take reasonable precautions to protect your data. However, no
          method of transmission over the internet or electronic storage is
          completely secure.
        </p>

        <h2 className="text-xl font-semibold mb-2">Your Rights</h2>
        <p className="mb-4">
          You have the right to access, update, or delete your personal
          information. To exercise your rights, please contact us at{" "}
          <a href="ApnaHOARDING.com" className="text-blue-500 hover:underline">
            ApnaHOARDING.com
          </a>
          .
        </p>

        <h2 className="text-xl font-semibold mb-2">Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Please check this
          page periodically for updates.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

import React from "react";

const RefundPolicy = () => {
  return (
    <div className="flex w-full justify-center my-6 ">
      <div className=" w-[55%] container mx-auto px-6 py-10 text-gray-800 mt-[110px] p-4 border-2 rounded-xl my-6 ">
        <h1 className="text-3xl font-bold mb-6">Refund Policy</h1>
        <p className="mb-4">
          While we do not offer refunds for our regular products or services, we
          understand that errors can occasionally occur. Therefore, we have
          established a policy to address situations where extra or duplicate
          payments are made.
        </p>

        <h2 className="text-xl font-semibold mb-2">Eligibility for Refunds</h2>
        <p className="mb-4">
          We will process refunds only for instances where extra or dual
          payments have been deducted due to an error or technical glitch.
          Regular product or service payments are non-refundable.
        </p>

        <h2 className="text-xl font-semibold mb-2">Notification</h2>
        <p className="mb-4">
          If you believe that you have made an extra or dual payment, please
          contact us immediately. You can either email us at
          alerts@apnahoarding.com or call our customer support team at +91
          7974552274
        </p>

        <h2 className="text-xl font-semibold mb-2">Provide Proof</h2>
        <p className="mb-4">
          Once we receive your refund request and the necessary documentation,
          we will review it promptly. Refunds will typically be processed within
          4-5 business days from the date of your request, provided that the
          eligibility criteria are met.
        </p>

        <h2 className="text-xl font-semibold mb-2">Refund Method</h2>
        <p>
          Refunds will be credited back to the original payment method used for
          the transaction.
        </p>
      </div>
    </div>
  );
};

export default RefundPolicy;

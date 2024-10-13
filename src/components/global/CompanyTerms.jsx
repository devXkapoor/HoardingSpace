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
    <div className="flex flex-col items-center justify-center p-4">
      <div className="max-w-[600px] w-full bg-white border-2 p-4 rounded-md shadow-md">
        <h2 className="text-xl font-bold mb-4">Terms and Conditions</h2>

        <div className="border-2 p-4 h-[200px] overflow-y-scroll mb-4 bg-gray-100">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel
            quam vehicula, varius ligula vel, suscipit nunc. Donec commodo
            tincidunt ipsum, nec facilisis turpis lobortis sit amet. Proin sed
            tristique est. Nullam euismod lacus sit amet ante aliquet, nec
            varius sapien vehicula. Etiam bibendum magna in dolor finibus, sed
            posuere nisl dapibus. Aenean a est euismod, venenatis nisi vel,
            hendrerit mauris.
          </p>
          <p>
            Fusce tincidunt leo nec enim gravida, id tempor leo scelerisque.
            Integer pharetra ex neque, quis efficitur lorem pellentesque nec.
            Curabitur scelerisque felis at varius iaculis. Quisque ac justo
            justo. Curabitur eleifend, urna vel viverra facilisis, felis leo
            tincidunt eros, sit amet suscipit arcu elit sit amet nulla. Aenean
            nec gravida eros, ac varius risus. Integer maximus dictum est, et
            pharetra ligula dapibus a.
          </p>
          <p>
            Nullam viverra lacus metus, non tempor libero scelerisque sit amet.
            Duis efficitur viverra orci at volutpat. Suspendisse vestibulum, dui
            sit amet volutpat interdum, libero urna gravida odio, nec pharetra
            risus odio sit amet velit. Nullam scelerisque leo non arcu
            imperdiet, nec fringilla odio interdum.
          </p>
        </div>

        {/* <div className="flex items-center mb-4">
          <input
            type="checkbox"
            id="agree"
            className="mr-2"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="agree" className="text-sm">
            I agree to the terms and conditions
          </label>
        </div> */}

        {/* <button
          className={`w-full py-2 rounded-md ${
            isChecked ? "bg-blue-600 text-white" : "bg-gray-300 text-gray-500"
          }`}
          onClick={handleSubmit}
          disabled={!isChecked}
        >
          Submit
        </button> */}
      </div>
    </div>
  );
};

export default TermsAndConditions;

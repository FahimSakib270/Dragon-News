import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const FindUs = () => {
  return (
    <div className="space-y-3">
      <h2 className="font-bold">Find us on</h2>
      <div>
        {" "}
        <div className="join join-vertical w-full">
          <button className="btn bg-base-100 join-item justify-start">
            <FaFacebook size={16}></FaFacebook> Facebook
          </button>
          <button className="btn bg-base-100 join-item justify-start">
            {" "}
            <FaXTwitter size={16}></FaXTwitter> Twitter
          </button>
          <button className="btn bg-base-100 join-item justify-start">
            <FaInstagram size={16}></FaInstagram> Instagram
          </button>
        </div>
      </div>
    </div>
  );
};

export default FindUs;

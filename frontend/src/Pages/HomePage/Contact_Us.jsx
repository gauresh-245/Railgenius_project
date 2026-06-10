import React from "react";
import { toast, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./Contact_Us.css";

const Contact_Us = () => {
const onSubmit = async (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);

  formData.append("access_key", "2378e77a-46a7-44e6-b473-d6279d73bef6");

  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);

  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: json,
  }).then((res) => res.json());

  if (res.success) {
    toast.success("Form submitted successfully!", {
      position: "top-center", // Correct usage
      autoClose: 3000, // 3 seconds
    });

    // Clear form fields
    event.target.reset();

    // Optional: Delay reload to allow toast to display
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  } else {
    toast.error("Failed to submit the form. Please try again.", {
      position: "top-center", // Correct usage
      autoClose: 3000,
    });
  }
};

  return (
    <>
      <div className="MainContact_Us">
        <div className="contact-us-container">
          {/* Left Side with Image */}
          <div className="contact-us-left">
            <img
              src="/images/Contact.jpg"
              alt="Contact Us"
              className="contact-us-image"
            />
          </div>

          {/* Right Side with Contact Form */}
          <div className="contact-us-right">
            <h2>Contact Us</h2>
            <form className="contact-form" onSubmit={onSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="Contact_Us_Label">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter your name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="Contact_Us_Label">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message" className="Contact_Us_Label">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Write your message"
                ></textarea>
              </div>
              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default Contact_Us;

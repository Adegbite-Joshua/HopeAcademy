import React from 'react';

const ContactUsBox = () => {
  return (
    <div className="ContactUsBox p-3">
      <h3 className="text-xl font-semibold mb-4">Admission Inquiries</h3>
      <div>
        <label htmlFor="firstName" className="block mb-1">
          First Name:
        </label>
        <input
          type="text"
          id="firstName"
          className="form-input border-2 h-12 w-full rounded-md p-2 mb-2"
          placeholder="Enter your first name"
        />

        <label htmlFor="lastName" className="block mb-1">
          Last Name:
        </label>
        <input
          type="text"
          id="lastName"
          className="form-input border-2 h-12 w-full rounded-md p-2 mb-2"
          placeholder="Enter your last name"
        />

        <label htmlFor="email" className="block mb-1">
          Email:
        </label>
        <input
          type="email"
          id="email"
          className="form-input border-2 h-12 w-full rounded-md p-2 mb-2"
          placeholder="Enter your email"
        />

        <label htmlFor="phone" className="block mb-1">
          Phone:
        </label>
        <input
          type="tel"
          id="phone"
          className="form-input border-2 h-12 w-full rounded-md p-2 mb-2"
          placeholder="Enter your phone number"
        />

        <label htmlFor="comments" className="block mb-1">
          Questions / Comments:
        </label>
        <textarea
          id="comments"
          className="form-textarea w-full border-2 rounded-md p-2 mb-4"
          rows="4"
          placeholder="Enter your questions or comments"
        ></textarea>

        <div className="flex justify-end">
          <button className="bg-blue-500 px-4 py-2 rounded-lg">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default ContactUsBox;

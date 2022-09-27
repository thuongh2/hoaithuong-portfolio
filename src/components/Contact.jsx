import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/6da10446-cc7b-4f59-a0e9-e788bbe426ce"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-blue-600">
            Contact
          </p>
          <p className="text-gray-700 py-4">
            Submit the form below or shoot me an email - myemail@gmail.com
          </p>
        </div>
        <input
          className="border border-blue-300 outline-blue-300 p-2 rounded-sm"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 border border-blue-300 outline-blue-300 rounded-sm"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="p-2 border border-blue-300 outline-blue-300 rounded-sm"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-blue border-2 rounded-sm hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;

import React from 'react';
import { Cobe } from './Cobe';
import Container from './container';

function Contact() {
  return (
    <Container>
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8 py-10">
        <div className="h-[300px] w-[300px] lg:h-[500px] lg:w-[500px]">
          <Cobe />
        </div>

        <div className="w-full max-w-lg p-6 bg-white shadow-lg rounded-xl">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Contact Us
          </h1>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                className="w-full mt-1 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                type="text"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                className="w-full mt-1 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                type="email"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                className="w-full mt-1 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your Message"
                rows="4"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 px-4 bg-gray-600 text-white font-semibold rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </Container>
  );
}

export default Contact;

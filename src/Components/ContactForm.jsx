import React from "react";
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiChevronDown,
} from "react-icons/fi";

function ContactForm() {
  return (
    <section className="bg-[#f7f8fa] py-20 px-5">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[380px_1fr] gap-10">

        {/* Left Side */}
        <div>

          {/* Emergency Card */}
          <div className="bg-white border border-gray-200 p-8 relative">
            <div className="absolute left-0 top-0 h-full w-1 bg-red-600"></div>

            <div className="flex justify-between items-start">
              <span className="text-4xl text-red-600 leading-none">*</span>

              <span className="bg-red-100 text-red-600 text-[10px] font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                Immediate Care
              </span>
            </div>

            <h2 className="text-3xl font-semibold mt-4">
              Emergency Support
            </h2>

            <p className="text-gray-500 mt-4 leading-7">
              In case of life-threatening situations, call our dedicated
              emergency line immediately.
            </p>

            <h3 className="text-red-600 text-4xl font-bold mt-8">
              +1 800-999-HELP
            </h3>

            <p className="text-sm text-gray-500 italic mt-3">
              Operational 24/7/365
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-8 mt-12">

            <div className="flex gap-5">
              <div className="w-12 h-12 bg-gray-100 flex items-center justify-center">
                <FiMapPin />
              </div>

              <div>
                <p className="uppercase text-xs font-semibold tracking-widest text-[#b58b41]">
                  Our Address
                </p>

                <p className="text-lg mt-1">
                  100 Divine Plaza,
                  <br />
                  Excellence District
                  <br />
                  New York, NY 10001
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="w-12 h-12 bg-gray-100 flex items-center justify-center">
                <FiPhone />
              </div>

              <div>
                <p className="uppercase text-xs font-semibold tracking-widest text-[#b58b41]">
                  Phone Line
                </p>

                <p className="text-lg mt-1">
                  +1 800-DIVINE-CARE
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="w-12 h-12 bg-gray-100 flex items-center justify-center">
                <FiMail />
              </div>

              <div>
                <p className="uppercase text-xs font-semibold tracking-widest text-[#b58b41]">
                  Email Correspondence
                </p>

                <p className="text-lg mt-1">
                  care@divinehospital.com
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Right Side Form */}
        <div className="bg-white border border-gray-200 p-8 md:p-12">

          <h2 className="text-5xl font-semibold mb-12">
            Send a Secure Message
          </h2>

          <form className="space-y-10">

            <div className="grid md:grid-cols-2 gap-10">

              <div>
                <label className="uppercase text-xs tracking-wider text-gray-500">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="e.g. Alexander Hamilton"
                  className="w-full border-b border-gray-300 py-3 outline-none placeholder:text-gray-400"
                />
              </div>

              <div>
                <label className="uppercase text-xs tracking-wider text-gray-500">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="email@address.com"
                  className="w-full border-b border-gray-300 py-3 outline-none placeholder:text-gray-400"
                />
              </div>

            </div>

            <div>
              <label className="uppercase text-xs tracking-wider text-gray-500">
                Department of Interest
              </label>

              <div className="flex items-center justify-between border-b border-gray-300 py-3 cursor-pointer">
                <span>General Inquiry</span>
                <FiChevronDown />
              </div>
            </div>

            <div>
              <label className="uppercase text-xs tracking-wider text-gray-500">
                Your Message
              </label>

              <textarea
                rows={4}
                placeholder="How can our excellence serve you today?"
                className="w-full border-b border-gray-300 py-3 resize-none outline-none placeholder:text-gray-400"
              />
            </div>

            <button
              className="w-full bg-black text-white uppercase tracking-[3px] py-4 hover:bg-gray-900 transition"
            >
              Deliver Inquiry
            </button>

            <p className="text-center text-sm text-gray-500">
              We typically respond to general inquiries within 2 business
              hours.
            </p>

          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
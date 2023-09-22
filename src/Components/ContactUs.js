import React from 'react'
import ContactImg from "../assets/contact.png";
const ContactUs = () => {
  return (
    <div>
      <div className="max-w-screen-xl  px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg ">
        <div className="flex flex-col justify-between">
          <img src={ContactImg}></img>
        </div>

        <form className='flex flex-col' >
          <div>
            <label for="name" className='flex'>
              <span className="uppercase text-sm text-gray-600 font-bold self-start">
                Full Name
              </span>
            </label>
            <input
              id="name"
              type="text"
              name="name"
              label="name"
              className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mt-8">
            <label for="email" className='flex'>
              <span className="uppercase text-sm text-gray-600 font-bold self-start">
                Email
              </span>
            </label>
            <input
              type="email"
              id="email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              name="from_name"
              label="email"
              className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mt-8">
            <label for="message" className='flex'>
              <span className="uppercase text-sm text-gray-600 font-bold self-start">
                Message
              </span>
            </label>
            <input
              id="message"
              type="textarea"
              label="message"
              name="message"
              className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mt-8">
            <button
              type="submit"
              className="uppercase text-sm font-bold tracking-wide bg-indigo-900 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
            >
              Send Message
              {/* {didSubmit ? didSubmit : "Send Message"} */}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactUs

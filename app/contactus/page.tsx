import React from 'react'

const Contact = () => {
  return (
    <div>
    <section className="bg-gradient-to-r from-indigo-600 to-purple-700 py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center text-white mb-12">Let&apos;s Connect</h2>
        <div className="bg-white rounded-2xl shadow-2xl p-10 max-w-4xl mx-auto">
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input type="text" id="name" name="name" className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 transition duration-200" placeholder="Abdullah Kashif" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input type="email" id="email" name="email" className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 transition duration-200" placeholder="abdullahkashif12b3@gmail.com" />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
              <input type="text" id="subject" name="subject" className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 transition duration-200" placeholder="How can we help you?" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Your Message</label>
              <textarea id="message" name="message" rows={6} className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 transition duration-200" placeholder="Please provide details about your inquiry..."></textarea>
            </div>
            <div>
              <button type="submit" className="w-full bg-indigo-600 text-white font-semibold py-4 px-6 rounded-lg hover:bg-indigo-700 transition duration-300 transform hover:scale-105">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="bg-white rounded-full p-6 inline-block mb-6 shadow-lg">
              <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Phone</h3>
            <p className="text-gray-600 text-lg">03163542906</p>
          </div>
          <div className="text-center">
            <div className="bg-white rounded-full p-6 inline-block mb-6 shadow-lg">
              <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Email</h3>
            <p className="text-gray-600 text-lg">abdullahkashif12b3@gmail.com</p>
          </div>
          <div className="text-center">
            <div className="bg-white rounded-full p-6 inline-block mb-6 shadow-lg">
              <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Office</h3>
            <p className="text-gray-600 text-lg">Gulistan-e-Jauhar Karachi, Pakistan</p>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Contact
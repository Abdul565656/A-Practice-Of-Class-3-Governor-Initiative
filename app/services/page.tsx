import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div>
    <section className="bg-gradient-to-r from-gray-100 to-blue-100 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12 animate-fade-in-down">Services From Abdullah Kashif</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md transform transition duration-500 hover:scale-105 hover:shadow-xl animate-fade-in">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Web Development</h3>
            <p className="text-gray-600">Custom web applications tailored to your business needs&lsquo; built with the latest technologies.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md transform transition duration-500 hover:scale-105 hover:shadow-xl animate-fade-in">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">UI/UX Design</h3>
            <p className="text-gray-600">Intuitive and visually appealing interfaces that enhance user experience and engagement.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md transform transition duration-500 hover:scale-105 hover:shadow-xl animate-fade-in">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Mobile App Development</h3>
            <p className="text-gray-600">Cross-platform mobile applications that work seamlessly on iOS and Android devices.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md transform transition duration-500 hover:scale-105 hover:shadow-xl animate-fade-in">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">E-commerce Solutions</h3>
            <p className="text-gray-600">Robust online stores with secure payment gateways and inventory management systems.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md transform transition duration-500 hover:scale-105 hover:shadow-xl animate-fade-in">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">SEO Optimization</h3>
            <p className="text-gray-600">Improve your website's visibility in search engines and drive organic traffic.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md transform transition duration-500 hover:scale-105 hover:shadow-xl animate-fade-in">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Maintenance & Support</h3>
            <p className="text-gray-600">Ongoing technical support and regular updates to keep your digital assets running smoothly.</p>
          </div>
          <div className='text-center flex items-center justify-center col-span-full mt-8'>
          <Link href="/">
            <button className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300 transform hover:scale-110 animate-pulse">
              Click To Go Back
            </button>
          </Link>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default page
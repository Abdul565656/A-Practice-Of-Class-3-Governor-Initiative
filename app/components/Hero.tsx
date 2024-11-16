import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Hero = () => {
  return (
    <div>
    <section className="bg-gray-100 py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 transform transition-all duration-1000 ease-in-out hover:translate-x-4">
            <h1 className="text-2xl md:text-5xl font-bold text-gray-800 mb-4 animate-fade-in-down">
              Hi&lsquo; I &apos; m <br /> Abdullah Kashif
            </h1>
            <p className="text-xl text-gray-600 mb-6 animate-fade-in-up delay-300">
              A passionate web developer eager to explore technologies and with a strong interest in content creation.
            </p>
            <Link href="/services">
              <button className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105 animate-pulse">
                Here &apos; s What You &apos; re Looking For
              </button>
            </Link>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <Image
              src="/images/Untitled design.png"
              alt="Abdullah Kashif - Web Developer"
              className="w-72 rounded-lg shadow-xl animate-float transition-all duration-1000 ease-in-out hover:scale-110 hover:rotate-3 hover:shadow-2xl"
            width={200}
            height={200}
            />
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Hero
import React from 'react'

const Navbar = () => {
  return (
    <div>
        <header className='bg-white shadow-md py-4 px-6 sticky top-0 z-50 transition-all duration-300 ease-in-out hover:shadow-lg'>
            <div className='container mx-auto flex justify-between items-center'>
                <h2 className='text-2xl font-bold text-gray-800 animate-pulse'>Abdullah Kashif</h2>
                
                <nav>
                    <ul className='flex space-x-4 md:space-x-6'>
                        <li><a href='/' className='text-gray-800 hover:text-blue-500 font-medium transition duration-300 ease-in-out border-b-2 border-transparent hover:border-blue-500 pb-1'>Home</a></li>
                        <li><a href='/projects' className='text-gray-800 hover:text-blue-500 font-medium transition duration-300 ease-in-out border-b-2 border-transparent hover:border-blue-500 pb-1'>Projects</a></li>
                        <li><a href='/services' className='text-gray-800 hover:text-blue-500 font-medium transition duration-300 ease-in-out border-b-2 border-transparent hover:border-blue-500 pb-1'>Services</a></li>
                        <li><a href='/contactus' className='bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out'>Contact Us</a></li>
                    </ul>
                </nav>
            </div>
        </header>
        </div>
  )
}

export default Navbar
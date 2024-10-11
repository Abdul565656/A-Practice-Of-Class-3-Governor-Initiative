import React from 'react'

const projects = () => {
  return (
    <div>
    <section className="bg-gradient-to-r from-indigo-600 to-purple-700 py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center text-white mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project Card 1 */}
          <div className="bg-white rounded-lg shadow-xl overflow-hidden transform transition duration-500 hover:scale-105">
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Resume Builder</h3>
              <p className="text-gray-600 mb-4">Create a mobile app that empowers users to effortlessly build professional resumes tailored to specific job applications.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">Html</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Css</span>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Typescript</span>
              </div> <br />
              <a href="https://hackathon-project-resume-builder-zizn.vercel.app/" className="inline-block bg-indigo-600 text-white font-semibold py-2 px-4 rounded hover:bg-indigo-700 transition duration-300">View Demo</a>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className="bg-white rounded-lg shadow-xl overflow-hidden transform transition duration-500 hover:scale-105">
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">CocaCola Project</h3>
              <p className="text-gray-600 mb-4">Develop a mobile app that offers a personalized and engaging experience for Coca-Cola enthusiasts, utilizing cutting-edge features and technologies.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Html</span>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">Css</span>
              </div>
              <a href="https://coke-cola.web.app" className="inline-block bg-indigo-600 text-white font-semibold py-2 px-4 rounded hover:bg-indigo-700 transition duration-300">View Demo</a>
            </div>
          </div>

          {/* Project Card 3 */}
          <div className="bg-white rounded-lg shadow-xl overflow-hidden transform transition duration-500 hover:scale-105">
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Weather Forecast Dashboard</h3>
              <p className="text-gray-600 mb-4">Develop a mobile app that provides accurate and up-to-date weather information to users, tailored to their specific location.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">OpenWeatherMap API</span>
              </div><br />
              <a href="https://weather-widget-app-sigma.vercel.app/" className="inline-block bg-indigo-600 text-white font-semibold py-2 px-4 rounded hover:bg-indigo-700 transition duration-300">View Demo</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">More Projects Coming Soon!</h3>
        <p className="text-center text-gray-600 max-w-2xl mx-auto">
          I'm constantly working on new and exciting projects. Check back often to see what's new, or get in touch if you'd like to collaborate on something amazing!
        </p>
        <div className="text-center mt-8">
          <a href="/contactus" className="inline-block bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-indigo-700 transition duration-300 transform hover:scale-105">
            Let's Work Together
          </a>
        </div>
      </div>
    </section>
    </div>
  )
}

export default projects
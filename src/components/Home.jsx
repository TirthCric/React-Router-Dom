import React from 'react';

const Home = () => {
  return (
    <div className="bg-white min-h-screen pt-16"> {/* Added padding-top to prevent header overlap */}
      {/* Hero Section */}
      <section className="text-center py-20 px-5 md:px-20 bg-gradient-to-r from-blue-50 to-blue-100">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
          Discover Innovation & Excellence
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Join us as we create solutions that inspire. Explore a world where creativity meets technology, crafted to bring your visions to life.
        </p>
        <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-10 rounded-full shadow-lg transition duration-300">
          Get Started
        </button>
      </section>

      {/* Feature Highlights */}
      <section className="py-16 px-5 md:px-20 bg-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 transition-transform transform hover:scale-105 ">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Innovative Solutions</h2>
            <p className="text-gray-600">
              We combine creativity and technology to deliver unique solutions that push boundaries and elevate your experience.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8 transition-transform transform hover:scale-105">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Customer Focus</h2>
            <p className="text-gray-600">
              Your vision is our priority. Our team works closely with you to bring ideas to life through collaboration.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8 transition-transform transform hover:scale-105">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Expert Team</h2>
            <p className="text-gray-600">
              Our professionals bring dedication and expertise to ensure high-quality results for every project.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8 transition-transform transform hover:scale-105">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Quality Assurance</h2>
            <p className="text-gray-600">
              Rigorous quality checks and standards ensure that your project meets excellence at every step.
            </p>
          </div>
        </div>
      </section>

     {/* Image Gallery */}
<section className="py-16 px-5 md:px-20" style={{ zIndex: 0 }}>
  <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Work in Action</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
    {[
      'https://via.placeholder.com/150x100?text=Project+1',
      'https://via.placeholder.com/150x100?text=Project+2',
      'https://via.placeholder.com/150x100?text=Project+3',
      'https://via.placeholder.com/150x100?text=Project+4',
      'https://via.placeholder.com/150x100?text=Project+5',
      'https://via.placeholder.com/150x100?text=Project+6',
    ].map((src, index) => (
      <div key={index} className="relative overflow-hidden rounded-lg shadow-lg">
        <img
          src={src} // Placeholder image for initial load
          data-src={src.replace('300x200', '600x400')} // Higher-res version for lazy load
          alt={`Project ${index + 1}`}
          className="w-full h-full object-cover lazyload hover:scale-110 transition-transform duration-300"
          loading="lazy" // Enables native lazy loading
        />
      </div>
    ))}
  </div>
</section>


      {/* Testimonials */}
      <section className="py-16 px-5 md:px-20 bg-gray-50">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">What Our Clients Say</h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <p className="text-gray-600 italic">"The team's dedication and innovative ideas were instrumental in bringing our vision to life. We couldn't be happier with the results!"</p>
            <p className="text-right text-blue-600 font-semibold mt-4">- Client A</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8 ">
            <p className="text-gray-600 italic">"Exceptional service and top-notch quality. The team exceeded our expectations every step of the way."</p>
            <p className="text-right text-blue-600 font-semibold mt-4">- Client B</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-16 px-5 md:px-20">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">Ready to Start Your Journey?</h2>
        <p className="text-lg text-gray-600 mb-8">Let's work together to make your ideas a reality. Connect with us today to explore the possibilities.</p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-10 rounded-full shadow-lg transition duration-300">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default Home;

import heroBg from "@assets/images/login-bg.png";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="bg-white py-10 mb-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Image */}
        <div>
          <img
            alt="Hero"
            className="w-full h-[300px] object-cover rounded-lg shadow-md"
            src={heroBg}
          />
        </div>

        {/* Right: Content */}
        <div className="space-y-6">
          <a
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full w-fit text-sm font-medium shadow-sm"
            href="#"
          >
            <span className="text-xl">⚡</span>
            <span className="text-primary font-bold">Know</span>
            <span>Your Potential</span>
          </a>

          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Online Design and Development Courses
          </h1>

          <p className="text-gray-600 text-base">
            Learn from Industry Experts and Enhance Your Skills. Explore our
            range of practical, project-based tutorials.
          </p>

          <div>
            <Link
              className="inline-block px-6 py-3 bg-primary text-white rounded-md shadow hover:bg-primary-50 transition"
              to="/courses"
            >
              Explore Courses
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

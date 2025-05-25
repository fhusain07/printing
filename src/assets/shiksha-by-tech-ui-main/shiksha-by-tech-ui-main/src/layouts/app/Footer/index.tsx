import {
  FaEnvelope,
  FaFacebookF,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-white shadow-[0_-2px_6px_rgba(0,0,0,0.1)] text-gray-700 ">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Contact Info */}
        <div className="space-y-4">
          <div className="w-10 h-10 bg-primary rounded flex items-center justify-center text-white text-xl font-bold">
            <span>S</span>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-sm" />
            <span>hello@shikshabytech.com</span>
          </div>
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-sm" />
            <span>+91 91813 23 2309</span>
          </div>
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-sm" />
            <span>Somewhere in the World</span>
          </div>
        </div>

        {/* Home Links */}
        <div>
          <h4 className="text-base font-semibold mb-4">Home</h4>
          <ul className="space-y-2 text-sm">
            <li>Benefits</li>
            <li>Our Courses</li>
            <li>Our Testimonials</li>
            <li>Our FAQ</li>
          </ul>
        </div>

        {/* About Us Links */}
        <div>
          <h4 className="text-base font-semibold mb-4">About Us</h4>
          <ul className="space-y-2 text-sm">
            <li>Company</li>
            <li>Achievements</li>
            <li>Our Goals</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-base font-semibold mb-4">Social Profiles</h4>
          <div className="flex gap-3">
            <a
              className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded hover:bg-primary hover:text-white transition"
              href="#"
            >
              <FaFacebookF size={14} />
            </a>
            <a
              className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded hover:bg-primary hover:text-white transition"
              href="#"
            >
              <FaTwitter size={14} />
            </a>
            <a
              className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded hover:bg-primary hover:text-white transition"
              href="#"
            >
              <FaLinkedinIn size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t text-center py-4 text-sm text-gray-500">
        © 2023 shikshabytech. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;

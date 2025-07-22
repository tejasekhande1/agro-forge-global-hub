import { Leaf, ArrowRight, MapPin, Phone, Mail } from "lucide-react";
import { FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';
import { Link } from "react-router-dom";
import mixedFruitsVegetables from "@/assets/mixed-fruits-vegetables.jpg";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Left Side - Mixed Fruits and Vegetables Image */}
          <div className="md:col-span-1">
            <img
              src={mixedFruitsVegetables}
              alt="Mixed Fruits and Vegetables"
              className="rounded-2xl shadow-xl w-full h-48 object-cover"
            />
          </div>

          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                <Leaf className="h-7 w-7 text-white"/>
              </div>
              <span className="font-bold text-lg">ENJO-SAK GLOBAL</span>
            </div>
            <p className="text-gray-300 mb-6 text-base leading-relaxed">
              Bridging India's Agricultural Abundance & Engineering Excellence with the World
            </p>

            {/* Social Media Icons */}
            <div className="flex space-x-4 mb-6">
              <a href="https://www.facebook.com/profile.php?id=61577634555659"
                 className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <FaFacebook className="h-5 w-5 text-white"/>
              </a>
              <a href="https://www.instagram.com/enjosak_global?igsh=MTF4aXQ4YzN1N2Z5bQ%3D%3D&utm_source=qr"
                 className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors">
                <FaInstagram className="h-5 w-5 text-white"/>
              </a>
              <a
                  href="https://wa.me/8605995967"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors"
              >
                <FaWhatsapp className="h-5 w-5 text-white"/>
              </a>
            </div>

            <p className="text-gray-400">
              © 2025 ENJO-SAK GLOBAL PRIVATE LIMITED. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-6 text-lg">Quick Links</h3>
            <ul className="space-y-3">
              {[
                {label: "Home", href: "/"},
                {label: "About", href: "/about"},
                {label: "Products", href: "/products"},
                {label: "Spices", href: "/spices"},
                {label: "Gallery", href: "/gallery"}
              ].map((link) => (
                <li key={link.label}>
                  <Link to={link.href}
                        className="text-gray-300 hover:text-primary transition-colors duration-300 flex items-center space-x-2 group">
                    <ArrowRight
                        className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="font-semibold mb-6 text-lg">Contact Details</h3>
            <div className="space-y-4">
              {/* Company Name */}
              <div>
                <h4 className="font-medium text-white mb-1">ENJO-SAK GLOBAL PRIVATE LIMITED</h4>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0"/>
                <div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Plot No 47 G.NO 140, Swami Samarth Nagar, Chh. Sambhaji Nagar, Maharashtra, India – 431136
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0"/>
                <div className="text-gray-300">
                  <p className="text-sm">+91 9579291495</p>
                  <p className="text-sm">+91 8605995967</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0"/>
                <div className="text-gray-300">
                  <p className="text-sm">export@enjosakglobal.com</p>
                  <p className="text-sm">enjosak33@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
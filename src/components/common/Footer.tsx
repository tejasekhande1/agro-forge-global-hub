import {ArrowRight, Leaf} from "lucide-react";
import {FaFacebook, FaInstagram, FaWhatsapp} from "react-icons/fa";
import {Link} from "react-router-dom";

const Footer = () => {
  return (
      <footer className="bg-gradient-to-r from-gray-900 to-black text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-4 gap-8">
                  <div className="md:col-span-2">
                      <div className="flex items-center space-x-3 mb-6">
                          <div
                              className="w-12 h-12 bg-gradient-to-r from-primary to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                              <Leaf className="h-7 w-7 text-white"/>
                          </div>
                          <span className="font-bold text-2xl">ENJO-SAK GLOBAL PRIVATE LIMITED</span>
                      </div>
                      <p className="text-gray-300 mb-6 text-lg leading-relaxed">
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

                  <div>
                      <h3 className="font-semibold mb-6 text-lg">Quick Links</h3>
                      <ul className="space-y-3">
                          {[
                              {label: "About ENJO-SAK", href: "#about"},
                              {label: "Products", href: "#products"},
                              {label: "Spices", href: "/spices"},
                              {label: "Sustainability", href: "#sustainability"},
                              {label: "Contact", href: "#contact"}
                          ].map((link) => (
                              <li key={link.label}>
                                  {link.href.startsWith('#') ? (
                                      <a href={link.href}
                                         className="text-gray-300 hover:text-primary transition-colors duration-300 flex items-center space-x-2 group">
                                          <ArrowRight
                                              className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                                          <span>{link.label}</span>
                                      </a>
                                  ) : (
                                      <Link to={link.href}
                                            className="text-gray-300 hover:text-primary transition-colors duration-300 flex items-center space-x-2 group">
                                          <ArrowRight
                                              className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                                          <span>{link.label}</span>
                                      </Link>
                                  )}
                              </li>
                          ))}
                      </ul>
                  </div>

                  <div>
                      <h3 className="font-semibold mb-6 text-lg">Legal</h3>
                      <ul className="space-y-3">
                          {["Privacy Policy", "Terms of Service"].map((item) => (
                              <li key={item}>
                                  <a href="#"
                                     className="text-gray-300 hover:text-primary transition-colors duration-300 flex items-center space-x-2 group">
                                      <ArrowRight
                                          className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                                      <span>{item}</span>
                                  </a>
                              </li>
                          ))}
                      </ul>
                  </div>
              </div>
          </div>
      </footer>
  )
}

export default Footer;
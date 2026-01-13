import { Link } from "wouter";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import logoUrl from "@assets/Logo_1755888171075.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src={logoUrl} 
                alt="Tishanyq Digital Logo" 
                className="h-8 w-auto"
              />
              <h3 className="text-2xl font-bold">Tishanyq Digital</h3>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Empowering African businesses and individuals through smart, efficient technology solutions. Based in Zimbabwe, serving all of Africa.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 hover:bg-[hsl(var(--primary-600))] rounded-lg flex items-center justify-center transition-colors duration-200"
                data-testid="social-linkedin"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 hover:bg-[hsl(var(--primary-600))] rounded-lg flex items-center justify-center transition-colors duration-200"
                data-testid="social-facebook"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 hover:bg-[hsl(var(--primary-600))] rounded-lg flex items-center justify-center transition-colors duration-200"
                data-testid="social-instagram"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 hover:bg-[hsl(var(--primary-600))] rounded-lg flex items-center justify-center transition-colors duration-200"
                data-testid="social-twitter"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Process Automation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Cloud Migration
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Digital Consultancy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Training
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 mt-12 text-center">
          <p className="text-gray-400">&copy; 2025 Tishanyq Digital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

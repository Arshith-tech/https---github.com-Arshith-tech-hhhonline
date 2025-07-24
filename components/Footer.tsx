import Link from 'next/link';
import { Heart, Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Mission */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-orange-500" />
              <span className="serif text-2xl font-bold">HHH Online</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Changing lives, one child at a time. Join us in making an impact where it matters most.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-orange-500 cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-orange-500 cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-orange-500 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/our-story/who-we-are" className="text-gray-300 hover:text-orange-500 transition-colors">Who We Are</Link></li>
              <li><Link href="/organizations/list" className="text-gray-300 hover:text-orange-500 transition-colors">Organizations We Support</Link></li>
              <li><Link href="/take-action/getting-involved" className="text-gray-300 hover:text-orange-500 transition-colors">Getting Involved</Link></li>
              <li><Link href="/about/team" className="text-gray-300 hover:text-orange-500 transition-colors">Our Team</Link></li>
            </ul>
          </div>

          {/* Take Action */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Take Action</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/take-action/membership" className="text-gray-300 hover:text-orange-500 transition-colors">Become a Member</Link></li>
              <li><Link href="/take-action/forms" className="text-gray-300 hover:text-orange-500 transition-colors">Volunteer Forms</Link></li>
              <li><Link href="/news-events/upcoming" className="text-gray-300 hover:text-orange-500 transition-colors">Upcoming Events</Link></li>
              <li><a href="https://paypal.me/HHHOnline" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-orange-500 transition-colors">Donate Now</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">123 Helping Hands Ave<br />Community Center, CA 90210</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-orange-500" />
                <span className="text-gray-300">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-orange-500" />
                <span className="text-gray-300">info@hhhonline.org</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2025 HHH Online. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/about/bylaws" className="text-gray-400 hover:text-orange-500 text-sm transition-colors">Privacy Policy</Link>
            <Link href="/about/bylaws" className="text-gray-400 hover:text-orange-500 text-sm transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
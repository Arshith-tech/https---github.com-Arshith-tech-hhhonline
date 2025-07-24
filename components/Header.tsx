'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Menu, X, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navigation = [
    {
      name: 'Our Story',
      items: [
        { name: 'Who We Are', href: '/our-story/who-we-are' },
        { name: 'Projects We Support', href: '/our-story/projects' },
        { name: 'Hear from Our Children & Organizations', href: '/our-story/testimonials' },
        { name: 'Our HHH Member Stories', href: '/our-story/member-stories' },
      ],
    },
    {
      name: 'Organizations We Support',
      items: [
        { name: 'Selection of Organizations', href: '/organizations/selection' },
        { name: 'List of Organizations', href: '/organizations/list' },
      ],
    },
    {
      name: 'Take Action',
      items: [
        { name: 'Getting Involved', href: '/take-action/getting-involved' },
        { name: 'Membership', href: '/take-action/membership' },
        { name: 'Forms', href: '/take-action/forms' },
        { name: 'Corporate Matching', href: '/take-action/corporate-matching' },
      ],
    },
    {
      name: 'About Us',
      items: [
        { name: 'Our Team', href: '/about/team' },
        { name: 'Past Committees', href: '/about/past-committees' },
        { name: 'By-laws & Disbursement Guidelines', href: '/about/bylaws' },
        { name: 'Awards', href: '/about/awards' },
        { name: 'Financial Reports', href: '/about/financial-reports' },
      ],
    },
    {
      name: 'News & Events',
      items: [
        { name: 'Upcoming Events', href: '/news-events/upcoming' },
        { name: 'Past Events', href: '/news-events/past' },
        { name: 'Newsletters', href: '/news-events/newsletters' },
      ],
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo.png"
            alt="HHH Online Logo"
            width={60}
            height={60}
            priority
          />
        </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center space-x-1 text-gray-700 hover:text-orange-500 transition-colors">
                  <span>{item.name}</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                
                {activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border">
                    <div className="py-2">
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition-colors"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            <Link href="/contact">
              <Button variant="ghost" className="text-gray-700 hover:text-orange-500">
                Contact Us
              </Button>
            </Link>
            
            <a 
              href="https://paypal.me/HHHOnline" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button className="donate-gradient text-white hover:shadow-lg transition-all">
                Donate Now
              </Button>
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <div key={item.name}>
                  <button
                    className="flex items-center justify-between w-full px-3 py-2 text-gray-700 hover:bg-gray-50"
                    onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                  >
                    <span>{item.name}</span>
                    <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                  </button>
                  {activeDropdown === item.name && (
                    <div className="pl-4">
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-3 py-2 text-sm text-gray-600 hover:text-orange-500"
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <Link href="/contact" className="block px-3 py-2 text-gray-700 hover:text-orange-500">
                Contact Us
              </Link>
              
              <div className="px-3 py-2">
                <a 
                  href="https://paypal.me/HHHOnline" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button className="w-full donate-gradient text-white">
                    Donate Now
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
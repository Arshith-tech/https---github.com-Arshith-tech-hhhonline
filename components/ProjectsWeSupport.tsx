'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Jost } from 'next/font/google';

const jost = Jost({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

type SizeType = 'medium';

const sizeClasses: Record<SizeType, string> = {
  medium: 'md:col-span-1 md:row-span-1 h-64 md:h-64',
};

interface Section {
  id: string;
  title: string;
  image: string;
  href: string;
  size: SizeType;
  bg?: string;
}

const sections: Section[] = [
  {
    id: 'developmental-disabilities',
    title: 'Developmental Disabilities',
    image: '/dev.jpeg',
    href: '/projects/developmental-disabilities',
    size: 'medium',
    bg: 'from-orange-100 to-orange-200',
  },
  {
    id: 'autism',
    title: 'Autism',
    image: '/autism2.png',
    href: '/projects/autism',
    size: 'medium',
    bg: 'from-rose-100 to-orange-200',
  },
  {
    id: 'polio-cerebral-palsy',
    title: 'Polio/Cerebral Palsy',
    image: '/cp2.jpg',
    href: '/projects/polio-cerebral-palsy',
    size: 'medium',
    bg: 'from-blue-100 to-indigo-100',
  },
  {
    id: 'eye',
    title: 'Eye',
    image: '/vi2.jpg',
    href: '/projects/eye',
    size: 'medium',
    bg: 'from-yellow-100 to-orange-100',
  },
];

export default function ProjectsBentoSameSize() {
  return (
    <section className={`${jost.className} py-20 bg-white`}>
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="sans-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">
          Projects We Support
        </h2>

        {/* Normal info text below heading, simple paragraphs in orange shade */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <p className="sans-serif text-lg md:text-xl text-orange-600 mt-3 leading-relaxed">
            We raise funds throughout the year to support various projects and needs of our differently abled children.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 md:grid-rows-2 gap-6">
          {sections.map(({ id, title, image, href, size, bg }) => (
            <Link
              key={id}
              href={href}
              className={`
                group block rounded-3xl overflow-hidden shadow-lg cursor-pointer relative
                focus:outline-none focus:ring-4 focus:ring-orange-400
                transition-all duration-300 ${sizeClasses[size]} 
                ${bg ? `bg-gradient-to-br ${bg}` : ''}
              `}
              aria-label={`Go to project page for ${title}`}
            >
              <motion.div
                className="relative w-full h-full"
                whileHover={{ scale: 1.07 }}
                whileFocus={{ scale: 1.07 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 400, damping: 24 }}
              >
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover"
                  draggable={false}
                />
                {/* Contrast overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none opacity-80 group-hover:opacity-90 transition-opacity" />
                {/* Title at bottom center */}
                <div
                  className="absolute bottom-6 left-6  bg-white/80 backdrop-blur px-6 py-2 rounded-full shadow-md text-neutral-900 font-semibold text-lg tracking-wide group-hover:bg-orange-400 group-hover:text-white transition-all"
                  style={{ fontFamily: "'Jost', sans-serif" }}
                >
                  {title}
                </div>
                {/* Glowing border on hover */}
                <motion.div
                  className="absolute inset-0 rounded-3xl border-4 border-transparent pointer-events-none"
                  whileHover={{ borderColor: 'rgba(251,146,60,0.8)' }}
                  whileFocus={{ borderColor: 'rgba(251,146,60,0.8)' }}
                  transition={{ duration: 0.3 }}
                  aria-hidden="true"
                />
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

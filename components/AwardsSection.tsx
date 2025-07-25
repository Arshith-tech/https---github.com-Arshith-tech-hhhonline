'use client';

import { motion } from 'framer-motion';

const awards = [
  { imageSrc: "award1.jpg", alt: "Award 1" },
  { imageSrc: "award2.jpg", alt: "Award 2" },
  { imageSrc: "award3.jpg", alt: "Award 3" },
  { imageSrc: "award4.jpg", alt: "Award 4" }
];

const AwardsSection = () => {
  return (
    <section className="py-20 pb-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Awards
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Recognized for outstanding service and compassion in empowering differently-abled children through global partnerships and community support.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {awards.map((award) => (
            <div
              key={award.alt}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center justify-center overflow-hidden p-0"
              style={{ height: '330px' }} // Set height as needed
            >
              <img
                src={award.imageSrc}
                alt={award.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;

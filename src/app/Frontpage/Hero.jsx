import React from "react";
import Image from "next/image";
import {
  DocumentTextIcon,
  DevicePhoneMobileIcon,
  FireIcon,
  MapPinIcon,
  CircleStackIcon,
} from "@heroicons/react/24/outline";

const badges = [
  {
    label: "React Native",
    icon: DevicePhoneMobileIcon,
  },
  {
    label: "Firebase",
    icon: FireIcon,
  },
  {
    label: "Geolocation",
    icon: MapPinIcon,
  },
  {
    label: "Full Stack",
    icon: CircleStackIcon,
  },
];

const Hero = () => {
  return (
    <section className="py-10 sm:py-14 lg:py-20">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 items-center">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <p className="text-sm uppercase tracking-[0.18em] text-gray-400 mb-3">
            Software Engineer • Mobile & Full Stack Developer
          </p>

          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-800 to-gray-700">
              Hello, I&apos;m{" "}
            </span>
            Roope Forstén
          </h1>

          <p className="text-gray-200 text-base sm:text-lg mb-6 lg:text-xl leading-relaxed max-w-2xl">
            I build real-world mobile and full-stack applications using React
            Native, Firebase, and location-based technologies, with a focus on
            usability, real-time features, and practical impact.
          </p>

          <div className="flex flex-wrap justify-center sm:justify-start gap-3 mb-8">
            {badges.map(({ label, icon: Icon }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-200 hover:bg-white/10 transition"
              >
                <Icon className="h-4 w-4" />
                {label}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-full bg-white text-black font-medium text-center hover:opacity-90 transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-full border border-white/20 text-white font-medium text-center hover:bg-white/5 transition"
            >
              Contact Me
            </a>

            <a
              href="/Forsten_cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium text-center hover:bg-white/10 transition"
            >
              <DocumentTextIcon className="h-5 w-5" />
              View CV
            </a>
          </div>

          <p className="text-sm text-gray-400">
            Open to opportunities in mobile and full-stack development.
          </p>
        </div>

        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div
            className="rounded-full bg-[#181818] relative overflow-hidden
            w-[220px] h-[220px] md:w-[260px] md:h-[260px] lg:w-[330px] lg:h-[330px]"
          >
            <Image
              src="/images/roope.png"
              alt="Roope"
              fill
              className="object-contain"
              sizes="(min-width:1024px) 330px, (min-width:768px) 260px, 220px"
              priority
              draggable={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="text-white py-16 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 md:px-8">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 md:p-10">
          {/* Header */}
          <div className="w-full max-w-4xl mx-auto text-center mb-10">
            <p className="text-sm uppercase tracking-[0.18em] text-gray-400 mb-3">
              Contact
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Let&apos;s build something meaningful
            </h2>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-3">
              I am currently looking for opportunities as a Software Developer
              in mobile or full-stack development.
            </p>

            <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
              If you are looking for a developer with hands-on experience in{" "}
              <span className="text-white font-medium">
                React Native, Firebase, and real-world application development
              </span>
              , feel free to get in touch.
            </p>
          </div>

          {/* Contact cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            <a
              href="mailto:roope.forsten@mail.com"
              className="rounded-2xl border border-white/10 bg-black/20 p-5 hover:bg-white/5 transition"
            >
              <p className="text-sm text-gray-400 mb-2">Email</p>
              <p className="text-white font-medium break-all">
                Get in touch via email
              </p>
            </a>

            <a
              href="https://github.com/roopeforsten"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-white/10 bg-black/20 p-5 hover:bg-white/5 transition"
            >
              <p className="text-sm text-gray-400 mb-2">GitHub</p>
              <p className="text-white font-medium">github.com/roopeforsten</p>
            </a>

            <a
              href="/Forsten_cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-white/10 bg-black/20 p-5 hover:bg-white/5 transition"
            >
              <p className="text-sm text-gray-400 mb-2">CV</p>
              <p className="text-white font-medium">View CV</p>
            </a>
          </div> 
        </div>
      </div>
    </section>
  );
};

export default Contact;
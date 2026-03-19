"use client";

import React, {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  useTransition,
} from "react";
import TabButton from "../../components/TabButton"; // muuta tarvittaessa oikeaksi

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-5 sm:pl-6 space-y-3">
        <li>
          React Native (Expo), TypeScript, Firebase (Firestore, Auth, Cloud
          Functions, FCM)
        </li>
        <li>JavaScript, React, Next.js, Tailwind CSS</li>
        <li>REST APIs, real-time data handling, geolocation-based features</li>
        <li>C# / .NET (Blazor, ASP.NET Web API, Entity Framework)</li>
        <li>Java (REST services, Vaadin, Android basics)</li>
        <li>Databases: Firebase, MySQL, SQLite, H2</li>
        <li>Python (basic scripting and data handling)</li>
      </ul>
    ),
  },
  {
    title: "Tools",
    id: "tools",
    content: (
      <ul className="list-disc pl-5 sm:pl-6 space-y-3">
        <li>Git & GitHub (version control, collaboration in team projects)</li>
        <li>
          Visual Studio Code, IntelliJ IDEA, Android Studio, Visual Studio
        </li>
        <li>Postman (API testing and development)</li>
        <li>
          Expo Application Services (EAS) for mobile builds and deployment
        </li>
        <li>Firebase Console (Firestore, Auth, Cloud Messaging)</li>
        <li>Microsoft Azure (Blob Storage, IoT Hub basics)</li>
        <li>MySQL Workbench</li>
        <li>Figma (UI/UX design and prototyping)</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-5 sm:pl-6 space-y-3">
        <li>
          Bachelor of Engineering (B.Eng), Information Technology — Software
          Development (Savonia University of Applied Sciences, 2022–2026)
        </li>
        <li>
          Key studies: mobile and web development, software engineering,
          databases, cloud technologies, and IoT
        </li>
        <li>Licensed Massage Therapist (2019–2020)</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-5 sm:pl-6 space-y-3">
        <li>
          <strong>SafeRoad – Moose Warning App</strong> — Developed a React
          Native (Expo) mobile application using Firebase, featuring real-time
          wildlife reporting, geolocation-based risk zones, and push
          notifications to improve traffic safety (2025–2026)
        </li>
        <li>
          <strong>Aviste Oy</strong> — Software Developer (Internship,
          04/2025–10/2025)
          <ul className="list-disc pl-6 sm:pl-8 space-y-2 mt-2">
            <li>
              Developed mobile applications using React Native and TypeScript
            </li>
            <li>
              Implemented backend functionality with Firebase (Firestore, Auth)
            </li>
            <li>
              Built location-based features and contributed to UI/UX
              improvements
            </li>
            <li>Worked in a team environment using Git version control</li>
          </ul>
        </li>
        <li>
          <strong>Selected Projects:</strong>
          <ul className="list-disc pl-6 sm:pl-8 space-y-2 mt-2">
            <li>
              <em>Lönnrot</em> — Web application built with Next.js and Tailwind
              CSS
            </li>
            <li>
              IoT dashboard — Raspberry Pi + Flask + Azure IoT Hub integration
            </li>
            <li>
              Vaadin application — Java app with entity management, filtering,
              and security configuration
            </li>
          </ul>
        </li>
        <li>
          <strong>Vekomi Oy / Pumpulipoiju</strong> — Licensed Massage Therapist
          (2020–2022)
        </li>
      </ul>
    ),
  },
];

const cards = [
  {
    title: "Mobile-first Development",
    text: "Building real-world mobile applications with React Native, Expo, TypeScript, and Firebase, with a strong focus on usability and practical user needs.",
  },
  {
    title: "Location-Based Solutions",
    text: "Developing features that combine geolocation, real-time data, push notifications, and map-based functionality to solve real-world problems.",
  },
];

const techTags = [
  "React Native",
  "Expo",
  "TypeScript",
  "Firebase",
  "Firestore",
  "Geolocation",
  "Real-Time Data",
  "Push Notifications",
];

const AboutMe = () => {
  const [tab, setTab] = useState("skills");
  const [, startTransition] = useTransition();

  const [minH, setMinH] = useState(0);
  const measureRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const contentBoxRef = useRef<HTMLDivElement | null>(null);

  const handleTabChange = (next: string) => {
    startTransition(() => setTab(next));
  };

  useLayoutEffect(() => {
    const recalc = () => {
      let max = 0;
      Object.values(measureRefs.current).forEach((el) => {
        if (el) max = Math.max(max, el.offsetHeight);
      });
      setMinH(max + 16);
    };

    recalc();
  }, []);

  useEffect(() => {
    const observer = new ResizeObserver(() => {
      let max = 0;
      Object.values(measureRefs.current).forEach((el) => {
        if (el) max = Math.max(max, el.offsetHeight);
      });
      setMinH(max + 16);
    });

    Object.values(measureRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    if (contentBoxRef.current) {
      observer.observe(contentBoxRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const activeContent = TAB_DATA.find((d) => d.id === tab)?.content;

  return (
    <section className="text-white py-16 sm:py-20" id="about">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 md:px-8">
        {/* Intro */}
        <div className="w-full mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>

          <p className="text-gray-300 leading-relaxed mb-4 text-base md:text-lg">
            I am a recently graduated Software Engineer (B.Eng, Information
            Technology) from Savonia University of Applied Sciences, with a
            strong focus on mobile and full-stack development.
          </p>

          <p className="text-gray-300 leading-relaxed mb-4 text-base md:text-lg">
            I have hands-on experience developing real-world applications using
            React Native, TypeScript, and Firebase. My work includes
            implementing location-based features, real-time data handling, and
            user-focused UI/UX solutions.
          </p>

          <p className="text-gray-400 leading-relaxed text-base md:text-lg">
            My main project, SafeRoad – Moose Warning App, focuses on improving
            traffic safety through geolocation-based risk zones, push
            notifications, and community-driven wildlife reporting. I am
            particularly interested in building systems that combine real-time
            data, location awareness, and practical impact, while working across
            both frontend and backend technologies.
          </p>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left side: cards + featured */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
              {cards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition"
                >
                  <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {card.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
              <p className="text-xs uppercase tracking-[0.18em] text-gray-400 mb-2">
                Featured Project
              </p>

              <h3 className="text-xl sm:text-2xl font-semibold mb-3">
                SafeRoad – Moose Warning App
              </h3>

              <p className="text-gray-300 mb-4 leading-relaxed">
                A mobile application designed to improve traffic safety using
                real-time wildlife reporting, geolocation-based risk zones, and
                push notifications.
              </p>

              <div className="flex flex-wrap gap-2">
                {techTags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full border border-white/10 bg-black/20 text-gray-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right side: tabs + tab content */}
          <div>
            <div
              className="flex flex-wrap gap-4 mb-6"
              role="tablist"
              aria-label="About tabs"
            >
              <TabButton
                selectTab={() => handleTabChange("skills")}
                active={tab === "skills"}
              >
                Skills
              </TabButton>

              <TabButton
                selectTab={() => handleTabChange("tools")}
                active={tab === "tools"}
              >
                Tools
              </TabButton>

              <TabButton
                selectTab={() => handleTabChange("education")}
                active={tab === "education"}
              >
                Education
              </TabButton>

              <TabButton
                selectTab={() => handleTabChange("experience")}
                active={tab === "experience"}
              >
                Experience
              </TabButton>
            </div>

            <div
              ref={contentBoxRef}
              className="max-w-xl"
              style={{ minHeight: minH }}
            >
              {activeContent}
            </div>
          </div>
        </div>

        {/* Hidden measurement elements */}
        <div className="hidden" aria-hidden>
          {TAB_DATA.map((d) => (
            <div
              key={d.id}
              ref={(el) => {
                measureRefs.current[d.id] = el;
              }}
            >
              {d.content}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

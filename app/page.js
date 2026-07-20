"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";
import { Briefcase, GraduationCap, CalendarDays } from "lucide-react";

import { usePathname } from "next/navigation";

export default function Page() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return <>{showSplash ? <SplashScreen /> : <MainPage />}</>;
}

/* SPLASH SCREEN */
function SplashScreen() {
  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <img src="/images/logo1.png" alt="Logo" className="w-24 animate-pulse" />
    </div>
  );
}

/* MAIN PAGE */
function MainPage() {
  const [darkMode, setDarkMode] = useState(true);
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const [active, setActive] = useState("frontend");

  const pathname = usePathname();
  const isActive = pathname === "/";
  {
    /* clickable navbar*/
  }
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  {
    /*contact us*/
  }
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState(false);

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setSuccess(false);

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setSuccess(true);

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        alert(data.message || "Failed to send message");
      }
    } catch (error) {
      console.error("FRONTEND ERROR:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  {
    /*my skills*/
  }

  const frontendSkills = [
    {
      title: "Adobe Premiere Pro",
      level: "Expert",
      darkLogo: "/images/premiere-pro (1).png",
      lightLogo: "/images/premiere-pro.png",
    },
    {
      title: "CapCut Pro",
      level: "Expert",
      darkLogo: "/images/capcut-1.png",
      lightLogo: "/images/capcut.png",
    },
    {
      title: "Canva",
      level: "Expert",
      darkLogo: "/images/canva.png",
      lightLogo: "/images/canva-1.png",
    },
    {
      title: "Video Editing",
      level: "Expert",
      darkLogo: "/images/video1.png",
      lightLogo: "/images/video.png",
    },
    {
      title: "Color Grading",
      level: "Expert",
      darkLogo: "/images/color1.png",
      lightLogo: "/images/color.png",
    },
    {
      title: "Sound Design",
      level: "Expert",
      darkLogo: "/images/sound1.png",
      lightLogo: "/images/sound.png",
    },
    {
      title: "Motion Graphics",
      level: "Expert",
      darkLogo: "/images/motion1.png",
      lightLogo: "/images/motion.png",
    },
    {
      title: "Dynamic Captions",
      level: "Expert",
      darkLogo: "/images/subtitles1.png",
      lightLogo: "/images/subtitles.png",
    },
    {
      title: "Social Media Content",
      level: "Expert",
      darkLogo: "/images/social-media1.png",
      lightLogo: "/images/social-media.png",
    },
    {
      title: "YouTube Studio",
      level: "Expert",
      darkLogo: "/images/youtube1.png",
      lightLogo: "/images/youtube.png",
    },
    {
      title: "ChatGPT",
      level: "Expert",
      darkLogo: "/images/chatgpt1.png",
      lightLogo: "/images/chatgpt.png",
    },
    {
      title: "ElevenLabs",
      level: "Expert",
      darkLogo: "/images/eleven1.png",
      lightLogo: "/images/eleven.png",
    },
  ];
  const professionalSkills = [
    { name: "Adobe Premiere Pro", percentage: 95 },
    { name: "CapCut Pro", percentage: 95 },
    { name: "UGC Video Editing", percentage: 95 },
    { name: "Short-Form Video Editing", percentage: 95 },
    { name: "Long-Form Video Editing", percentage: 90 },
    { name: "Color Grading", percentage: 90 },
    { name: "Sound Design", percentage: 90 },
    { name: "Motion Graphics & Captions", percentage: 92 },
    { name: "Social Media Content", percentage: 95 },
    { name: "Canva", percentage: 99 },
     { name: "Talking Head", percentage: 99 },
      { name: "AI Video Editing", percentage: 60 },
  ];

  {
    /*forntend proejcts*/
  }
  const [activeProjectTab, setActiveProjectTab] = useState("frontend");

  const frontendProjects = [
    {
    title: "UGC Project 1",
    image: "/images/video-bg.jpg",
    videoUrl: "https://drive.google.com/drive/folders/1lvqLH3q-IYqbtVNg9GyYxovojZMl5ac7?usp=drive_link", // Paste your link here
  },
  {
    title: "UGC Project 2",
    image: "/images/video-bg.jpg",
    videoUrl: "https://drive.google.com/drive/folders/1orlyS-TjF1OCPrK_79OJaWKek0Ng2wgj?usp=drive_link", // Paste your link here
  },
   {
    title: "UGC Project 3",
    image: "/images/video-bg.jpg",
    videoUrl: "https://drive.google.com/drive/folders/1tkR6BQfZddaGWfsPm8rj6HCVrgQJfxB9?usp=drive_link", // Paste your link here
  },
   {
    title: "UGC Project 4",
    image: "/images/video-bg.jpg",
    videoUrl: "https://drive.google.com/drive/folders/1qskUvkzVK9UaUUJsnIraMCyOW0PMH0I9?usp=drive_link", // Paste your link here
  },
  ];

 const businessProjects = [
  {
    title: "Talking Head Video 1",
    image: "/images/video-bg.jpg",
    videoUrl: "https://drive.google.com/file/d/1n6IavVfUKBTRek1sV8XLdCS0fR8Q9gOD/view?usp=drive_link", // Paste your link here
  },
  {
    title: "Talking Head Video 2",
    image: "/images/video-bg.jpg",
    videoUrl: "https://drive.google.com/file/d/1p_cCygSNehC3hBWgnYnVW0yckMowPn8a/view?usp=drive_link", // Paste your link here
  },
   {
    title: "Talking Head Video 3",
    image: "/images/video-bg.jpg",
    videoUrl: "https://drive.google.com/file/d/1KGkFkBj4OY5bbJNS5g-JSICKwJUIHZLq/view?usp=drive_link", // Paste your link here
  },
  {
    title: "Talking Head Video 4",
    image: "/images/video-bg.jpg",
    videoUrl: "https://drive.google.com/file/d/12CyP-q5c_qFCo1onHgcHLFRo97XVXb0k/view?usp=drive_link", // Paste your link here
  },
  {
    title: "Talking Head Video 5",
    image: "/images/video-bg.jpg",
    videoUrl: "https://drive.google.com/file/d/1pPQhAZxsOJC07errb9_jdEEWJwoZiryt/view?usp=drive_link", // Paste your link here
  },
  {
    title: "Talking Head Video 6",
    image: "/images/video-bg.jpg",
    videoUrl: "https://drive.google.com/file/d/154D_qjYvGZyr3T50s2GPSKmpRoGtBf39/view?usp=drive_link", // Paste your link here
  },
  {
    title: "Talking Head Video 7",
    image: "/images/video-bg.jpg",
    videoUrl: "https://drive.google.com/file/d/1PUMJxFl2Rxu3vY_L2BOJNMrZEeEvNx72/view?usp=drive_link", // Paste your link here
  },
  {
    title: "Talking Head Video 8",
    image: "/images/video-bg.jpg",
    videoUrl: "https://drive.google.com/file/d/1YodLnMDieGCx-DTQu0LmyerAIS7RUvuc/view?usp=drive_link", // Paste your link here
  },
];

  const experienceData = [
    {
      year: "June 2024 – Present",
      title: "Freelance UGC & Social Media Video Editor",
      company: "Self-Employed (Remote)",
    },
  ];

  const educationData = [
    {
      year: "Sep 2021 – May 2025",
      title: "Bachelor of Science in Computer Science (BSCS)",
      company: "University of Agriculture Faisalabad",
    },
  ];
  {
    /*  navbar activation */
  }
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "-80px 0px -80px 0px",
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);
  return (
    <>
      <div
        className="min-h-screen bg-cover bg-center transition-all duration-500"
        style={{
          backgroundImage: darkMode
            ? "url('/images/bg-dark.png')"
            : "url('/images/bg-light.png')",
        }}
      >
        {/* Overlay */}
        <div
          className={`min-h-screen ${darkMode ? "bg-black/40 text-white" : "text-black"}`}
        >
          {/*navbar */}
          <>
            <nav
              className="flex items-center  justify-between
    px-4 sm:px-6 md:px-16
    py-3 md:py-2
    bg-blue/40 backdrop-blur-md shadow-sm
    fixed top-0 left-0 w-full z-50"
            >
              {/* Left: Logo */}
              <Link href="#home">
                <>
                  <img
                    src="/images/logo1.png"
                    alt="Logo Light"
                    className="h-12 w-auto block dark:hidden"
                  />
                  <img
                    src="/images/logo1.png"
                    alt="Logo Dark"
                    className="h-12 w-auto hidden dark:block"
                  />
                </>
              </Link>

              <div className="flex-1"></div>

              {/* Right side */}
              <div className="flex items-center gap-6 font-bold">
                {/* Toggle */}
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="text-xl"
                >
                  {darkMode ? "☀️" : "🌙"}
                </button>

                {/* Mobile Menu Button */}
                <button
                  className="md:hidden text-2xl"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  {menuOpen ? "✖" : "☰"}
                </button>

                {/* Desktop Nav */}
                <ul className="hidden  md:flex text-sm gap-8 ">
                  <li
                    onClick={() => scrollToSection("home")}
                    className={`cursor-pointer transition-all duration-300 ${
                      activeSection === "home"
                        ? "text-purple-800  font-semibold drop-shadow-[0_0_8px_rgba(168,85,247,0.8)] scale-110"
                        : "hover:text-purple-800 dark:hover:text-purple-800"
                    }`}
                  >
                    Home
                  </li>

                  <li
                    onClick={() => scrollToSection("about")}
                    className={`cursor-pointer transition-colors ${
                      activeSection === "about"
                        ? "text-purple-800  font-semibold drop-shadow-[0_0_8px_rgba(168,85,247,0.8)] scale-110"
                        : "hover:text-purple-800 dark:hover:text-purple-800"
                    }`}
                  >
                    About
                  </li>
                  <li
                    onClick={() => scrollToSection("skills")}
                    className={`cursor-pointer transition-colors ${
                      activeSection === "skills"
                        ? "text-purple-800  font-semibold drop-shadow-[0_0_8px_rgba(168,85,247,0.8)] scale-110"
                        : "hover:text-purple-800 dark:hover:text-purple-800"
                    }`}
                  >
                    Skills
                  </li>
                  <li
                    onClick={() => scrollToSection("projects")}
                    className={`cursor-pointer transition-colors ${
                      activeSection === "projects"
                        ? "text-purple-800  font-semibold drop-shadow-[0_0_8px_rgba(168,85,247,0.8)] scale-110"
                        : "hover:text-purple-800 dark:hover:text-purple-800"
                    }`}
                  >
                    Projects
                  </li>

                  <li
                    onClick={() => scrollToSection("experience")}
                    className={`cursor-pointer transition-colors ${
                      activeSection === "experience"
                        ? "text-purple-800  font-semibold drop-shadow-[0_0_8px_rgba(168,85,247,0.8)] scale-110"
                        : "hover:text-purple-800 dark:hover:text-purple-800"
                    }`}
                  >
                    Experience
                  </li>
                </ul>

                {/* Button */}
                <button
                  onClick={() => scrollToSection("contact")}
                  className="hidden md:block bg-purple-600 px-4 py-2 rounded-full text-sm hover:bg-purple-700 text-white shadow-[0_0_15px_rgba(168,85,247,0.7)] animate-pulse hover:shadow-[0_0_25px_rgba(168,85,247,1)] transition-all duration-300"
                >
                  Contact Me
                </button>
              </div>
            </nav>

            {/* Mobile Menu */}
            {menuOpen && (
              <div
                className={`md:hidden fixed inset-0 z-50 flex flex-col ${
                  darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
                }`}
              >
                <div className="flex items-center justify-between px-6 py-4">
                  <div
                    onClick={() => {
                      setMenuOpen(false);

                      setTimeout(() => {
                        const section = document.getElementById("/#home");

                        if (section) {
                          section.scrollIntoView({
                            behavior: "smooth",
                          });
                        }
                      }, 100);
                    }}
                    className="cursor-pointer"
                  >
                    <img
                      src="/images/logo1.png"
                      alt="Logo Dark"
                      className="h-12 w-auto hidden dark:block"
                    />
                  </div>

                  <div className="flex items-center gap-4 z-20">
                    <button
                      onClick={() => setDarkMode(!darkMode)}
                      className="text-xl cursor-pointer"
                    >
                      {darkMode ? "☀️" : "🌙"}
                    </button>

                    <button
                      className="text-2xl cursor-pointer"
                      onClick={() => setMenuOpen(false)}
                    >
                      ✖
                    </button>
                  </div>
                </div>

                <ul className="flex flex-col flex-1 justify-center items-center gap-6 text-lg font-bold text-center -mt-50">
                  <li
                    className="cursor-pointer"
                    onClick={() => {
                      scrollToSection("home");
                      setMenuOpen(false);
                    }}
                  >
                    Home
                  </li>

                  <li
                    className="cursor-pointer"
                    onClick={() => {
                      scrollToSection("about");
                      setMenuOpen(false);
                    }}
                  >
                    About
                  </li>

                  <li
                    className="cursor-pointer"
                    onClick={() => {
                      scrollToSection("skills");
                      setMenuOpen(false);
                    }}
                  >
                    Skills
                  </li>

                  <li
                    className="cursor-pointer"
                    onClick={() => {
                      scrollToSection("projects");
                      setMenuOpen(false);
                    }}
                  >
                    Projects
                  </li>

                  <li
                    className="cursor-pointer"
                    onClick={() => {
                      scrollToSection("experience");
                      setMenuOpen(false);
                    }}
                  >
                    Experience
                  </li>

                  {/* Contact Button (Fixed for mobile) */}
                  <li
                    className="cursor-pointer"
                    onClick={() => {
                      scrollToSection("contact");
                      setMenuOpen(false);
                    }}
                  >
                    <span className="bg-purple-600 px-4 py-2 rounded-full text-sm text-white shadow-[0_0_15px_rgba(168,85,247,0.7)] animate-pulse hover:bg-purple-700 hover:shadow-[0_0_25px_rgba(168,85,247,1)] transition-all duration-300">
                      Contact Me
                    </span>
                  </li>
                </ul>
              </div>
            )}
          </>
          {/* HERO */}

          <section
            id="home"
            className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-10 md:py-20"
          >
            {" "}
            {/* LEFT SIDE */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: false }}
              className="max-w-xl space-y-5"
            >
              <h6 className="text-lg text-purple-600 pt-18 font-bold">
                I am Abdul Rehman
              </h6>

              <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                <span
                  className={`bg-linear-to-r ${
                    darkMode
                      ? "from-white to-purple-400"
                      : "from-gray-900 to-purple-800"
                  } bg-clip-text text-transparent`}
                >
                  <TypeAnimation
                    sequence={[
                      "UGC & Talking Head Video Editor",
                      2000,
                      "Social Media Video Editor",
                      2000,
                      "Content Creator",
                      2000,
                      "Adobe Premiere Pro Expert",
                      2000,
                    ]}
                    speed={50}
                    repeat={Infinity}
                  />
                </span>
              </h1>

              <p
                className={`text-sm md:text-base leading-relaxed whitespace-break-spaces text-justify ${
                  darkMode ? "text-white" : "text-black"
                }`}
              >
             I'm a passionate UGC & Social Media Video Editor specializing in Talking Head Videos, UGC Ads, TikTok, Instagram Reels, Facebook Ads, YouTube Shorts, and YouTube videos. I transform raw footage into engaging, high-converting content using Adobe Premiere Pro and CapCut Pro, with expertise in dynamic captions, cinematic editing, color grading, sound design, and AI-assisted workflows. My focus is on creating scroll-stopping videos that maximize audience retention, strengthen brand identity, and help businesses grow through compelling visual storytelling.

              </p>

              {/* BUTTON + ICON ROW */}
              <div className="flex items-center gap-6 flex-wrap">
                {/* GET IN TOUCH */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative overflow-hidden border border-purple-500 px-4 md:px-5 py-2 rounded-full flex items-center gap-2 group"
                >
                  <span
                    className={`relative z-10 flex items-center gap-2 ${
                      darkMode ? "text-white" : "text-black"
                    }`}
                  >
                    Get In Touch
                    <img
                      src="/images/right-arrow.png"
                      alt="arrow"
                      className={`w-5 h-5 md:w-6 md:h-6 animate-pulse ${
                        darkMode ? "invert-0" : "invert"
                      }`}
                    />
                  </span>

                  <span className="absolute inset-0 bg-purple-700 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
                </motion.button>

                {/* SOCIAL ICONS */}
                <div className="flex gap-3 items-center">
                  <a
                    href="https://www.linkedin.com/in/abdul-rehman-tariq1/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/images/linkedin.png"
                      className="w-7 h-7 md:w-9 md:h-9 hover:scale-110 transition rounded-full ring-1 ring-purple-500 dark:ring-gray-400"
                    />
                  </a>

                  <a
                    href="https://wa.me/923029068657"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/images/whatsapp.png"
                      className="w-7 h-7 md:w-9 md:h-9 hover:scale-110 transition rounded-full ring-1 ring-purple-500 dark:ring-gray-400"
                    />
                  </a>
                </div>
              </div>

              {/* DOWNLOAD CV */}
              <div className="relative inline-block mt-0">
                <a
                  href="/documents/ABDUL REHMAN TARIQ1.pdf"
                  download
                  className="relative overflow-hidden border border-purple-500  px-7 py-2 rounded-full flex items-center gap-2 group"
                >
                  <span className="absolute inset-0 bg-purple-700 w-0 group-hover:w-full transition-all duration-300 ease-in-out"></span>

                  <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                    Download CV
                  </span>
                </a>
              </div>
            </motion.div>
            {/* RIGHT SIDE IMAGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: false }}
              className="relative mt-10 md:mt-0 flex justify-center md:mr-20"
            >
              <div className="absolute -inset-1 rounded-2xl bg-linear-to-r from-blue-500 via-blue-900 to-purple-900 blur-lg opacity-70"></div>

              <img
                src="images/profile1.png"
                alt="profile"
                className="relative w-56 md:w-72 lg:w-80 rounded-2xl shadow-lg"
              />
            </motion.div>
          </section>
        </div>
      </div>
      {/*About Me*/}

      <section
        id="about"
        className="w-full px-4 md:px-16 py-16 md:py-24
                 bg-cover bg-top bg-no-repeat"
        style={{
          backgroundImage: darkMode
            ? "url('/images/about-bg.png')"
            : "url('/images/about-bg1.png')",
        }}
      >
        <motion.div
          className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
        >
          {/* LEFT IMAGE CARD */}
          <motion.div
            className="relative flex justify-center"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: false }}
          >
            <div
              className="relative p-0.5 rounded-xl 
            bg-linear-to-r from-purple-500 via-cyan-400 to-purple-900 
            bg-size-[200%_200%] animate-[gradientMove_4s_ease_infinite]
            shadow-[0_0_25px_rgba(0,255,255,0.6)]"
            >
              <div className="rounded-xl overflow-hidden bg-black">
                <Image
                  src="/images/profile1.png"
                  alt="Profile"
                  width={400}
                  height={500}
                  className="object-cover w-full h-auto"
                />
              </div>
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.9,
              ease: [0.25, 0.1, 0.25, 1],
              delay: 0.2,
            }}
            viewport={{ once: false }}
          >
            {/* Top Label */}
            <span className="text-xs font-semibold tracking-widest text-white-300 uppercase bg-purple-900/30 px-3 py-1 rounded">
              About Me
            </span>

            <h1
              className={`text-3xl md:text-3xl pt-6 font-bold leading-snug ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              I AM AVAILABLE FOR{" "}
              <span className="text-purple-500">UGC VIDEO </span>
              <br />
              EDITING & CREATING{" "}
              <span className="text-purple-500">HIGH-IMPACT </span>VIDEOS
            </h1>

            <p
              className={`mt-4 text-sm md:text-base max-w-md text-justify ${
                darkMode ? "text-gray-300" : "text-black"
              }`}
            >
          I'm a creative UGC & Social Media Video Editor specializing in Talking Head Videos, UGC Ads, TikTok, Instagram Reels, Facebook Ads, YouTube Shorts, YouTube videos and Basic AI Video Editing. Using Adobe Premiere Pro and CapCut Pro, I transform raw footage into professional, visually compelling content that helps brands grow their online presence and connect with their audience.
            </p>

            <p
              className={`mt-3 text-sm md:text-base max-w-md text-justify ${
                darkMode ? "text-gray-300" : "text-black"
              }`}
            >
           From dynamic captions, smooth transitions, color grading, cinematic B-roll, and professional sound design to AI-assisted editing and pacing optimization, I focus on every detail to create scroll-stopping videos that boost engagement, improve audience retention, and deliver measurable marketing results. Every project is crafted with creativity, precision, and a commitment to quality.
            </p>

            {/* BUTTON */}
            <button
              onClick={() => router.push("/hire")}
              className="mt-6 px-6 py-2 bg-purple-600 text-white text-sm rounded-full animate-pulse shadow-lg shadow-blue-500/50"
            >
              HIRE ME
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* skills*/}
      <section
        id="skills"
        className="w-full px-4 md:px-16 py-16 md:py-24
                 bg-cover bg-top bg-no-repeat"
        style={{
          backgroundImage: darkMode
            ? "url('/images/skills-bg.png')"
            : "url('/images/skills-bg1.png')",
        }}
      >
        {/* Content */}
        <div className="relative max-w-7xl mx-auto z-10">
          {/* HEADER */}
          <div className="text-center mb-16">
            <p
              className={`uppercase tracking-[4px] text-lg font-semibold mb-4 ${
                darkMode ? "text-pink-400" : "text-pink-600"
              }`}
            >
              My Expertise
            </p>

            <h1
              className={`text-4xl md:text-6xl font-extrabold mb-6 ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              My Skills
            </h1>

            <p
              className={`max-w-2xl mx-auto text-sm md:text-base leading-7 ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              I specialize in creating engaging, high-quality video content for
              social media and digital marketing. From editing and storytelling
              to color grading and sound design, I use industry-standard tools
              to deliver videos that capture attention and drive results.
            </p>
          </div>

          {/* FRONTEND SKILLS */}
          {/* FRONTEND SKILLS */}
          <h2
            className={`text-3xl font-bold mb-6 flex items-center gap-3 ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            <span className="w-2 h-8 rounded-full bg-linear-to-b from-purple-500 to-pink-500"></span>
            Technologies & Creative Skills
          </h2>

          <div className="overflow-visible mb-16 py-8">
            <div className="marquee flex gap-6 items-center">
              {[...frontendSkills, ...frontendSkills].map((skill, i) => (
                <div
                  key={i}
                  className={`w-45 h-55 shrink-0 rounded-2xl p-5 text-center flex flex-col items-center justify-center relative z-10 transition-all duration-300 ease-in-out hover:scale-110 hover:z-50 cursor-pointer ${
                    darkMode
                      ? "bg-[#12052b] text-white border border-purple-900 hover:border-purple-500 hover:shadow-[0_0_35px_rgba(168,85,247,0.7)]"
                      : "bg-purple-300 backdrop-blur-md text-black border border-purple-200 hover:bg-purple-50 hover:border-purple-400 hover:shadow-[0_10px_30px_rgba(168,85,247,0.25)]"
                  }`}
                >
                  <img
                    src={darkMode ? skill.darkLogo : skill.lightLogo}
                    alt={skill.title}
                    className="w-14 h-14 mx-auto mb-4 object-contain"
                  />

                  <h3
                    className={`text-sm font-semibold mb-2 min-h-10 flex items-center justify-center ${
                      darkMode ? "text-white" : "text-black"
                    }`}
                  >
                    {skill.title}
                  </h3>

                  <p
                    className={`text-xs ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {skill.level}
                  </p>
                </div>
              ))}
            </div>
            {/* PROFESSIONAL SKILLS */}
            <div className="mt-20">
              <h2
                className={`text-3xl font-bold mb-10 flex items-center gap-3 ${
                  darkMode ? "text-white" : "text-black"
                }`}
              >
                <span className="w-2 h-8 rounded-full bg-gradient-to-b from-purple-500 to-pink-500"></span>
                Professional Skills
              </h2>

              <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
                {professionalSkills.map((skill, index) => (
                  <div key={index}>
                    {/* Skill Name + Percentage */}
                    <div className="flex justify-between mb-2">
                      <span
                        className={`font-semibold ${
                          darkMode ? "text-white" : "text-black"
                        }`}
                      >
                        {skill.name}
                      </span>

                      <span
                        className={`font-bold ${
                          darkMode ? "text-pink-400" : "text-pink-600"
                        }`}
                      >
                        {skill.percentage}%
                      </span>
                    </div>

                    {/* Background Line */}
                    <div
                      className={`w-full h-3 rounded-full overflow-hidden ${
                        darkMode ? "bg-gray-700" : "bg-gray-300"
                      }`}
                    >
                      {/* Animated Progress */}
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percentage}%` }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{
                          duration: 1.3,
                          ease: "easeOut",
                          delay: index * 0.08,
                        }}
                        className="h-full rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*projects*/}

      {/* PROJECTS */}

      <section
        id="projects"
        className="w-full px-4 md:px-16 py-16 md:py-24
             bg-cover bg-top bg-no-repeat
             scroll-mt-24"
        style={{
          backgroundImage: darkMode
            ? "url('/images/projects-bg.png')"
            : "url('/images/projects-bg1.png')",
        }}
      >
        <div className="flex flex-col items-center text-center">
          <h1
            className={`text-4xl md:text-5xl font-bold mb-6 ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            My Recent Works
          </h1>

          {/* BUTTONS */}
          <div className="flex items-center gap-4 mb-14">
            <button
              onClick={() => setActiveProjectTab("frontend")}
              className={`px-13  py-2 rounded-full text-sm md:text-base font-medium
  border transition-all duration-300 relative overflow-hidden
  hover:scale-110 hover:z-10
  ${
    activeProjectTab === "frontend"
      ? "bg-purple-600 border-purple-400 shadow-lg shadow-purple-500/40 shadow-[0_0_20px_rgba(168,85,247,0.9)]"
      : "bg-[#141414] border-purple-500 shadow-[0_0_12px_rgba(168,85,247,0.6)]"
  }`}
            >
             UGC
            </button>
          <button
  onClick={() => setActiveProjectTab("business")}
  className={`px-6 py-2 rounded-full text-sm md:text-base font-medium
  border transition-all duration-300 relative overflow-hidden
  hover:scale-110 hover:z-10
  ${
    activeProjectTab === "business"
      ? "bg-purple-600 border-purple-400 shadow-lg shadow-pink-500/40 shadow-[0_0_20px_rgba(236,72,153,0.9)]"
      : "bg-[#141414] border-purple-500 shadow-[0_0_12px_rgba(236,72,153,0.6)]"
  }`}
>
  Talking Head
</button>
</div>
</div>

{/* PROJECT GRID */}
<div className="relative max-w-6xl w-full">
  <div className="absolute inset-0 bg-purple-700/20 blur-3xl"></div>

  <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
    {(activeProjectTab === "frontend"
      ? frontendProjects
      : businessProjects
    ).map((project, index) => (
      <a
        key={index}
        href={project.videoUrl} /* This links to your video URL */
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-[#0f0f0f] rounded-xl overflow-hidden border border-purple-900/30 hover:scale-[1.02] transition duration-300 group cursor-pointer"
      >
        {/* IMAGE CONTAINER */}
        <div className="overflow-hidden h-65 bg-black relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
          />
          {/* Hover overlay indicator */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="text-white font-medium bg-purple-600/90 px-4 py-2 rounded-full text-sm tracking-wide shadow-md">
              Watch Video ↗
            </span>
          </div>
        </div>

        {/* TITLE */}
        <div className="p-4">
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors duration-300">
            {project.title}
          </h3>
        </div>
      </a>
    ))}
  </div>


        </div>
      </section>

      {/* experience*/}
      <section
        id="experience"
        className="w-full py-16 px-4 sm:px-6 lg:px-12
             bg-cover bg-top bg-no-repeat relative"
        style={{
          backgroundImage: darkMode
            ? "url('/images/experience-bg.png')"
            : "url('/images/skills-bg1.png')",
        }}
      >
        {/* Overlay */}

        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="text-purple-500 w-7 h-7" />

              {/* TEXT COLOR */}
              <h2
                className={`text-3xl font-bold ${
                  darkMode ? "text-white" : "text-black"
                }`}
              >
                My Experience
              </h2>
            </div>

            <div className="space-y-5">
              {experienceData.map((item, index) => (
                <div
                  key={index}
                  className={`
              min-h-42.5
              flex flex-col justify-center
              rounded-2xl p-5
              border transition-all duration-300
              hover:scale-[1.02]
              shadow-lg
              ${
                darkMode
                  ? "bg-[#14081f] border-purple-900/40 hover:border-purple-500"
                  : "bg-white/80 border-gray-300 hover:border-purple-400"
              }
            `}
                >
                  <div className="flex items-center gap-2 text-purple-400 text-sm mb-2">
                    <CalendarDays size={16} />
                    <span>{item.year}</span>
                  </div>

                  <h3
                    className={`text-lg font-semibold ${
                      darkMode ? "text-white" : "text-black"
                    }`}
                  >
                    {item.title}
                  </h3>

                  <p
                    className={`text-sm mt-1 ${
                      darkMode ? "text-gray-400" : "text-gray-700"
                    }`}
                  >
                    {item.company}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
          >
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="text-purple-500 w-7 h-7" />

              {/* TEXT COLOR */}
              <h2
                className={`text-3xl font-bold ${
                  darkMode ? "text-white" : "text-black"
                }`}
              >
                My Education
              </h2>
            </div>

            <div className="space-y-5">
              {educationData.map((item, index) => (
                <div
                  key={index}
                  className={`
              min-h-[170px]
              flex flex-col justify-center
              rounded-2xl p-5
              border transition-all duration-300
              hover:scale-[1.02]
              shadow-lg
              ${
                darkMode
                  ? "bg-[#14081f] border-purple-900/40 hover:border-purple-500"
                  : "bg-white/80 border-gray-300 hover:border-purple-400"
              }
            `}
                >
                  <div className="flex items-center gap-2 text-purple-400 text-sm mb-2">
                    <CalendarDays size={16} />
                    <span>{item.year}</span>
                  </div>

                  <h3
                    className={`text-lg font-semibold ${
                      darkMode ? "text-white" : "text-black"
                    }`}
                  >
                    {item.title}
                  </h3>

                  <p
                    className={`text-sm mt-1 ${
                      darkMode ? "text-gray-400" : "text-gray-700"
                    }`}
                  >
                    {item.company}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/*contact us*/}

      <section
        id="contact"
        className={`relative w-full py-20 px-6 md:px-16 overflow-hidden transition-all duration-500 bg-cover bg-center bg-no-repeat ${
          darkMode ? "bg-black text-white" : "bg-white text-black"
        }`}
        style={{
          backgroundImage: darkMode
            ? "url('/images/about-bg.png')"
            : "url('/images/about-bg1.png')",
        }}
      >
        {/* Background Glow */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-500/20 blur-[120px] rounded-full -z-0 animate-pulse"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center relative z-10">
          {/* LEFT SIDE */}
          <div
            className={`group rounded-3xl p-8 md:p-10 border transition-all duration-500 hover:scale-[1.02]
      ${
        darkMode
          ? "bg-gradient-to-br from-purple-900/50 to-black border-purple-700/40 hover:border-purple-400"
          : "bg-white border-purple-300 hover:border-purple-500 shadow-[0_0_30px_rgba(168,85,247,0.2)]"
      }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Let’s work together!
            </h2>

            <p
              className={`mb-8 transition-colors duration-300 ${
                darkMode ? "text-gray-400" : "text-gray-700"
              }`}
            >
              Send me a message and let’s build something amazing.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name + Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full rounded-xl px-4 py-3 outline-none transition-all duration-300
            hover:shadow-[0_0_15px_rgba(168,85,247,0.4)]
            focus:shadow-[0_0_20px_rgba(168,85,247,0.6)]
            ${
              darkMode
                ? "bg-black/40 border border-purple-700/40 text-white placeholder:text-gray-500 focus:border-purple-400"
                : "bg-gray-100 border border-purple-200 text-black placeholder:text-gray-500 focus:border-purple-500"
            }`}
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full rounded-xl px-4 py-3 outline-none transition-all duration-300
            hover:shadow-[0_0_15px_rgba(168,85,247,0.4)]
            focus:shadow-[0_0_20px_rgba(168,85,247,0.6)]
            ${
              darkMode
                ? "bg-black/40 border border-purple-700/40 text-white placeholder:text-gray-500 focus:border-purple-400"
                : "bg-gray-100 border border-purple-200 text-black placeholder:text-gray-500 focus:border-purple-500"
            }`}
                />
              </div>

              {/* Subject */}
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className={`w-full rounded-xl px-4 py-3 outline-none transition-all duration-300
          hover:shadow-[0_0_15px_rgba(168,85,247,0.4)]
          focus:shadow-[0_0_20px_rgba(168,85,247,0.6)]
          ${
            darkMode
              ? "bg-black/40 border border-purple-700/40 text-white placeholder:text-gray-500 focus:border-purple-400"
              : "bg-gray-100 border border-purple-200 text-black placeholder:text-gray-500 focus:border-purple-500"
          }`}
              />

              {/* Message */}
              <textarea
                rows="5"
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
                className={`w-full rounded-xl px-4 py-3 outline-none resize-none transition-all duration-300
          hover:shadow-[0_0_15px_rgba(168,85,247,0.4)]
          focus:shadow-[0_0_20px_rgba(168,85,247,0.6)]
          ${
            darkMode
              ? "bg-black/40 border border-purple-700/40 text-white placeholder:text-gray-500 focus:border-purple-400"
              : "bg-gray-100 border border-purple-200 text-black placeholder:text-gray-500 focus:border-purple-500"
          }`}
              />

              {/* Button */}
              <button
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 hover:shadow-[0_0_25px_rgba(168,85,247,0.7)]
          transition-all duration-300 px-8 py-3 rounded-full font-semibold"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {success && (
                <p className="text-green-400">Message sent successfully!</p>
              )}
            </form>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-8">
            {/* Phone */}
            {/* Phone */}
            <div
              className={`flex items-start gap-5 p-5 rounded-2xl transition-all duration-300 hover:scale-105
  ${darkMode ? "hover:bg-purple-900/20" : "hover:bg-purple-100"}`}
            >
              <div className="bg-purple-700/20 p-4 rounded-full transition-all duration-300 hover:rotate-12 hover:scale-110">
                <Phone className="text-purple-400" />
              </div>

              <div>
                <h3 className="font-semibold">Phone</h3>

                <a
                  href="https://wa.me/923101657409"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transition-all duration-300 hover:text-purple-500 hover:underline ${
                    darkMode ? "text-gray-400" : "text-gray-700"
                  }`}
                >
                  +92 3029068657
                </a>
              </div>
            </div>

            {/* Email */}
            <div
              className={`flex items-start gap-5 p-5 rounded-2xl transition-all duration-300 hover:scale-105
  ${darkMode ? "hover:bg-purple-900/20" : "hover:bg-purple-100"}`}
            >
              <div className="bg-purple-700/20 p-4 rounded-full transition-all duration-300 hover:rotate-12 hover:scale-110">
                <Mail className="text-purple-400" />
              </div>

              <div>
                <h3 className="font-semibold">Email</h3>

                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=asmasaleem65654@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transition-all duration-300 hover:text-purple-500 hover:underline ${
                    darkMode ? "text-gray-400" : "text-gray-700"
                  }`}
                >
                  abdulrehmantariq117@gmail.com
                </a>
              </div>
            </div>

            {/* LinkedIn */}
            <div
              className={`flex items-start gap-5 p-5 rounded-2xl transition-all duration-300 hover:scale-105 cursor-pointer
        ${darkMode ? "hover:bg-purple-900/20" : "hover:bg-purple-100"}`}
            >
              <div className="bg-purple-700/20 p-4 rounded-full transition-all duration-300 hover:rotate-12 hover:scale-110">
                <FaLinkedinIn className="text-purple-400 text-xl" />
              </div>

              <div>
                <h3 className="font-semibold">LinkedIn</h3>

                <a
                  href="https://www.linkedin.com/in/abdul-rehman-tariq1/"
                  target="_blank"
                  className={`transition-all duration-300 hover:text-purple-500 ${
                    darkMode ? "text-gray-400" : "text-gray-700"
                  }`}
                >
                  linkedin.com/in/Abdul Rehman
                </a>
              </div>
            </div>

            {/* Address */}
            <div
              className={`flex items-start gap-5 p-5 rounded-2xl transition-all duration-300 hover:scale-105 cursor-pointer
        ${darkMode ? "hover:bg-purple-900/20" : "hover:bg-purple-100"}`}
            >
              <div className="bg-purple-700/20 p-4 rounded-full transition-all duration-300 hover:rotate-12 hover:scale-110">
                <MapPin className="text-purple-400" />
              </div>

              <div>
                <h3 className="font-semibold">Address</h3>
                <p className={darkMode ? "text-gray-400" : "text-gray-700"}>
                  Lahore,Pakistan
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*last page*/}

      <section
        className={`relative w-full h-[180px] overflow-hidden transition-all duration-500 bg-cover bg-center bg-no-repeat ${
          darkMode ? "bg-[#090016] text-white" : "bg-white text-black"
        }`}
        style={{
          backgroundImage: darkMode
            ? "url('/images/skills-bg.png')"
            : "url('/images/experience-bg1.png')",
        }}
      >
        {/* Purple Glow */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className={`w-[500px] h-[220px] rounded-full blur-[120px] ${
              darkMode ? "bg-purple-500/20" : "bg-purple-400/20"
            }`}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          {/* Logo */}
          <div className="relative w-[55px] h-[55px] sm:w-[65px] sm:h-[65px]">
            <Link href="#home">
              <Image
                src="/images/logo1.png"
                alt="Logo"
                fill
                priority
                className="object-contain"
              />
            </Link>
          </div>

          {/* Navbar Links */}
          <div className="mt-4 flex items-center gap-3 sm:gap-5 md:gap-6">
            <Link
              href="#home"
              className={`text-[8px] sm:text-[10px] md:text-xs uppercase tracking-[0.25em] transition ${
                darkMode
                  ? "text-white/80 hover:text-purple-400"
                  : "text-gray-700 hover:text-purple-600"
              }`}
            >
              Home
            </Link>

            <Link
              href="#about"
              className={`text-[8px] sm:text-[10px] md:text-xs uppercase tracking-[0.25em] transition ${
                darkMode
                  ? "text-white/80 hover:text-purple-400"
                  : "text-gray-700 hover:text-purple-600"
              }`}
            >
              About
            </Link>

            <Link
              href="#skills"
              className={`text-[8px] sm:text-[10px] md:text-xs uppercase tracking-[0.25em] transition ${
                darkMode
                  ? "text-white/80 hover:text-purple-400"
                  : "text-gray-700 hover:text-purple-600"
              }`}
            >
              Skills
            </Link>

            <Link
              href="#projects"
              className={`text-[8px] sm:text-[10px] md:text-xs uppercase tracking-[0.25em] transition ${
                darkMode
                  ? "text-white/80 hover:text-purple-400"
                  : "text-gray-700 hover:text-purple-600"
              }`}
            >
              Projects
            </Link>

            <Link
              href="#experience"
              className={`text-[8px] sm:text-[10px] md:text-xs uppercase tracking-[0.25em] transition ${
                darkMode
                  ? "text-white/80 hover:text-purple-400"
                  : "text-gray-700 hover:text-purple-600"
              }`}
            >
              Experience
            </Link>
          </div>

          {/* Bottom Text */}
          <p
            className={`mt-3 text-[7px] sm:text-[9px] uppercase tracking-[0.35em] ${
              darkMode ? "text-purple-400" : "text-purple-700"
            }`}
          >
            Powered By Abdul Rehman
          </p>
        </div>

        {/* Bottom Glow Border */}
        <div
          className={`absolute bottom-0 left-0 w-full h-[1px] ${
            darkMode
              ? "bg-gradient-to-r from-transparent via-purple-500/40 to-transparent"
              : "bg-gradient-to-r from-transparent via-purple-400/40 to-transparent"
          }`}
        />
      </section>
    </>
  );
}

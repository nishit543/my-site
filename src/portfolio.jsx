// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

import React, { useState, useEffect } from "react";

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [activeFilter, setActiveFilter] = useState("all");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Handle filter change
  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const target = event.target;
      if (
        isMenuOpen &&
        !target.closest(".mobile-menu") &&
        !target.closest(".hamburger")
      ) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  // Scroll to section
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ease-in-out ${darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"}`}
    >
      {/* Header */}
      <header
        className={`fixed w-full z-50 transition-all duration-300 ease-in-out ${darkMode ? "bg-gray-900/95" : "bg-white/95"}`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-indigo-600 flex items-center">
              {/* <span className="mr-2">NPPPP</span>
              <i className="fas fa-video text-indigo-500"></i> */}
              <img src="logo.png" alt="Logo" className="w-10 h-10 mr-2" />
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <nav>
                <ul className="flex space-x-8">
                  <li>
                    <button
                      onClick={() => scrollToSection("home")}
                      className={`cursor-pointer transition-all duration-300 hover:text-indigo-600 ${darkMode ? "text-gray-100" : "text-gray-900"}`}
                    >
                      Home
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("portfolio")}
                      className={`cursor-pointer transition-all duration-300 hover:text-indigo-600 ${darkMode ? "text-gray-100" : "text-gray-900"}`}
                    >
                      Portfolio
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("skills")}
                      className={`cursor-pointer transition-all duration-300 hover:text-indigo-600 ${darkMode ? "text-gray-100" : "text-gray-900"}`}
                    >
                      Skills
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("process")}
                      className={`cursor-pointer transition-all duration-300 hover:text-indigo-600 ${darkMode ? "text-gray-100" : "text-gray-900"}`}
                    >
                      Process
                    </button>
                  </li>
                </ul>
              </nav>
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer !rounded-button whitespace-nowrap"
              >
                {darkMode ? (
                  <i className="fas fa-sun text-amber-400"></i>
                ) : (
                  <i className="fas fa-moon text-indigo-600"></i>
                )}
              </button>
            </div>
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleDarkMode}
                className="p-2 mr-4 rounded-full transition-all duration-300 hover:bg-gray-800/10 cursor-pointer !rounded-button whitespace-nowrap"
              >
                {darkMode ? (
                  <i className="fas fa-sun text-yellow-300"></i>
                ) : (
                  <i className="fas fa-moon text-indigo-600"></i>
                )}
              </button>
              <button
                onClick={toggleMenu}
                className="hamburger p-2 cursor-pointer !rounded-button whitespace-nowrap"
              >
                <div
                  className={`w-6 h-0.5 mb-1.5 transition-all duration-300 ${darkMode ? "bg-white" : "bg-gray-800"} ${isMenuOpen ? "transform rotate-45 translate-y-2" : ""}`}
                ></div>
                <div
                  className={`w-6 h-0.5 mb-1.5 transition-all duration-300 ${darkMode ? "bg-white" : "bg-gray-800"} ${isMenuOpen ? "opacity-0" : "opacity-100"}`}
                ></div>
                <div
                  className={`w-6 h-0.5 transition-all duration-300 ${darkMode ? "bg-white" : "bg-gray-800"} ${isMenuOpen ? "transform -rotate-45 -translate-y-2" : ""}`}
                ></div>
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        <div
          className={`mobile-menu md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? "max-h-64" : "max-h-0"}`}
        >
          <div
            className={`px-6 py-4 ${darkMode ? "bg-gray-800" : "bg-gray-100"}`}
          >
            <ul className="space-y-4">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className={`block w-full text-left py-2 cursor-pointer transition-all duration-300 hover:text-indigo-500 ${darkMode ? "text-white" : "text-gray-800"}`}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("portfolio")}
                  className={`block w-full text-left py-2 cursor-pointer transition-all duration-300 hover:text-indigo-500 ${darkMode ? "text-white" : "text-gray-800"}`}
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("skills")}
                  className={`block w-full text-left py-2 cursor-pointer transition-all duration-300 hover:text-indigo-500 ${darkMode ? "text-white" : "text-gray-800"}`}
                >
                  Skills
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("process")}
                  className={`block w-full text-left py-2 cursor-pointer transition-all duration-300 hover:text-indigo-500 ${darkMode ? "text-white" : "text-gray-800"}`}
                >
                  Process
                </button>
              </li>
            </ul>
          </div>
        </div>
      </header>
      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-600 to-blue-700 dark:from-gray-900 dark:to-gray-800"
      >
        <div className="container mx-auto px-6 z-10 mt-20">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 mb-12 md:mb-0 animate-fadeIn">
              <h2 className="text-xl md:text-2xl font-medium mb-4 text-indigo-200">
                Hello, I'm
              </h2>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                Nishit Pattani
              </h1>
              <div className="h-1 bg-indigo-400 mb-6" style={{ width: "50%" }}></div>
              <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-white">
                Editor & Content Creator
              </h3>
              <p className="text-lg md:text-xl mb-8 text-indigo-100 max-w-lg">
                Transforming ideas into captivating visual stories through
                expert editing and creative design.
              </p>
              <div className="flex space-x-4">
                <button
                  onClick={() => scrollToSection("portfolio")}
                  className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-full transition-all duration-300 cursor-pointer !rounded-button whitespace-nowrap"
                >
                  View My Work
                </button>
                <button
                  onClick={() => scrollToSection("skills")}
                  className={`px-8 py-3 border-2 border-indigo-400 font-semibold rounded-full transition-all duration-300 hover:bg-indigo-500/10 cursor-pointer !rounded-button whitespace-nowrap text-white`}
                >
                  My Skills
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center animate-float">
              <img
                src="/Nishit.jpg"
                style={{ borderRadius: '200px' }}
                alt="NP - Editor & Content Creator"
                className="w-full max-w-md rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-500"
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection("portfolio")}
            className="p-2 rounded-full bg-indigo-500/20 hover:bg-indigo-500/40 transition-all duration-300 cursor-pointer !rounded-button whitespace-nowrap"
          >
            <i className="fas fa-chevron-down text-white"></i>
          </button>
        </div>
      </section>
      {/* Portfolio Section */}
      <section
        id="portfolio"
        className={`py-20 ${darkMode ? "bg-gray-800" : "bg-gray-100"}`}
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
              My Portfolio
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-indigo-500 to-blue-500 mx-auto mb-6"></div>
            <p className="text-lg max-w-2xl mx-auto text-gray-300 dark:text-gray-300">
              Explore my creative works across various media formats and styles.
            </p>
          </div>
          <div className="flex flex-wrap justify-center mb-12">
            <button
              onClick={() => handleFilterChange("all")}
              className={`px-6 py-2 m-2 rounded-full transition-all duration-300 cursor-pointer !rounded-button whitespace-nowrap ${activeFilter === "all" ? "bg-indigo-600 text-white" : darkMode ? "bg-gray-700 text-white hover:bg-gray-600" : "bg-gray-200 text-gray-800 hover:bg-gray-300"}`}
            >
              All Projects
            </button>
            <button
              onClick={() => handleFilterChange("video")}
              className={`px-6 py-2 m-2 rounded-full transition-all duration-300 cursor-pointer !rounded-button whitespace-nowrap ${activeFilter === "video" ? "bg-indigo-600 text-white" : darkMode ? "bg-gray-700 text-white hover:bg-gray-600" : "bg-gray-200 text-gray-800 hover:bg-gray-300"}`}
            >
              Video Editing
            </button>
            <button
              onClick={() => handleFilterChange("motion")}
              className={`px-6 py-2 m-2 rounded-full transition-all duration-300 cursor-pointer !rounded-button whitespace-nowrap ${activeFilter === "motion" ? "bg-indigo-600 text-white" : darkMode ? "bg-gray-700 text-white hover:bg-gray-600" : "bg-gray-200 text-gray-800 hover:bg-gray-300"}`}
            >
              Motion Graphics
            </button>
            <button
              onClick={() => handleFilterChange("graphic")}
              className={`px-6 py-2 m-2 rounded-full transition-all duration-300 cursor-pointer !rounded-button whitespace-nowrap ${activeFilter === "graphic" ? "bg-indigo-600 text-white" : darkMode ? "bg-gray-700 text-white hover:bg-gray-600" : "bg-gray-200 text-gray-800 hover:bg-gray-300"}`}
            >
              Graphic Design
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div
              className={`group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 ${activeFilter === "all" || activeFilter === "video" ? "block" : "hidden"}`}
            >
              <img
                src="https://readdy.ai/api/search-image?query=Professional%20video%20editing%20timeline%20with%20multiple%20tracks%20showing%20a%20cinematic%20film%20project%20with%20color%20grading%20panels%20visible%2C%20dark%20studio%20environment%20with%20blue%20and%20indigo%20accent%20lighting%2C%20modern%20editing%20software%20interface&width=600&height=400&seq=3&orientation=landscape"
                alt="Cinematic Film Edit"
                className="w-full h-64 object-cover object-top transition-all duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  Cinematic Film Edit
                </h3>
                <p className="text-sm text-gray-300 mb-4">
                  Professional color grading and cinematic transitions for a
                  short film project.
                </p>
                <div className="flex space-x-2">
                  <span className="px-3 py-1 bg-indigo-600/80 text-xs rounded-full text-white">
                    Premiere Pro
                  </span>
                  <span className="px-3 py-1 bg-blue-500/80 text-xs rounded-full text-white">
                    DaVinci Resolve
                  </span>
                </div>
              </div>
            </div>
            {/* Project 2 */}
            <div
              className={`group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 ${activeFilter === "all" || activeFilter === "motion" ? "block" : "hidden"}`}
            >
              <img
                src="https://readdy.ai/api/search-image?query=Motion%20graphics%20animation%20project%20showing%203D%20text%20and%20abstract%20elements%20with%20particle%20effects%20in%20After%20Effects%20timeline%2C%20vibrant%20blue%20and%20indigo%20color%20scheme%2C%20dark%20studio%20environment%20with%20modern%20interface%20panels&width=600&height=400&seq=4&orientation=landscape"
                alt="3D Motion Graphics"
                className="w-full h-64 object-cover object-top transition-all duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  3D Motion Graphics
                </h3>
                <p className="text-sm text-gray-300 mb-4">
                  Dynamic 3D text animations with particle effects for a brand
                  introduction.
                </p>
                <div className="flex space-x-2">
                  <span className="px-3 py-1 bg-indigo-600/80 text-xs rounded-full text-white">
                    After Effects
                  </span>
                  <span className="px-3 py-1 bg-blue-500/80 text-xs rounded-full text-white">
                    Element 3D
                  </span>
                </div>
              </div>
            </div>
            {/* Project 3 */}
            <div
              className={`group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 ${activeFilter === "all" || activeFilter === "graphic" ? "block" : "hidden"}`}
            >
              <img
                src="https://readdy.ai/api/search-image?query=Graphic%20design%20project%20in%20Adobe%20Photoshop%20showing%20a%20modern%20brand%20identity%20with%20logo%20design%2C%20color%20palette%20samples%2C%20and%20typography%20elements%2C%20dark%20studio%20environment%20with%20blue%20and%20indigo%20accent%20lighting&width=600&height=400&seq=5&orientation=landscape"
                alt="Brand Identity Design"
                className="w-full h-64 object-cover object-top transition-all duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  Brand Identity Design
                </h3>
                <p className="text-sm text-gray-300 mb-4">
                  Complete brand identity package including logo, color palette,
                  and typography guidelines.
                </p>
                <div className="flex space-x-2">
                  <span className="px-3 py-1 bg-indigo-600/80 text-xs rounded-full text-white">
                    Photoshop
                  </span>
                  <span className="px-3 py-1 bg-blue-500/80 text-xs rounded-full text-white">
                    Illustrator
                  </span>
                </div>
              </div>
            </div>
            {/* Project 4 */}
            <div
              className={`group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 ${activeFilter === "all" || activeFilter === "video" ? "block" : "hidden"}`}
            >
              <img
                src="https://readdy.ai/api/search-image?query=Mobile%20video%20editing%20on%20CapCut%20with%20social%20media%20content%20being%20edited%2C%20showing%20transitions%20and%20effects%2C%20dark%20studio%20environment%20with%20blue%20and%20indigo%20accent%20lighting%2C%20modern%20mobile%20editing%20interface&width=600&height=400&seq=6&orientation=landscape"
                alt="Social Media Content"
                className="w-full h-64 object-cover object-top transition-all duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  Social Media Content
                </h3>
                <p className="text-sm text-gray-300 mb-4">
                  Fast-paced, engaging social media video content optimized for
                  multiple platforms.
                </p>
                <div className="flex space-x-2">
                  <span className="px-3 py-1 bg-indigo-600/80 text-xs rounded-full text-white">
                    CapCut
                  </span>
                  <span className="px-3 py-1 bg-blue-500/80 text-xs rounded-full text-white">
                    Premiere Pro
                  </span>
                </div>
              </div>
            </div>
            {/* Project 5 */}
            <div
              className={`group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 ${activeFilter === "all" || activeFilter === "motion" ? "block" : "hidden"}`}
            >
              <img
                src="https://readdy.ai/api/search-image?query=Mobile%20motion%20graphics%20being%20created%20in%20Alight%20Motion%20app%2C%20showing%20keyframes%20and%20effects%20for%20a%20dynamic%20animation%2C%20dark%20studio%20environment%20with%20blue%20and%20indigo%20accent%20lighting%2C%20modern%20mobile%20interface&width=600&height=400&seq=7&orientation=landscape"
                alt="Mobile Motion Graphics"
                className="w-full h-64 object-cover object-top transition-all duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  Mobile Motion Graphics
                </h3>
                <p className="text-sm text-gray-300 mb-4">
                  On-the-go motion graphics created entirely on mobile for quick
                  social media content.
                </p>
                <div className="flex space-x-2">
                  <span className="px-3 py-1 bg-indigo-600/80 text-xs rounded-full text-white">
                    Alight Motion
                  </span>
                  <span className="px-3 py-1 bg-blue-500/80 text-xs rounded-full text-white">
                    CapCut
                  </span>
                </div>
              </div>
            </div>
            {/* Project 6 */}
            <div
              className={`group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 ${activeFilter === "all" || activeFilter === "graphic" ? "block" : "hidden"}`}
            >
              <img
                src="https://readdy.ai/api/search-image?query=Digital%20illustration%20being%20created%20in%20Adobe%20Illustrator%20showing%20a%20modern%20abstract%20design%20with%20geometric%20elements%2C%20dark%20studio%20environment%20with%20blue%20and%20indigo%20accent%20lighting%2C%20professional%20design%20workspace&width=600&height=400&seq=8&orientation=landscape"
                alt="Digital Illustration"
                className="w-full h-64 object-cover object-top transition-all duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  Digital Illustration
                </h3>
                <p className="text-sm text-gray-300 mb-4">
                  Custom vector illustrations for a marketing campaign with a
                  cohesive visual style.
                </p>
                <div className="flex space-x-2">
                  <span className="px-3 py-1 bg-indigo-600/80 text-xs rounded-full text-white">
                    Illustrator
                  </span>
                  <span className="px-3 py-1 bg-blue-500/80 text-xs rounded-full text-white">
                    Photoshop
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Skills Section */}
      <section
        id="skills"
        className={`py-20 ${darkMode ? "bg-gray-900" : "bg-white"}`}
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
              My Skillset
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-indigo-500 to-blue-500 mx-auto mb-6"></div>
            <p className="text-lg max-w-2xl mx-auto text-gray-300 dark:text-gray-300">
              Professional tools I use to bring creative visions to life.
            </p>
          </div>

          {/* Software Skills */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center text-indigo-500">
              Software Proficiency
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {/* Adobe Premiere Pro */}
              <div
                className={`p-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${darkMode ? "bg-gray-800 hover:shadow-indigo-500/20" : "bg-gray-100 hover:shadow-indigo-500/20"}`}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 mr-4 rounded-lg bg-gradient-to-r from-indigo-500 to-blue-500 flex items-center justify-center">
                    <i className="fas fa-film text-xl text-white"></i>
                  </div>
                  <h4
                    className={`text-lg font-bold ${darkMode ? "text-white" : "text-gray-800"}`}
                  >
                    Adobe Premiere Pro
                  </h4>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span
                      className={`font-medium ${darkMode ? "text-gray-300" : "text-gray-600"}`}
                    >
                      Proficiency
                    </span>
                    <span className="text-indigo-500">95%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full"
                      style={{ width: "95%" }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* DaVinci Resolve */}
              <div
                className={`p-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${darkMode ? "bg-gray-800 hover:shadow-indigo-500/20" : "bg-gray-100 hover:shadow-indigo-500/20"}`}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 mr-4 rounded-lg bg-gradient-to-r from-indigo-500 to-blue-500 flex items-center justify-center">
                    <i className="fas fa-palette text-xl text-white"></i>
                  </div>
                  <h4
                    className={`text-lg font-bold ${darkMode ? "text-white" : "text-gray-800"}`}
                  >
                    DaVinci Resolve
                  </h4>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span
                      className={`font-medium ${darkMode ? "text-gray-300" : "text-gray-600"}`}
                    >
                      Proficiency
                    </span>
                    <span className="text-indigo-500">85%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Adobe After Effects */}
              <div
                className={`p-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${darkMode ? "bg-gray-800 hover:shadow-indigo-500/20" : "bg-gray-100 hover:shadow-indigo-500/20"}`}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 mr-4 rounded-lg bg-gradient-to-r from-indigo-500 to-blue-500 flex items-center justify-center">
                    <i className="fas fa-magic text-xl text-white"></i>
                  </div>
                  <h4
                    className={`text-lg font-bold ${darkMode ? "text-white" : "text-gray-800"}`}
                  >
                    Adobe After Effects
                  </h4>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span
                      className={`font-medium ${darkMode ? "text-gray-300" : "text-gray-600"}`}
                    >
                      Proficiency
                    </span>
                    <span className="text-indigo-500">90%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Adobe Photoshop */}
              <div
                className={`p-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${darkMode ? "bg-gray-800 hover:shadow-indigo-500/20" : "bg-gray-100 hover:shadow-indigo-500/20"}`}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 mr-4 rounded-lg bg-gradient-to-r from-indigo-500 to-blue-500 flex items-center justify-center">
                    <i className="fas fa-image text-xl text-white"></i>
                  </div>
                  <h4
                    className={`text-lg font-bold ${darkMode ? "text-white" : "text-gray-800"}`}
                  >
                    Adobe Photoshop
                  </h4>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className={`font-medium ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                      Proficiency
                    </span>
                    <span className="text-indigo-500">70%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full"
                      style={{ width: "70%" }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Adobe Illustrator */}
              <div
                className={`p-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${darkMode ? "bg-gray-800 hover:shadow-indigo-500/20" : "bg-gray-100 hover:shadow-indigo-500/20"}`}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 mr-4 rounded-lg bg-gradient-to-r from-indigo-500 to-blue-500 flex items-center justify-center">
                    <i className="fas fa-pen-nib text-xl text-white"></i>
                  </div>
                  <h4
                    className={`text-lg font-bold ${darkMode ? "text-white" : "text-gray-800"}`}
                  >
                    Adobe Illustrator
                  </h4>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span
                      className={`font-medium ${darkMode ? "text-gray-300" : "text-gray-600"}`}
                    >
                      Proficiency
                    </span>
                    <span className="text-indigo-500">60%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full"
                      style={{ width: "60%" }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* CapCut */}
              <div
                className={`p-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${darkMode ? "bg-gray-800 hover:shadow-indigo-500/20" : "bg-gray-100 hover:shadow-indigo-500/20"}`}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 mr-4 rounded-lg bg-gradient-to-r from-indigo-500 to-blue-500 flex items-center justify-center">
                    <i className="fas fa-cut text-xl text-white"></i>
                  </div>
                  <h4
                    className={`text-lg font-bold ${darkMode ? "text-white" : "text-gray-800"}`}
                  >
                    CapCut
                  </h4>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span
                      className={`font-medium ${darkMode ? "text-gray-300" : "text-gray-600"}`}
                    >
                      Proficiency
                    </span>
                    <span className="text-indigo-500">95%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full"
                      style={{ width: "95%" }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Alight Motion */}
              <div
                className={`p-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${darkMode ? "bg-gray-800 hover:shadow-indigo-500/20" : "bg-gray-100 hover:shadow-indigo-500/20"}`}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 mr-4 rounded-lg bg-gradient-to-r from-indigo-500 to-blue-500 flex items-center justify-center">
                    <i className="fas fa-mobile-alt text-xl text-white"></i>
                  </div>
                  <h4
                    className={`text-lg font-bold ${darkMode ? "text-white" : "text-gray-800"}`}
                  >
                    Alight Motion
                  </h4>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span
                      className={`font-medium ${darkMode ? "text-gray-300" : "text-gray-600"}`}
                    >
                      Proficiency
                    </span>
                    <span className="text-indigo-500">80%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Video Editing */}
            <div
              className={`p-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${darkMode ? "bg-gray-800 hover:shadow-indigo-500/20" : "bg-gray-100 hover:shadow-indigo-500/20"}`}
            >
              <div className="text-center mb-6">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 flex items-center justify-center">
                  <i className="fas fa-film text-3xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold mb-2 text-indigo-500">
                  Video Editing
                </h3>
              </div>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span
                      className={`font-medium ${darkMode ? "text-white" : "text-gray-800"}`}
                    >
                      Adobe Premiere Pro
                    </span>
                    <span className="text-indigo-500">95%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full"
                      style={{ width: "95%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span
                      className={`font-medium ${darkMode ? "text-white" : "text-gray-800"}`}
                    >
                      DaVinci Resolve
                    </span>
                    <span className="text-indigo-500">85%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span
                      className={`font-medium ${darkMode ? "text-white" : "text-gray-800"}`}
                    >
                      CapCut
                    </span>
                    <span className="text-indigo-500">90%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            {/* Motion Graphics */}
            <div
              className={`p-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${darkMode ? "bg-gray-800 hover:shadow-indigo-500/20" : "bg-gray-100 hover:shadow-indigo-500/20"}`}
            >
              <div className="text-center mb-6">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 flex items-center justify-center">
                  <i className="fas fa-magic text-3xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold mb-2 text-indigo-500">
                  Motion Graphics
                </h3>
              </div>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span
                      className={`font-medium ${darkMode ? "text-white" : "text-gray-800"}`}
                    >
                      Adobe After Effects
                    </span>
                    <span className="text-indigo-500">90%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span
                      className={`font-medium ${darkMode ? "text-white" : "text-gray-800"}`}
                    >
                      Alight Motion
                    </span>
                    <span className="text-indigo-500">80%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span
                      className={`font-medium ${darkMode ? "text-white" : "text-gray-800"}`}
                    >
                      Element 3D
                    </span>
                    <span className="text-indigo-500">75%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            {/* Graphic Design */}
            <div
              className={`p-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${darkMode ? "bg-gray-800 hover:shadow-indigo-500/20" : "bg-gray-100 hover:shadow-indigo-500/20"}`}
            >
              <div className="text-center mb-6">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 flex items-center justify-center">
                  <i className="fas fa-paint-brush text-3xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold mb-2 text-indigo-500">
                  Graphic Design
                </h3>
              </div>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span
                      className={`font-medium ${darkMode ? "text-white" : "text-gray-800"}`}
                    >
                      Adobe Photoshop
                    </span>
                    <span className="text-indigo-500">85%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span
                      className={`font-medium ${darkMode ? "text-white" : "text-gray-800"}`}
                    >
                      Adobe Illustrator
                    </span>
                    <span className="text-indigo-500">80%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span
                      className={`font-medium ${darkMode ? "text-white" : "text-gray-800"}`}
                    >
                      Typography
                    </span>
                    <span className="text-indigo-500">75%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            {/* Quick Editing */}
            <div
              className={`p-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${darkMode ? "bg-gray-800 hover:shadow-indigo-500/20" : "bg-gray-100 hover:shadow-indigo-500/20"}`}
            >
              <div className="text-center mb-6">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 flex items-center justify-center">
                  <i className="fas fa-bolt text-3xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold mb-2 text-indigo-500">
                  Quick Editing
                </h3>
              </div>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span
                      className={`font-medium ${darkMode ? "text-white" : "text-gray-800"}`}
                    >
                      CapCut
                    </span>
                    <span className="text-indigo-500">95%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full"
                      style={{ width: "95%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span
                      className={`font-medium ${darkMode ? "text-white" : "text-gray-800"}`}
                    >
                      Social Media Formats
                    </span>
                    <span className="text-indigo-500">90%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span
                      className={`font-medium ${darkMode ? "text-white" : "text-gray-800"}`}
                    >
                      Mobile Workflow
                    </span>
                    <span className="text-indigo-500">85%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Work Process Section */}
      <section
        id="process"
        className={`py-20 ${darkMode ? "bg-gray-800" : "bg-gray-100"}`}
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
              My Work Process
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-indigo-500 to-blue-500 mx-auto mb-6"></div>
            <p className="text-lg max-w-2xl mx-auto text-gray-300 dark:text-gray-300">
              How I transform concepts into captivating visual content.
            </p>
          </div>
          <div className="relative">
            {/* Process Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-indigo-500 to-blue-500"></div>
            {/* Process Steps */}
            <div className="space-y-12 md:space-y-0">
              {/* Step 1 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                  <div className="mb-4">
                    <span
                      className={`inline-block text-4xl font-bold bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent`}
                    >
                      01
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-indigo-500">
                    Concept & Planning
                  </h3>
                  <p className="text-gray-300 dark:text-gray-300">
                    Understanding project requirements, target audience, and
                    desired outcomes. Creating a detailed plan for execution.
                  </p>
                </div>
                <div className="md:w-1/2 md:pl-12 relative">
                  <div className="hidden md:block absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 shadow-lg shadow-indigo-500/50"></div>
                  <div
                    className={`p-6 rounded-lg shadow-lg ${darkMode ? "bg-gray-700" : "bg-white"}`}
                  >
                    <div className="flex items-center justify-center h-20 w-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-indigo-500/20 to-blue-500/20">
                      <i className="fas fa-lightbulb text-3xl text-indigo-500"></i>
                    </div>
                    <p className="text-center text-gray-300 dark:text-gray-300">
                      Brainstorming ideas and creating mood boards to establish
                      the visual direction.
                    </p>
                  </div>
                </div>
              </div>
              {/* Step 2 */}
              <div className="flex flex-col md:flex-row-reverse items-center">
                <div className="md:w-1/2 md:pl-12 md:text-left mb-6 md:mb-0">
                  <div className="mb-4">
                    <span
                      className={`inline-block text-4xl font-bold bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent`}
                    >
                      02
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-indigo-500">
                    Asset Creation
                  </h3>
                  <p className="text-gray-300 dark:text-gray-300">
                    Gathering and creating all necessary visual elements, from
                    footage to graphics and animations.
                  </p>
                </div>
                <div className="md:w-1/2 md:pr-12 relative">
                  <div className="hidden md:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 shadow-lg shadow-indigo-500/50"></div>
                  <div
                    className={`p-6 rounded-lg shadow-lg ${darkMode ? "bg-gray-700" : "bg-white"}`}
                  >
                    <div className="flex items-center justify-center h-20 w-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-indigo-500/20 to-blue-500/20">
                      <i className="fas fa-paint-brush text-3xl text-indigo-500"></i>
                    </div>
                    <p className="text-center text-gray-300 dark:text-gray-300">
                      Creating custom graphics, animations, and sourcing
                      high-quality footage.
                    </p>
                  </div>
                </div>
              </div>
              {/* Step 3 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                  <div className="mb-4">
                    <span
                      className={`inline-block text-4xl font-bold bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent`}
                    >
                      03
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-indigo-500">
                    Editing & Assembly
                  </h3>
                  <p className="text-gray-300 dark:text-gray-300">
                    Bringing all elements together in a cohesive timeline,
                    focusing on pacing, transitions, and visual flow.
                  </p>
                </div>
                <div className="md:w-1/2 md:pl-12 relative">
                  <div className="hidden md:block absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 shadow-lg shadow-indigo-500/50"></div>
                  <div
                    className={`p-6 rounded-lg shadow-lg ${darkMode ? "bg-gray-700" : "bg-white"}`}
                  >
                    <div className="flex items-center justify-center h-20 w-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-indigo-500/20 to-blue-500/20">
                      <i className="fas fa-cut text-3xl text-indigo-500"></i>
                    </div>
                    <p className="text-center text-gray-300 dark:text-gray-300">
                      Precision editing with attention to timing, rhythm, and
                      storytelling elements.
                    </p>
                  </div>
                </div>
              </div>
              {/* Step 4 */}
              <div className="flex flex-col md:flex-row-reverse items-center">
                <div className="md:w-1/2 md:pl-12 md:text-left mb-6 md:mb-0">
                  <div className="mb-4">
                    <span
                      className={`inline-block text-4xl font-bold bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent`}
                    >
                      04
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-indigo-500">
                    Visual Enhancement
                  </h3>
                  <p className="text-gray-300 dark:text-gray-300">
                    Applying color grading, effects, and motion graphics to
                    elevate the visual quality and impact.
                  </p>
                </div>
                <div className="md:w-1/2 md:pr-12 relative">
                  <div className="hidden md:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 shadow-lg shadow-indigo-500/50"></div>
                  <div
                    className={`p-6 rounded-lg shadow-lg ${darkMode ? "bg-gray-700" : "bg-white"}`}
                  >
                    <div className="flex items-center justify-center h-20 w-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-indigo-500/20 to-blue-500/20">
                      <i className="fas fa-magic text-3xl text-indigo-500"></i>
                    </div>
                    <p className="text-center text-gray-300 dark:text-gray-300">
                      Professional color grading and visual effects to create a
                      distinctive look and feel.
                    </p>
                  </div>
                </div>
              </div>
              {/* Step 5 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                  <div className="mb-4">
                    <span
                      className={`inline-block text-4xl font-bold bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent`}
                    >
                      05
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-indigo-500">
                    Refinement & Delivery
                  </h3>
                  <p className="text-gray-300 dark:text-gray-300">
                    Fine-tuning details, incorporating feedback, and delivering
                    in optimal formats for various platforms.
                  </p>
                </div>
                <div className="md:w-1/2 md:pl-12 relative">
                  <div className="hidden md:block absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 shadow-lg shadow-indigo-500/50"></div>
                  <div
                    className={`p-6 rounded-lg shadow-lg ${darkMode ? "bg-gray-700" : "bg-white"}`}
                  >
                    <div className="flex items-center justify-center h-20 w-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-indigo-500/20 to-blue-500/20">
                      <i className="fas fa-check-circle text-3xl text-indigo-500"></i>
                    </div>
                    <p className="text-center text-gray-300 dark:text-gray-300">
                      Meticulous quality control and optimization for different
                      platforms and devices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className={`py-12 ${darkMode ? "bg-gray-900" : "bg-white"}`}>
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <div className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent mb-4 flex items-center">
                <span>NP</span>
                <i className="fas fa-video ml-2 text-indigo-500"></i>
              </div>
              <p className="text-gray-300 dark:text-gray-300 max-w-md">
                Transforming ideas into captivating visual stories through
                expert editing and creative design.
              </p>
              <p className="flex items-center gap-2 text-gray-300 dark:text-gray-300 max-w-md mt-3">
                <i className="fa fa-envelope" aria-hidden="true"></i>
                nishitsoni495@gmail.com
              </p>
            </div>
            <div className="flex flex-col items-center md:items-end">
              <div className="flex space-x-4 mb-6">
                <a
                  href="https://www.instagram.com/n_editz.28?igsh=aW44bGZwZTJ2bnJj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/50 cursor-pointer !rounded-button whitespace-nowrap"
                >
                  <i className="fab fa-instagram text-white"></i>
                </a>
                <a
                  href="https://youtube.com/@nishitpattani?si=_qBvTwZjFjIM5Tqw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/50 cursor-pointer !rounded-button whitespace-nowrap"
                >
                  <i className="fab fa-youtube text-white"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/nishit-pattani-5b96592a1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/50 cursor-pointer !rounded-button whitespace-nowrap"
                >
                  <i className="fab fa-linkedin-in text-white"></i>
                </a>
              </div>
              <p className="text-gray-300 dark:text-gray-300 text-sm">
                &copy; {new Date().getFullYear()} NP. All rights reserved.
              </p>
            </div>
          </div>
        </div>
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 flex items-center justify-center shadow-lg shadow-indigo-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/50 cursor-pointer !rounded-button whitespace-nowrap"
        >
          <i className="fas fa-arrow-up text-white"></i>
        </button>
      </footer>
    </div>
  );
};

export default Portfolio;

"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ContactForm } from "@/components/contact-form"
import { Code, Database, Globe, Layout, Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-[#292F1E] text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#1A1F14] border-b border-[#CBD597]/20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="font-bold text-2xl text-[#CBD597]">John Doe</div>
          <nav className="hidden md:flex space-x-8">
            {["home", "about", "skills", "projects", "contact"].map((section) => (
              <Link
                key={section}
                href={`#${section}`}
                className={`hover:text-[#CBD597] transition-colors ${
                  activeSection === section ? "text-[#CBD597]" : "text-white/80"
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            ))}
          </nav>
          <Button variant="outline" className="md:hidden border-[#CBD597] text-[#CBD597]">
            Menu
          </Button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="py-20 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute top-0 left-0 w-full h-full"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23CBD597' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            ></div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-[#CBD597]/10 blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-[#8A9A5B]/10 blur-3xl"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <div className="inline-block px-4 py-1 bg-[#CBD597]/20 text-[#CBD597] rounded-full mb-4">
                  Web Developer
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  I'm <span className="text-[#CBD597]">John Doe</span>
                </h1>
                <div className="h-1 w-20 bg-[#CBD597] mb-6"></div>
                <p className="text-lg mb-8 text-white/80">
                  A passionate Full Stack Developer crafting beautiful and functional web experiences with React, PHP,
                  and Laravel.
                </p>
                <div className="flex gap-4">
                  <Button className="bg-[#CBD597] text-[#292F1E] hover:bg-[#b8c285]">View My Work</Button>
                  <Button
                    variant="outline"
                    className="border-[#CBD597] text-[#CBD597] hover:bg-[#CBD597] hover:text-[#292F1E]"
                  >
                    Contact Me
                  </Button>
                </div>
              </div>
              <div className="md:w-1/2 relative">
                <div className="absolute -top-4 -left-4 w-full h-full border-4 border-[#CBD597] rounded-lg"></div>
                <div className="absolute -bottom-4 -right-4 w-full h-full bg-[#8A9A5B]/20 rounded-lg"></div>
                <img
                  src="/placeholder.svg?height=400&width=400"
                  alt="John Doe"
                  className="rounded-lg relative z-10 border-2 border-[#1A1F14]"
                />

                {/* Stats */}
                <div className="absolute -bottom-10 left-0 right-0 flex justify-center">
                  <div className="bg-[#1A1F14] rounded-lg p-4 grid grid-cols-3 gap-6 border border-[#CBD597]/20">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#CBD597]">5+</div>
                      <div className="text-sm text-white/60">Years Experience</div>
                    </div>
                    <div className="text-center border-l border-r border-[#CBD597]/20 px-6">
                      <div className="text-3xl font-bold text-[#CBD597]">50+</div>
                      <div className="text-sm text-white/60">Projects</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#CBD597]">30+</div>
                      <div className="text-sm text-white/60">Clients</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-32 bg-[#1A1F14] relative">
          {/* Decorative Elements */}
          <div
            className="absolute top-0 left-0 w-full h-20 bg-[#292F1E]"
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 0)" }}
          ></div>
          <div
            className="absolute bottom-0 right-0 w-full h-20 bg-[#292F1E]"
            style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%, 0 100%)" }}
          ></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[#CBD597]">About Me</h2>
              <div className="w-20 h-1 bg-[#CBD597] mx-auto mt-4"></div>
            </div>

            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2 relative">
                <div className="absolute inset-0 border-8 border-[#292F1E] rounded-lg transform rotate-3"></div>
                <img
                  src="/placeholder.svg?height=400&width=400"
                  alt="About John Doe"
                  className="rounded-lg shadow-lg relative z-10 transform -rotate-3"
                />
                <div className="absolute -bottom-6 -right-6 bg-[#CBD597] text-[#292F1E] py-2 px-4 rounded-lg font-bold">
                  5+ Years Experience
                </div>
              </div>
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold text-white mb-4">Who am I?</h3>
                <p className="text-white/80 mb-4">
                  I'm a passionate Full Stack Developer with 5+ years of experience creating modern web applications
                  using React, PHP, and Laravel.
                </p>
                <p className="text-white/80 mb-6">
                  My journey began as a self-taught developer, and I've since worked with clients across various
                  industries to deliver high-quality, scalable web solutions.
                </p>

                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div className="bg-[#292F1E] p-4 rounded-lg">
                    <p className="font-semibold text-[#CBD597]">Name:</p>
                    <p className="text-white/80">John Doe</p>
                  </div>
                  <div className="bg-[#292F1E] p-4 rounded-lg">
                    <p className="font-semibold text-[#CBD597]">Email:</p>
                    <p className="text-white/80">john@example.com</p>
                  </div>
                  <div className="bg-[#292F1E] p-4 rounded-lg">
                    <p className="font-semibold text-[#CBD597]">Location:</p>
                    <p className="text-white/80">New York, USA</p>
                  </div>
                  <div className="bg-[#292F1E] p-4 rounded-lg">
                    <p className="font-semibold text-[#CBD597]">Availability:</p>
                    <p className="text-[#8A9A5B] font-medium">Available for Hire</p>
                  </div>
                </div>

                <Button className="bg-[#CBD597] hover:bg-[#b8c285] text-[#292F1E]">Download Resume</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-32 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute top-0 left-0 w-full h-full"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5z' fill='%23CBD597' fillOpacity='1' fillRule='evenodd'/%3E%3C/svg%3E")`,
              }}
            ></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[#CBD597]">My Skills</h2>
              <div className="w-20 h-1 bg-[#CBD597] mx-auto mt-4"></div>
            </div>

            <div className="max-w-3xl mx-auto text-center mb-16">
              <h3 className="text-2xl font-bold text-white mb-4">What I'm good at</h3>
              <p className="text-white/80">
                I specialize in building modern, responsive web applications using the latest technologies. My expertise
                spans both frontend and backend development.
              </p>
            </div>

            {/* Animated Skills */}
            <div className="mb-16">
              <div className="overflow-hidden mb-6">
                <div className="flex animate-[scroll_20s_linear_infinite] whitespace-nowrap">
                  {[
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "TypeScript",
                    "React",
                    "Next.js",
                    "Tailwind CSS",
                    "Framer Motion",
                    "Redux",
                    "GraphQL",
                  ].map((skill) => (
                    <div
                      key={skill}
                      className="mx-4 px-4 py-2 bg-[#292F1E] text-[#CBD597] rounded-lg border border-[#CBD597]/20"
                    >
                      {skill}
                    </div>
                  ))}
                  {[
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "TypeScript",
                    "React",
                    "Next.js",
                    "Tailwind CSS",
                    "Framer Motion",
                    "Redux",
                    "GraphQL",
                  ].map((skill) => (
                    <div
                      key={`${skill}-dup`}
                      className="mx-4 px-4 py-2 bg-[#292F1E] text-[#CBD597] rounded-lg border border-[#CBD597]/20"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>

              <div className="overflow-hidden">
                <div className="flex animate-[scroll-reverse_20s_linear_infinite] whitespace-nowrap">
                  {[
                    "PHP",
                    "Laravel",
                    "MySQL",
                    "PostgreSQL",
                    "Node.js",
                    "Express",
                    "MongoDB",
                    "Firebase",
                    "AWS",
                    "Docker",
                  ].map((skill) => (
                    <div
                      key={skill}
                      className="mx-4 px-4 py-2 bg-[#292F1E] text-[#CBD597] rounded-lg border border-[#CBD597]/20"
                    >
                      {skill}
                    </div>
                  ))}
                  {[
                    "PHP",
                    "Laravel",
                    "MySQL",
                    "PostgreSQL",
                    "Node.js",
                    "Express",
                    "MongoDB",
                    "Firebase",
                    "AWS",
                    "Docker",
                  ].map((skill) => (
                    <div
                      key={`${skill}-dup`}
                      className="mx-4 px-4 py-2 bg-[#292F1E] text-[#CBD597] rounded-lg border border-[#CBD597]/20"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="p-6 border-t-4 border-t-[#CBD597] bg-[#1A1F14] border-[#CBD597]/20">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#292F1E] to-[#8A9A5B] flex items-center justify-center text-white mb-4">
                  <Code size={32} />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Frontend</h4>
                <div className="w-full h-2 bg-[#292F1E] rounded-full mb-2">
                  <div
                    className="h-full bg-gradient-to-r from-[#8A9A5B] to-[#CBD597] rounded-full"
                    style={{ width: "95%" }}
                  ></div>
                </div>
                <p className="text-[#CBD597] font-medium">95%</p>
              </Card>

              <Card className="p-6 border-t-4 border-t-[#CBD597] bg-[#1A1F14] border-[#CBD597]/20">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#8A9A5B] to-[#292F1E] flex items-center justify-center text-white mb-4">
                  <Globe size={32} />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Backend</h4>
                <div className="w-full h-2 bg-[#292F1E] rounded-full mb-2">
                  <div
                    className="h-full bg-gradient-to-r from-[#8A9A5B] to-[#CBD597] rounded-full"
                    style={{ width: "90%" }}
                  ></div>
                </div>
                <p className="text-[#CBD597] font-medium">90%</p>
              </Card>

              <Card className="p-6 border-t-4 border-t-[#CBD597] bg-[#1A1F14] border-[#CBD597]/20">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#292F1E] to-[#8A9A5B] flex items-center justify-center text-white mb-4">
                  <Layout size={32} />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">UI/UX</h4>
                <div className="w-full h-2 bg-[#292F1E] rounded-full mb-2">
                  <div
                    className="h-full bg-gradient-to-r from-[#8A9A5B] to-[#CBD597] rounded-full"
                    style={{ width: "85%" }}
                  ></div>
                </div>
                <p className="text-[#CBD597] font-medium">85%</p>
              </Card>

              <Card className="p-6 border-t-4 border-t-[#CBD597] bg-[#1A1F14] border-[#CBD597]/20">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#8A9A5B] to-[#292F1E] flex items-center justify-center text-white mb-4">
                  <Database size={32} />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Database</h4>
                <div className="w-full h-2 bg-[#292F1E] rounded-full mb-2">
                  <div
                    className="h-full bg-gradient-to-r from-[#8A9A5B] to-[#CBD597] rounded-full"
                    style={{ width: "80%" }}
                  ></div>
                </div>
                <p className="text-[#CBD597] font-medium">80%</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-32 bg-[#1A1F14] relative">
          {/* Decorative Elements */}
          <div
            className="absolute top-0 left-0 w-full h-20 bg-[#292F1E]"
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 0)" }}
          ></div>
          <div
            className="absolute bottom-0 right-0 w-full h-20 bg-[#292F1E]"
            style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%, 0 100%)" }}
          ></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[#CBD597]">My Projects</h2>
              <div className="w-20 h-1 bg-[#CBD597] mx-auto mt-4"></div>
            </div>

            <div className="flex justify-center mb-12">
              <div className="flex space-x-4 bg-[#292F1E] p-2 rounded-lg">
                <Button variant="ghost" className="text-[#CBD597] hover:text-[#CBD597] hover:bg-[#3a4029] font-medium">
                  All
                </Button>
                <Button variant="ghost" className="text-white/70 hover:text-[#CBD597] hover:bg-[#3a4029] font-medium">
                  React
                </Button>
                <Button variant="ghost" className="text-white/70 hover:text-[#CBD597] hover:bg-[#3a4029] font-medium">
                  Laravel
                </Button>
                <Button variant="ghost" className="text-white/70 hover:text-[#CBD597] hover:bg-[#3a4029] font-medium">
                  PHP
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src="/placeholder.svg?height=300&width=500"
                    alt="E-commerce Platform"
                    className="w-full h-64 object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#292F1E] to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                    <div className="p-6 w-full">
                      <div className="flex justify-between items-center">
                        <h3 className="text-xl font-bold text-white">E-commerce Platform</h3>
                        <Button size="sm" variant="outline" className="border-[#CBD597] text-[#CBD597]">
                          View
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#292F1E] p-6 rounded-b-lg border border-t-0 border-[#CBD597]/20">
                  <p className="text-white/70 mb-4">
                    A full-featured online store built with React frontend and Laravel backend.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-[#CBD597]/20 text-[#CBD597] hover:bg-[#CBD597]/30">React</Badge>
                    <Badge className="bg-[#CBD597]/20 text-[#CBD597] hover:bg-[#CBD597]/30">Laravel</Badge>
                    <Badge className="bg-[#CBD597]/20 text-[#CBD597] hover:bg-[#CBD597]/30">MySQL</Badge>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src="/placeholder.svg?height=300&width=500"
                    alt="Task Management App"
                    className="w-full h-64 object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#292F1E] to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                    <div className="p-6 w-full">
                      <div className="flex justify-between items-center">
                        <h3 className="text-xl font-bold text-white">Task Management App</h3>
                        <Button size="sm" variant="outline" className="border-[#CBD597] text-[#CBD597]">
                          View
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#292F1E] p-6 rounded-b-lg border border-t-0 border-[#CBD597]/20">
                  <p className="text-white/70 mb-4">
                    A productivity app with drag-and-drop interface and user authentication.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-[#CBD597]/20 text-[#CBD597] hover:bg-[#CBD597]/30">React</Badge>
                    <Badge className="bg-[#CBD597]/20 text-[#CBD597] hover:bg-[#CBD597]/30">PHP</Badge>
                    <Badge className="bg-[#CBD597]/20 text-[#CBD597] hover:bg-[#CBD597]/30">REST API</Badge>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src="/placeholder.svg?height=300&width=500"
                    alt="Blog Platform"
                    className="w-full h-64 object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#292F1E] to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                    <div className="p-6 w-full">
                      <div className="flex justify-between items-center">
                        <h3 className="text-xl font-bold text-white">Blog Platform</h3>
                        <Button size="sm" variant="outline" className="border-[#CBD597] text-[#CBD597]">
                          View
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#292F1E] p-6 rounded-b-lg border border-t-0 border-[#CBD597]/20">
                  <p className="text-white/70 mb-4">
                    A content management system with markdown support and user comments.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-[#CBD597]/20 text-[#CBD597] hover:bg-[#CBD597]/30">Laravel</Badge>
                    <Badge className="bg-[#CBD597]/20 text-[#CBD597] hover:bg-[#CBD597]/30">React</Badge>
                    <Badge className="bg-[#CBD597]/20 text-[#CBD597] hover:bg-[#CBD597]/30">MySQL</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute top-0 left-0 w-full h-full"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='88' height='24' viewBox='0 0 88 24'%3E%3Cg fill='%23CBD597' fillOpacity='0.4'%3E%3Cpath d='M10 0v6h2v-6h-2zm0 18v6h2v-6h-2zm6-6v2h-2v-2h2zm-18 0v2h2v-2h-2zm18-12v2h-2v-2h2zm-18 0v2h2v-2h-2z'/%3E%3C/g%3E%3C/svg%3E")`,
              }}
            ></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[#CBD597]">Contact Me</h2>
              <div className="w-20 h-1 bg-[#CBD597] mx-auto mt-4"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-[#1A1F14] p-8 rounded-lg border border-[#CBD597]/20">
                <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
                <p className="text-white/80 mb-8">
                  Feel free to reach out if you have any questions or want to work together. I'm always open to
                  discussing new projects and opportunities.
                </p>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#292F1E] flex items-center justify-center text-[#CBD597]">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h4 className="text-[#CBD597] font-medium">Email</h4>
                      <p className="text-white/80">john@example.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#292F1E] flex items-center justify-center text-[#CBD597]">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h4 className="text-[#CBD597] font-medium">Phone</h4>
                      <p className="text-white/80">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#292F1E] flex items-center justify-center text-[#CBD597]">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="text-[#CBD597] font-medium">Location</h4>
                      <p className="text-white/80">New York, USA</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-[#CBD597]/20">
                  <h4 className="text-white font-medium mb-4">Follow Me</h4>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-[#292F1E] flex items-center justify-center text-[#CBD597] hover:bg-[#CBD597] hover:text-[#292F1E] transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-[#292F1E] flex items-center justify-center text-[#CBD597] hover:bg-[#CBD597] hover:text-[#292F1E] transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-[#292F1E] flex items-center justify-center text-[#CBD597] hover:bg-[#CBD597] hover:text-[#292F1E] transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-[#1A1F14] p-8 rounded-lg border border-[#CBD597]/20">
                <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#1A1F14] py-8 border-t border-[#CBD597]/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <div className="font-bold text-xl text-[#CBD597] mb-2">John Doe</div>
              <p className="text-white/60 text-sm">&copy; {new Date().getFullYear()} All Rights Reserved</p>
            </div>
            <div className="flex gap-6">
              <Link href="#" className="text-white/60 hover:text-[#CBD597] transition-colors">
                Home
              </Link>
              <Link href="#" className="text-white/60 hover:text-[#CBD597] transition-colors">
                About
              </Link>
              <Link href="#" className="text-white/60 hover:text-[#CBD597] transition-colors">
                Projects
              </Link>
              <Link href="#" className="text-white/60 hover:text-[#CBD597] transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}


"use client"
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Testinomials from "@/components/sections/Testinomials";

import {motion} from "framer-motion"
import GithubStats from "@/components/github-stats";
import Image from "next/image";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
   <main>
    <Hero />
    <Skills />
    <Testinomials />
    <Projects />

    {/* GitHub Stats Section */}
<section className="container mx-auto px-4 py-20">
  <h2 className="text-3xl font-bold mb-12 text-center">
    GitHub <span className="text-yellow-400 dark:text-yellow-500">Activity</span>
  </h2>
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <GithubStats username="raghavy11" />
  </motion.div>
</section>

<Contact />

       </main>
  );
}
